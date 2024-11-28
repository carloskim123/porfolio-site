import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  Box,
  Image,
  Text
} from '@chakra-ui/react';
import { accordionContent, updated_profile_pic } from '../../data/db';
import { MotionWrapper } from '../components/Motion';


export default function About(): React.JSX.Element {

  return (
    <MotionWrapper>
      <Box>
        <Container maxW={{ base: '100%', md: '900px' }} textAlign="center" mt="2rem">
          <Box display="flex" justifyContent="center">
            <Image src={updated_profile_pic} rounded="smf" h={{ base: '100px', md: '130px' }} />
          </Box>
          <Box textAlign="center" pt="1rem">
            <Text fontSize={{ base: '20px', md: '25px' }}>Hey there, I'm Carlos, nice to meet you!</Text>
          </Box>
          <Box fontSize={{ base: '16px', md: '18px' }} pt="1rem">
            I'm a 16 - year-old web developer with a passion for creating and solving problems. I love the challenge of finding creative solutions to complex problems, and I'm always looking to learn new things and improve my skills.
          </Box>
        </Container>
        <Container mt="2rem">
          <Accordion allowToggle>
            {accordionContent.map((accordion, index) => (
              <AccordionItem key={index} border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontSize={{ base: '18px', md: '20px' }}>
                      {accordion.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="16px">
                  {accordion.content}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>

    </MotionWrapper>
  );
}
