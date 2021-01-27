import React, { useRef, useEffect } from "react";
import hljs from "highlightjs";
import "highlightjs/styles/codepen-embed.css";
import Wrapper from "./wrapper";

hljs.initHighlightingOnLoad();

const CodeBlock = ({ language, children }) => {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      hljs.highlightBlock(ref.current);
    }
  }, []);
  return (
    <Wrapper>
      <pre ref={ref}>
        <code className={language}>{children}</code>
      </pre>
    </Wrapper>
  );
};

export default CodeBlock;
