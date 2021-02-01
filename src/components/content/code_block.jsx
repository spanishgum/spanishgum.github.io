import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight as light,
  materialDark as dark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Wrapper from "./wrapper";

const useStyles = makeStyles((theme) => ({
  codeBlockBoxStyle: {
    border: "solid",
    borderWidth: 1,
    borderColor: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
  },
}));

const CodeBlock = ({ language, children }) => {
  const {
    palette: { type },
  } = useTheme();
  const isDark = type === "dark";

  const { codeBlockBoxStyle } = useStyles();

  return (
    <Wrapper>
      <Box className={codeBlockBoxStyle}>
        <SyntaxHighlighter language={language} style={isDark ? dark : light}>
          {children}
        </SyntaxHighlighter>
      </Box>
    </Wrapper>
  );
};

export default CodeBlock;
