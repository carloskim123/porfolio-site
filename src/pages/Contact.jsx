import React, { useRef, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";
import { MotionWrapper } from "../components/Motion";
import { service, template, Fgo } from "../env/email_props";

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
    if (!form.current.user_name.value.trim()) errors.name = "Name is required";
    if (!form.current.user_email.value.trim())
      errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.current.user_email.value.trim()))
      errors.email = "Invalid email format";
    if (!form.current.message.value.trim())
      errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitted(true);
    emailjs.sendForm(service, template, form.current, Fgo).then(
      () => navigate("/success"),
      (error) => {
        navigate("/error");
        throw new Error(error.message);
      }
    );
  };

  return (
    <MotionWrapper>
      <Container maxW="container.md" py={{ base: "4rem", md: "6rem" }}>
        {/* Header */}
        <Box textAlign="center" mb={{ base: "2rem", md: "3rem" }}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="semibold"
            mb="0.5rem"
            fontFamily={"unset"}
          >
            Let's Keep in Touch
          </Heading>
          <Text fontSize={{ base: "xl", md: "xl" }} color="gray.600">
            I'm always open to collaboration, questions, or just saying hi.{" "}
            <br /> Send me a message and I’ll respond as soon as possible.
          </Text>
        </Box>

        {/* Form Section */}
        <Box>
          <form ref={form} onSubmit={handleSubmit}>
            <VStack spacing={5} align="stretch">
              <FormControl id="user_name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="required"
                  id="user_name"
                  // type="text
                  name="user_name"
                  borderColor="blackAlpha.300"
                  focusBorderColor="blue.400"
                  _hover={{ borderColor: "blue.400" }}
                  size="md"
                  rounded="md"
                  // bg="transparent"
                />
                {formErrors.name && (
                  <Text color="red.500">{formErrors.name}</Text>
                )}
              </FormControl>

              <FormControl id="user_email">
                <FormLabel>Email</FormLabel>
                <Input
                  id="user_email"
                  type="email"
                  name="user_email"
                  autoComplete="on"
                  borderColor="blackAlpha.300"
                  focusBorderColor="blue.400"
                  _hover={{ borderColor: "blue.400" }}
                  size="md"
                  rounded="md"
                  bg="transparent"
                />
                {formErrors.email && (
                  <Text color="red.500">{formErrors.email}</Text>
                )}
              </FormControl>

              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Input
                  id="message"
                  as="textarea"
                  name="message"
                  rows={10}
                  borderColor="blackAlpha.300"
                  focusBorderColor="blue.400"
                  _hover={{ borderColor: "blue.400" }}
                  size="md"
                  rounded="md"
                  bg="transparent"
                  resize="vertical"
                  height={"10rem"}
                />
                {formErrors.message && (
                  <Text color="red.500">{formErrors.message}</Text>
                )}
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                w="100%"
                isLoading={isSubmitted}
                loadingText="Submitting..."
                fontWeight="semibold"
                rounded="md"
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </MotionWrapper>
  );
}
