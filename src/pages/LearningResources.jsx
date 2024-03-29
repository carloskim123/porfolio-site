import { useEffect, useRef } from 'react';
import { Grid, Box, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { resources } from '../../data/db';
import gsap from 'gsap'

const LearningResources = () => {
    const cardRefs = useRef([]);

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
        const maxLength = 29;

        // Check if the content length exceeds the maximum length
        if (resource_title.length > maxLength) {
            // If yes, display the shortened content with "..."
            return `${resource_title.substring(0, maxLength)}...`;
        }

        // If not, display the full content
        return resource_title;
    };

    return (
        <Box mt={12} mx={"20px"}>
            <Box mb={10}>
                <Text fontWeight="semibold" fontSize="2xl" mb={4}>Here are my Resources</Text>
                <Text fontSize="lg">These are some of the resources I used to get to where I am today.</Text>
            </Box>
            <Grid
                mb={10}
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
                gap={6}
                justifyContent="center"
            >
                {resources.map((resource, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => { }}
                        style={{ cursor: "pointer" }}
                    >
                        <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg" borderColor={"black"} bg={"transparent"} overflow="hidden">
                            <Text mt={4} fontWeight="semibold" fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                                {shortenResourceTitle(resource.resource_title)}
                            </Text>
                            <Text fontWeight="medium" fontSize={{ base: "sm", md: "md", lg: "lg" }} color={"black"} mt={2}>
                                {resource.resource_creator}
                            </Text>
                            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} color={"black"} mt={2}>
                                {resource.resource_description}
                            </Text>
                            <Link href={resource.resource_url} isExternal fontStyle={"italic"} textDecor={"underline"} mt={2} color={"blue.500"}>
                                Go to Resource
                            </Link>
                        </Box>
                    </motion.div>
                ))}
            </Grid>
        </Box>
    );
};

export default LearningResources;
