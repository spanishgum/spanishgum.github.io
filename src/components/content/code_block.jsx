import React, { useRef, useEffect } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import hljs from "highlightjs";
import "highlightjs/styles/codepen-embed.css";

hljs.initHighlightingOnLoad();

const useStyles = makeStyles((theme) => ({
  codeBlockBoxStyle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const CodeBlock = ({ language, children }) => {
  const ref = useRef();
  const { codeBlockBoxStyle } = useStyles();
  useEffect(() => {
    if (ref.current) {
      hljs.highlightBlock(ref.current);
    }
  }, []);
  return (
    <Box className={codeBlockBoxStyle}>
      <pre ref={ref}>
        <code className={language}>{children}</code>
      </pre>
    </Box>
  );
};

export default CodeBlock;
