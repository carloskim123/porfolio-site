import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  Box,
  Image,
  Text,
  Flex
} from '@chakra-ui/react';
import { accordionContent, updated_profile_pic } from '../../data/db';
import { MotionWrapper } from '../components/Motion';

export default function About(): React.JSX.Element {
  return (
    <MotionWrapper>
      <Container maxW="container.lg" py={{ base: '3rem', md: '5rem' }}>
        {/* Top Section: Profile + Intro */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={{ base: '2rem', md: '4rem' }}
        >
          {/* Profile Picture */}
          <Box flexShrink={0}>
            <Image
              src={updated_profile_pic}
              borderRadius="full"
              boxSize={{ base: '140px', md: '180px' }}
              objectFit="cover"
              mx="auto"
              mb={{ base: '1rem', md: 0 }}
              border="2px solid rgba(0,0,0,0.1)"
            />
          </Box>

          {/* Intro Text */}
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text fontSize={{ base: '22px', md: '28px', sm:"22px" }} fontWeight="semibold" mb="0.8rem">
              Hey, I'm Carlos, nice to meet you!
            </Text>
            <Text fontSize={{ base: '15px', md: '17px', sm:"17px" }} maxW="600px" color="gray.700">
              I'm a 16-year-old web developer with a passion for creating and solving problems.
              I love the challenge of finding creative solutions to complex problems, and I'm always
              looking to learn new things and improve my skills.
            </Text>
          </Box>
        </Flex>

        {/* Accordion Section */}
        <Box mt={{ base: '3rem', md: '5rem' }}>
          <Accordion allowToggle>
            {accordionContent.map((item, index) => (
              <AccordionItem
                key={index}
                border="none"
                mb="0.5rem"
                boxShadow="sm"
                borderRadius="md"
                overflow="hidden"
              >
                <h2>
                  <AccordionButton  >
                    <Box flex="1" textAlign="left" fontSize={{ base: '20px', md: '19px' }}>
                      {item.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={{ base: '17px', md: '17px' }} color="gray.600">
                  {item.content}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Container>
    </MotionWrapper>
  );
}
