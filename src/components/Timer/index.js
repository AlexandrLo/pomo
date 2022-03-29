import React from "react";
import { Text, Container, VStack, HStack, Button } from "@chakra-ui/react";
import { FiPlay, FiFastForward } from "react-icons/fi";

function Timer() {
  return (
    <Container>
      <VStack align="center" justify="center" minH="100vh">
        <Text fontSize="xl" fontWeight="800" color="gray.500">
          Lap 1
        </Text>
        <Text fontSize="8xl" fontWeight="700">
          25:00
        </Text>
        <HStack>
          <Button variant="circle" colorScheme="blue" size="xl">
            <FiPlay />
          </Button>
          <Button variant="circle" colorScheme="gray" size="xl">
            <FiFastForward />
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

export default Timer;
