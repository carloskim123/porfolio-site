import { useState, useEffect } from "react";
import { Grid, Box, Image, Link, Text, Skeleton } from "@chakra-ui/react";
import { loadNewWindow } from "../../data/helpers";
import { projects } from "../../data/projects_data";
import "../../css.css";
import { motion } from "framer-motion";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Projects component
const Projects = () => {
  // State variables
  const [isLoading, setIsLoading] = useState(true);


  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);



  return (

    <Box>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />

      <motion.div
        initial={{ opacity: 0, x: -90 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -90 }}
      >
        {/* Project grid */}
        <Grid
          key={Math.random()}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={6}
          p={"20px"}
          pt={"4.5rem"}
          pb={"10rem"}
        >
          {projects.map((project) => (
            <div key={project.id}>
              {!isLoading ? (
                // Project card
                <Box
                  onClick={() => project.view_live !== null ? loadNewWindow(project.view_live) : toast.info(`${project.name} project has no live version`)}
                  mb={"3rem"}
                  key={project.id}
                  p={4}
                  borderColor={"#2b2d42"}
                  shadow={"sm"}
                  borderWidth="1px"
                  transition={"transform 0.2s ease, box-shadow 0.2s ease"}
                  _hover={{
                    shadow: "2xl",
                    cursor: "pointer",
                    transform: "translateY(-10px)",
                    rounded: "sm",
                  }}
                  fontSize={"17px"}
                  h="445px"
                >
                  <Box position="relative" height="200px" onClick={() => loadNewWindow(project.project_url)}>
                    <Image
                      src={project.img}
                      minWidth={"100%"}
                      maxHeight={"100%"}
                      alt={project.name}
                      objectFit="contain"
                      marginBottom={7}
                    />
                  </Box>
                  <Text fontWeight="bold" fontSize="2xl" mb={2}>
                    {project.name}
                  </Text>
                  <Text mb={2}>{project.description}</Text>
                  <Box>
                    <div key={project.id}>
                      <Link target="_blank" href={project.project_url} color="blue.500" mr={2}>
                        🔗 Project Repo
                      </Link>
                      {project.view_live != null && (
                        <Link target="_blank" href={project.view_live} color="blue.500">
                          🔗 View Live
                        </Link>
                      )}
                    </div>
                  </Box>
                  <Text>Tech Stack: {project.tech_stack}</Text>
                </Box>
              ) : (
                // Loading skeleton
                <Skeleton height={"445px"} rounded={"none"} />
              )}
            </div>
          ))}
        </Grid>
      </motion.div>

    </Box>

  );
};



export default Projects;
