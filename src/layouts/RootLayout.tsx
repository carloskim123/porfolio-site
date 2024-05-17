
// Import necessary modules and components
import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

// Import local components
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { routes } from '../../data/db';

// Import styling
import "../app.css";
import "../../css.css"

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate: NavigateFunction = useNavigate();


  // Simulate loading for 3 seconds and then set 'isLoading' to false
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);



    // Update 'currentTime' every second
    const intervalId: number = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Add event listener for window resize and call 'closeMobileMenu' function when 'showMenu' changes
  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);
    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', closeMobileMenu);
    };
  });

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  // Close the mobile menu if the window width is >= 770 pixels
  const closeMobileMenu = () => {
    if (window.innerWidth >= 770 && showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(false);
    }
  };

  // Render the RootLayout component
  return (
    <div>
      <Flex flexDirection="column" minH="100vh" cursor="auto">

        <Box
          py={3}
          px={4}
          h="60px"
          w={"100%"}
          top={0}
          position={"fixed"}
          zIndex={100}
          // borderBottom={"2px solid black"}
          backdropFilter="blur(40px)"
          background="rgba(0, 0, 0, 0.001)"
        >
          <Flex justifyContent={"space-between"} alignItems="center" fontSize="18px">
            <Link to="/">
              <Text
                fontSize={"20px"}
                mt="10px"
                marginLeft={"auto"}
                ml={'auto'}
                _hover={{
                  borderBottom: "2px solid black",
                  transform: "translateY(-5px)",
                }}
              >
                Carlos.K
              </Text>
            </Link>
            <Box display={{ base: "block", md: "none" }} onClick={toggleMobileMenu}>
              {showMenu ? (
                <Box onClick={closeMobileMenu}></Box>
              ) : (
                <Box onClick={toggleMobileMenu} _hover={{ cursor: "pointer", transform: "rotate(360deg)" }}>
                  <svg fill="black" width="34px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h14v2H3zm0 5h14v2H3zm0 5h14v2H3z" />
                  </svg>
                </Box>
              )}
            </Box>

            <Flex display={{ base: "none", md: "flex" }} gap="2rem">
              {routes.map(route => (
                <Link key={route.path} to={route.path}>
                  <Text
                    fontSize="20px"
                    _hover={{
                      transform: "translateY(-2px)",
                      borderBottom: "1px solid black",
                    }}
                  >
                    {route.pathname}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>

        <Flex flex="1" paddingTop={"60px"} onClick={closeMobileMenu}>
          <Box
            cursor="pointer"
            position="fixed"
            top={showMenu ? "0px" : "-100vh"}
            left="0"
            zIndex={100}
            w="100%"
            h="100%"
            backdropFilter="blur(2px)"
            background="rgba(0, 0, 0, 0.02)"
            borderTop="2px solid #000"
            transition="top 450ms ease"
          >
            <Box
              className="sidebar"
              overflow="hidden"
              h="80vh"
              w="100%"
              py={7}
              px={6}
              display="flex"
              flexDir="column"
              gap=".5rem"
            >
              <Flex>
                <Box mr={"auto"} fontSize={"23px"}>Carlos Kirui 👋🏽<Text fontSize={"14px"}>{currentTime.toLocaleTimeString()}</Text></Box>
                <Box
                  onClick={closeMobileMenu}
                  cursor="pointer"
                  fontSize="20px"
                  _hover={{ transform: "scale(1.2)" }}
                >✖️</Box>
              </Flex>
              {routes.map(route => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => {
                    navigate(route.path);
                    closeMobileMenu();
                  }}
                >
                  <Text
                    pt={".5rem"}
                    fontSize="25px"
                    _hover={{ cursor: "pointer", textDecoration: "underline", transition: "all" }}
                  >
                    {route.pathname}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
          <Box flex="1">
            <Suspense fallback={<Loader />}>
              {isLoading ? <Loader /> : <Outlet />}
            </Suspense>
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </div>
  );
};

// Export the RootLayout component
export default RootLayout;