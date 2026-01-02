import { Box, Text, Button } from "@chakra-ui/react";
import { NavigateFunction, useNavigate } from "react-router-dom";

function HasSubmitted(): React.JSX.Element {
  const navigate: NavigateFunction = useNavigate(); // Initialize the navigation function from 'react-router-dom'

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="60vh"
    >
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Submission Successful! {/* Display a success message */}
      </Text>
      <Text fontSize="lg" textAlign="center" mb={8}>
        Your message was sent straight to my inbox. 👌{" "}
        {/* Display the developer's email address */}
      </Text>
      <Button colorScheme="blue" size="lg" onClick={() => navigate("/")}>
        Back to Home {/* Provide a button to return to the home page */}
      </Button>
    </Box>
  );
}

export default HasSubmitted;
