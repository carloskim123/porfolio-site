import { Box, Flex, Link } from '@chakra-ui/react';
import { loadNewWindow } from '../../data/helpers';
import { pg_lk } from '../../data/db';
import "../app.css"

const Footer = ():React.JSX.Element => {

    return (
        <Box
            className='footer'
            bg="teal.500"
            py={4}
            textAlign="center"
            width="100%"
            backdropFilter="blur(12px)"
            // background="rgba(0, 0, 0, 0.01)"
            
        >
            <Box>
                <Box>
                    &copy; 2023 Carlos Kirui. All rights reserved.
                    <Flex justify="center" mt={2} _hover={{ cursor: "pointer" }} gap={"1rem"}>
                        {pg_lk.map((link, index) => (
                            <Link key={index} transition={".4s ease-in-out"} _hover={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => loadNewWindow(link.url)} textDecoration="none" mr={4}>
                                {link.pathname}
                            </Link>
                        ))}

                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
