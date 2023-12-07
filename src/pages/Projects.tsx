import { useState, useEffect, SetStateAction } from "react";
import { Grid, Box, Image, Link, Text, Input, Skeleton, FormControl } from "@chakra-ui/react";
import { loadNewWindow} from "../../data/helpers";
import { projects } from "../../data/projects_data";
import "../../css.css";
import { motion} from "framer-motion";
// Projects component
const Projects = () => {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);



  // Handle search input
  const handleSearch = (query: SetStateAction<string>) => {
    setSearchQuery(query);
  };

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter projects based on the search query
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech_stack.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <Box>

      <Box
        mt={"3.77rem"}
        h="60px"
        top={0}
        width={"100%"}
        position={"fixed"}
        zIndex={40}
      >
        <FormControl
          onSubmit={(e) => e.preventDefault()}
          px={4}
          h="60px"
          w={"100%"}
          top={0}
          position={"fixed"}
          zIndex={100}
        >
          <Input
            backdropFilter="blur(20px)"
            background="rgba(0, 0, 0, 0.001)"
            variant={"unstyled"}
            padding={"7px"}
            fontSize={"20px"}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search projects"
            rounded={"none"}
            borderBottom={"2px solid black"}
            borderTop={"none"}
            outline={"none"}
            _placeholder={{
              color: "black",
            }}
            fontFamily={"Klee One"}
          />
        </FormControl>
      </Box>
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
          {filteredProjects.map((project) => (
            <>
              {!isLoading ? (
                // Project card
                <Box
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
            </>
          ))}
        </Grid>
      </motion.div>

    </Box>

  );
};



export default Projects;
