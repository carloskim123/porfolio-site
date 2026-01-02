import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { aboutMes, links, bannerImage } from "../../data/db";
import { daytimeQuotes, nighttimeQuotes } from "../../data/quoteable";
import {
  loadNewWindow,
  shuffle,
  currentDayTime,
  getRandomFromArray,
} from "../../data/helpers";

import "../app.css";
import { MotionWrapper } from "../components/Motion";

export default function Home() {
  const [dayPeriod, setDayPeriod]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("day");
  const [randomQuote, setRandomQuote]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [aboutMe, setAboutMe]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");

  const currentTime: number = new Date().getHours();
  const shuffledArray: unknown[] = shuffle(links);

  useEffect(() => {
    currentDayTime(setDayPeriod, currentTime);

    const currentQuotesArray =
      dayPeriod === "night" ? nighttimeQuotes : daytimeQuotes;

    getRandomFromArray(setRandomQuote, currentQuotesArray);
    getRandomFromArray(setAboutMe, aboutMes);
  }, [currentTime, dayPeriod]);

  return (
    <MotionWrapper>
      <Box mx={{ base: "1vh", md: "7vw", sm: "1vh" }}>
        <Box
          as="section"
          rounded="md"
          px="auto"
          mt="3rem"
          display="flex"
          flexDir={{ base: "column", md: "column", lg: "row", sm: "column" }}
          gap="1rem"
          justifyContent="center"
          fontFamily="mono"
        >
          <Flex p={{ base: "20px", md: "40px", sm: "10px" }} maxWidth="764px">
            <Box>
              <Text
                fontSize={{ base: "22px", lg: "26px", md: "22x", sm: "23px" }}
              >
                {aboutMe}
              </Text>
              <Flex gap="1rem" mt="1.5rem" flexWrap="wrap">
                <Box pt="5px" fontSize="20px">
                  Check me out on:
                </Box>
                {links &&
                  shuffledArray.map((link: Link) => (
                    <Link
                      key={link.url}
                      target="_blank"
                      href={link.url}
                      fontSize="15px"
                      shadow="lg"
                      px="10px"
                      py="10px"
                      rounded="md"
                      _hover={{
                        textDecoration: "underline",
                        shadow: "lg",
                        transition: "ease 200ms",
                      }}
                    >
                      <Box
                        display="flex"
                        flexDir="row"
                        justifyContent="center"
                        gap="5px"
                      >
                        <Image src={link.icon} h="20px" />
                        <Text>{link.title}</Text>
                      </Box>
                    </Link>
                  ))}
              </Flex>
            </Box>
          </Flex>
          <Flex flexDir="column" p={{ base: "20px", md: "50px" }}>
            <Tooltip
              label="click for image url"
              aria-label="A tooltip"
              placement="auto-start"
              hasArrow
            >
              <Image
                src={bannerImage}
                h="300px"
                rounded="none"
                onClick={() => loadNewWindow(bannerImage)}
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Tooltip>
            <Text>{randomQuote}</Text>
          </Flex>
        </Box>
      </Box>
    </MotionWrapper>
  );
}
