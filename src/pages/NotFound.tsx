import { Container, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate  } from "react-router-dom"

function NotFound(): React.JSX.Element {
    const [secondsLeft, setSecondsLeft]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(10);

    const handleTick = () => {
        setSecondsLeft(secondsLeft - 1);
    }
    setInterval(handleTick, 1000);

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(function () {
            navigate("/")
        }, 10000)
    })

    return (
        <Container textAlign={"center"} mt={"15%"}>
            <Text>The Page Your Looking for was not found!!</Text>
            <Text>Redirecting in {secondsLeft} seconds</Text>
        </Container>
    )
}

export default NotFound