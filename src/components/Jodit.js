import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import HtmlToRtfBrowser from "html-to-rtf-browser";
import { Button, Stack } from "@chakra-ui/react";

const EditorJodit = ({ placeholder }) => {
  let htmlToRtf = new HtmlToRtfBrowser();

  const editor = useRef(null);
  const [content, setContent] = useState("");
  let rtf = "";
  if (content) {
    rtf = htmlToRtf.convertHtmlToRtf(content);
  }

  const blob = new Blob([rtf], { type: "octet-stream" });
  const href = URL.createObjectURL(blob);

  return (
    <Stack width="100%" spacing="40" align={{ lg: "center", base: "auto" }}>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <Button
        width={{ base: "80%", lg: "auto" }}
        alignSelf={"center"}
        color="white"
        background={"#0756A5"}
        colorScheme="blue"
        as={"a"}
        href={href}
        download="Your file.rtf"
      >
        Download Now!
      </Button>
    </Stack>
  );
};
export default EditorJodit;
