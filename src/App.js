import React from "react";
import logo from "./logo.svg";
import { Counter } from "./store/counter/Counter";
import "./App.css";
import Example from "./components/Jodit";
import { Box, ChakraProvider, Stack, Text } from "@chakra-ui/react";
// /0756A5
function App() {
  return (
    <ChakraProvider>
      <Box>
        <Stack
          align="center"
          justify={"center"}
          h="10vh"
          background={"#0756A5"}
        >
          <Text fontSize={"xl"} color="white" textAlign={"center"}>
            Convert HTML text to RTF!
          </Text>
        </Stack>
        <Stack marginTop={"50"}>
          <Example />
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
