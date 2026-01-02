import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Box,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import { resources } from "../../data/db";
import gsap from "gsap";
import { MotionWrapper } from "../components/Motion";

export default function LearningResources() {
  const [selectedResource, setSelectedResource] = useState(null);
  const cardRefs = useRef([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    cardRefs.current.forEach((cardRef) => {
      if (!cardRef) return;
      const tl = gsap.timeline({ paused: true });
      tl.to(cardRef, { scale: 1.05, duration: 0.2 });
      const mouseEnter = () => tl.play();
      const mouseLeave = () => tl.reverse();

      cardRef.addEventListener("mouseenter", mouseEnter);
      cardRef.addEventListener("mouseleave", mouseLeave);

      return () => {
        cardRef.removeEventListener("mouseenter", mouseEnter);
        cardRef.removeEventListener("mouseleave", mouseLeave);
      };
    });
  }, []);

  const shortenTitle = (title) =>
    title.length > 100 ? `${title.substring(0, 100)}...` : title;

  return (
    <MotionWrapper>
      <Box
        mt={{ base: 10, md: 16 }}
        mx={{ base: "6vw", md: "3rem", lg: "9%", sm: "10vw" }}
      >
        {/* Header */}
        <Box textAlign="center" mb={{ base: 6, md: 12 }}>
          <Heading
            as="h2"
            fontFamily={"inherit"}
            fontSize={{ base: "2xl", md: "3xl" }}
            mb={2}
          >
            Learning Resources
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Here are some of the tools and materials that helped me grow as a
            developer.
          </Text>
        </Box>

        {/* Resources Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {resources.map((resource, index) => (
            <Box
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => setSelectedResource(resource)}
              cursor="pointer"
            >
              <Box
                p={5}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                borderColor="blackAlpha.200"
                bg="transparent"
                transition="all 0.2s ease"
              >
                <Text fontWeight="semibold" fontSize={{ base: "lg", md: "xl" }}>
                  {shortenTitle(resource.resource_title)}
                </Text>
                <Text
                  mt={2}
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.600"
                >
                  {resource.resource_type} • {resource.resource_level}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Drawer */}
        <Drawer
          placement={isMobile ? "bottom" : "right"}
          isOpen={selectedResource !== null}
          onClose={() => setSelectedResource(null)}
          size={isMobile ? "md" : "lg"}
        >
          <DrawerOverlay />
          <DrawerContent
            bg="#f5e0bc"
            color="black"
            borderRadius={isMobile ? "20px 20px 0 0" : "0"}
            fontSize="16px"
            height={isMobile ? "50%" : "100%"}
          >
            <DrawerHeader fontSize="2xl" borderBottom="1px solid black">
              {selectedResource?.resource_title}
            </DrawerHeader>
            <DrawerBody>
              {selectedResource && (
                <Box lineHeight={1.7}>
                  <Text fontWeight="bold">
                    Creator:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_creator}
                    </Text>
                  </Text>
                  <Text fontWeight="bold">
                    Type:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_type}
                    </Text>
                  </Text>
                  <Text fontWeight="bold">
                    Level:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_level}
                    </Text>
                  </Text>
                  <Text fontWeight="bold">
                    Duration:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_duration}
                    </Text>
                  </Text>
                  <Text fontWeight="bold">
                    Language:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_language}
                    </Text>
                  </Text>
                  <Text fontWeight="bold">
                    Rating:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_rating}
                    </Text>
                  </Text>
                  <Text fontWeight="bold">
                    Reviews:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_reviews}
                    </Text>
                  </Text>
                  <Text fontWeight="bold">
                    Price:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_price}
                    </Text>
                  </Text>
                  <Text fontWeight="bold">
                    Certification:{" "}
                    <Text as="span" fontWeight="normal">
                      {selectedResource.resource_certification || "N/A"}
                    </Text>
                  </Text>
                  {selectedResource.resource_certification_provider && (
                    <>
                      <Text fontWeight="bold">
                        Certification Title:{" "}
                        <Text as="span" fontWeight="normal">
                          {selectedResource.resource_certification_title}
                        </Text>
                      </Text>
                      <Text fontWeight="bold">
                        Certification Provider:{" "}
                        <Text as="span" fontWeight="normal">
                          {selectedResource.resource_certification_provider}
                        </Text>
                      </Text>
                    </>
                  )}
                </Box>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </MotionWrapper>
  );
}
