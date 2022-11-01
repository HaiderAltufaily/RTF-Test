import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import convertHtmlToRtf from "../convert";
import HtmlToRtfBrowser from "html-to-rtf-browser";
import { Button, Link, Stack } from "@chakra-ui/react";

const Example = ({ placeholder }) => {
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
    <Stack spacing="40" align="center">
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <Button
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
export default Example;
