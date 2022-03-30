import React from "react";
import {
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Link,
  Box,
  useDisclosure,
  useColorModeValue,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.300");

  return (
    <Box w="100%" textAlign="center" py="1rem">
      <Link fontSize="xs" color="gray.400" onClick={onOpen}>
        About
      </Link>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Heading size="md">Pomo</Heading>
              <Text>A pomodoro timer built with React</Text>
              <VStack
                border="1px"
                borderRadius="md"
                borderColor={borderColor}
                overflow="clip"
                w="100%"
                p="1rem"
                fontSize="sm"
              >
                <Text fontWeight="500">Credits</Text>
                <SimpleGrid columns={2} spacing="0.5rem">
                  <VStack align="end">
                    <Text>Created by</Text>
                    <Text>Sound effects by</Text>
                  </VStack>
                  <VStack align="start">
                    <Link color="teal.500" href="https://github.com/AlexandrLo">
                      Alexandr Lo
                    </Link>
                    <Link color="teal.500" href="https://soundimage.org/">
                      Eric Matyas
                    </Link>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default About;
