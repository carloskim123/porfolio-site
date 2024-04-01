import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Text, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useMediaQuery } from '@chakra-ui/react';
import { resources } from '../../data/db';
import gsap from "gsap";

const LearningResources = () => {
    const [selectedResource, setSelectedResource] = useState(null);
    const cardRefs = useRef([]);
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        cardRefs.current.forEach((cardRef) => {
            const tl = gsap.timeline({ paused: true });
            tl.to(cardRef, { scale: 1.05, duration: 0.2 });

            cardRef.addEventListener('mouseenter', () => tl.play());
            cardRef.addEventListener('mouseleave', () => tl.reverse());

            return () => {
                cardRef.removeEventListener('mouseenter', () => tl.play());
                cardRef.removeEventListener('mouseleave', () => tl.reverse());
            };
        });
    }, []);


    const shortenResourceTitle = (resource_title) => {
        // Set the maximum length for the displayed content
        const maxLength = 100;

        // Check if the content length exceeds the maximum length
        if (resource_title.length > maxLength) {
            // If yes, display the shortened content with "..."
            return `${resource_title.substring(0, maxLength)}...`;
        }

        // If not, display the full content
        return resource_title;
    };

    const openDrawer = (resource) => {
        setSelectedResource(resource);
    };

    const closeDrawer = () => {
        setSelectedResource(null);
    };

    return (
        <Box mt={12} mx={'20px'}>
            <Box mb={10}>
                <Text fontWeight="semibold" fontSize="2xl" mb={4}>
                    Here are my Resources
                </Text>
                <Text fontSize="lg">These are some of the resources I used to get to where I am today.</Text>
            </Box>
            <Grid
                mb={10}
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
                gap={6}
                justifyContent="center"
            >
                {resources.map((resource, index) => (
                    <Box
                        key={index}
                        onClick={() => openDrawer(resource)}
                        style={{ cursor: 'pointer' }}
                        ref={(el) => (cardRefs.current[index] = el)}
                    >
                        <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg" borderColor={'black'} bg={'transparent'} overflow="hidden">
                            <Text mt={4} fontWeight="semibold" fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }}>
                                {shortenResourceTitle(resource.resource_title)}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </Grid>
            <Drawer placement={isMobile ? "bottom" : "right"} isOpen={selectedResource !== null} onClose={closeDrawer} size={isMobile ? "10%" : "lg"}>
                <DrawerOverlay />
                <DrawerContent fontSize={"18px"} borderTop={"3px solid black"} borderTopLeftRadius={"20px"} borderTopRightRadius={"20px"} color={'black'} bg={"#b0966b;"} height={{ base: "500px", lg: "100%", sm: "500px" }}>
                    <DrawerHeader fontSize={"25px"} color={"gray.900"}>{selectedResource?.resource_title}</DrawerHeader>
                    <DrawerBody>
                        <Text fontWeight="bold">Creator: <Text as="span" fontWeight="normal">{selectedResource?.resource_creator}</Text></Text>
                        <Text fontWeight="bold">Type: <Text as="span" fontWeight="normal">{selectedResource?.resource_type}</Text></Text>
                        <Text fontWeight="bold">Level: <Text as="span" fontWeight="normal">{selectedResource?.resource_level}</Text></Text>
                        <Text fontWeight="bold">Duration: <Text as="span" fontWeight="normal">{selectedResource?.resource_duration}</Text></Text>
                        <Text fontWeight="bold">Language: <Text as="span" fontWeight="normal">{selectedResource?.resource_language}</Text></Text>
                        <Text fontWeight="bold">Rating: <Text as="span" fontWeight="normal">{selectedResource?.resource_rating}</Text></Text>
                        <Text fontWeight="bold">Reviews: <Text as="span" fontWeight="normal">{selectedResource?.resource_reviews}</Text></Text>
                        <Text fontWeight="bold">Price: <Text as="span" fontWeight="normal">{selectedResource?.resource_price}</Text></Text>
                        <Text fontWeight="bold">Certification: <Text as="span" fontWeight="normal">{selectedResource?.resource_certification}</Text></Text>

                        {(selectedResource?.resource_certification_provider || selectedResource?.resource_certification_title) ? (
                            <>
                                <Text fontWeight="bold">Certification Title: <Text as="span" fontWeight="normal">{selectedResource?.resource_certification_title}</Text></Text>
                                <Text fontWeight="bold">Certification Provider: <Text as="span" fontWeight="normal">{selectedResource?.resource_certification_provider}</Text></Text>
                            </>
                        ) : (
                            <Text fontWeight="bold" textStyle={'italic'}>no certification information available</Text>
                        )}

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default LearningResources;
