import { useEffect, useState } from "react";
import { Container, Text, Flex, Box } from "@chakra-ui/layout";
import { ColorRing } from "react-loader-spinner";
import { currentDayTime, getRandomFromArray } from "../../data/helpers";
import { daytimeQuotes, nighttimeQuotes } from "../../data/quoteable";

export default function Loader() : React.JSX.Element {
    const [randomQuote, setRandomQuote]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(""); // Initialize state for a random quote
    const [currentTime, setCurrentTime] : [number, React.Dispatch<React.SetStateAction<number>>] = useState<number>(new Date().getHours()); // Initialize state for the current time in hours
    const [dayPeriod, setDayPeriod]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("day"); // Initialize state for the current day period

    useEffect(() => {
        // Update the current time in state
        setCurrentTime(new Date().getHours());

        // Calculate dayPeriod and get quotes based on the current time
        currentDayTime(setDayPeriod, currentTime);

        // Determine which set of quotes to use based on the day period
        const currentQuotesArray = dayPeriod === "night" ? nighttimeQuotes : daytimeQuotes;

        // Set a random quote in the state
        getRandomFromArray(setRandomQuote, currentQuotesArray);
    }, [currentTime, dayPeriod]);

    // Define styles for the loader overlay
    const loaderOverlayStyles: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        zIndex: 9999,
    };

    // Define styles for the loader
    const loaderStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30vh",
    };

  


    return (
        <Box 
            className="loader-overlay"
            style={loaderOverlayStyles}
        >
            <Container style={loaderStyles}>
                <Flex>
                    {/* Display a color ring loader */}
                    <ColorRing
                        visible={true}
                        height="94"
                        width="94"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#fb8b24', '#ef476f','#ef476f']}
                    />
                </Flex>
                <Flex mt={"1em"}>
                    <Text>{randomQuote}</Text> {/* Display the random quote */}
                </Flex>
            </Container>
        </Box>
    );
}
