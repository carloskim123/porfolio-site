import React, { useRef, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";
import { MotionWrapper } from "../components/Motion";

export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });


  const validateForm = () => {
    const errors = {};

    if (!form.current.user_name.value.trim()) {
      errors.name = "Name is required";
    }

    if (!form.current.user_email.value.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^\S+@\S+\.\S+$/.test(form.current.user_email.value.trim())
    ) {
      errors.email = "Invalid email format";
    }

    if (!form.current.message.value.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setIsSubmitted(true);
      emailjs
        .sendForm(
          "service_cq60crt",
          "template_4vjr6va",
          form.current,
          "FgoXhK367G_Vghk5J"
        )
        .then(
          (result) => {
            navigate("/success");
            return result;
          }, (error) => {
            navigate('/error');
            throw new Error(error.message);
          }
        );
    }
  };

  return (
    <MotionWrapper>
      <Container mt={"6rem"}>
        <Flex
          display={"flex"}
          justifyContent={"center"}
          fontSize={"26px"}
          my={"1rem"}
        >
         Let's keep in touch &nbsp;[]~(￣▽￣)~* 
        </Flex>
        <Box
          maxW="md"
          mx="auto"
          p={4}
          rounded="md"
        >
          <form onSubmit={handleSubmit} ref={form}>
            {/* Remove isDisabled prop from input elements */}
            <FormControl id="user_name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                autoComplete="on"
                autoFocus={true}
                type="text"
                name="user_name"
                borderColor="black.300"
                focusBorderColor="blue.400"
                _hover={{
                  borderColor: "blue.400",
                }}
              />
              <Text color="red.500">{formErrors.name}</Text>
            </FormControl>
            <FormControl id="user_email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="user_email"
                borderColor="black.300"
                autoComplete="on"
                focusBorderColor="blue.400"
                _hover={{
                  borderColor: "blue.400",
                }}
              />
              <Text color="red.500">{formErrors.email}</Text>
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>Message</FormLabel>
              <Input
                as="textarea"
                pt={"5px"}
                autoCorrect="true"
                autoSave="true"
                name="message"
                rows={4}
                height={"120px"}
                borderColor="black.300"
                focusBorderColor="blue.400"
                _hover={{
                  borderColor: "blue.400",
                }}
              />
              <Text color="red.500">{formErrors.message}</Text>
            </FormControl>

            <Button
              colorScheme="blue"
              size="lg"
              w={"100%"}
              type="submit"
              isLoading={isSubmitted}
              loadingText="Submitting..."
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </MotionWrapper>
  );
}
