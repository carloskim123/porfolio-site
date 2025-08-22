import { useState, useEffect } from "react";
import { Grid, Box, Image, Link, Text, Skeleton } from "@chakra-ui/react";
import { loadNewWindow } from "../../data/helpers";
import { projects } from "../../data/projects_data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MotionWrapper } from "../components/Motion";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionWrapper>
      <Box px={{ base: "1rem", md: "3rem" }} pt="4.5rem" pb="10rem">
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

        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={6}
        >
          {projects.map((project) => (
            <Box key={project.id}>
              {!isLoading ? (
                <Box
                  onClick={() =>
                    project.view_live
                      ? loadNewWindow(project.view_live)
                      : toast.info(`${project.name} has no live version`)
                  }
                  p={4}
                  borderWidth="1px"
                  borderColor="blackAlpha.200"
                  boxShadow="sm"
                  borderRadius="md"
                  transition="all 0.2s ease"
                  _hover={{
                    shadow: "2xl",
                    cursor: "pointer",
                    transform: "translateY(-10px)",
                  }}
                  h="445px"
                  display="flex"
                  flexDirection="column"
                >
                  <Box
                    height="200px"
                    mb={4}
                    onClick={() => loadNewWindow(project.project_url)}
                  >
                    <Image
                      src={project.img}
                      alt={project.name}
                      objectFit="contain"
                      w="100%"
                      h="100%"
                    />
                  </Box>
                  <Text fontWeight="bold" fontSize="2xl" mb={2}>
                    {project.name}
                  </Text>
                  <Text mb={2}>{project.description}</Text>
                  <Box mb={2}>
                    <Link
                      target="_blank"
                      href={project.project_url}
                      color="blue.500"
                      mr={3}
                    >
                      🔗 Project Repo
                    </Link>
                    {project.view_live && (
                      <Link target="_blank" href={project.view_live} color="blue.500">
                        🔗 View Live
                      </Link>
                    )}
                  </Box>
                  <Text fontSize="17px">Tech Stack: {project.tech_stack}</Text>
                </Box>
              ) : (
                <Skeleton height="445px" borderRadius="md" />
              )}
            </Box>
          ))}
        </Grid>
      </Box>
    </MotionWrapper>
  );
};

export default Projects;
