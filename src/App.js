import React from "react";
import "./App.css";
import { Box, ChakraProvider, Stack, Text } from "@chakra-ui/react";
import EditorJodit from "./components/Jodit";
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
          <EditorJodit />
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
