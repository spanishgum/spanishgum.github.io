import React from "react";
import links from "./links";
import snippets from "./snippets";
import { Code, CodeBlock, Text } from "components/content";

const Setup = () => {
  return (
    <>
      <Text>
        Ok, so just like with <Code>{links.createReactApp}</Code>, we are going
        to use <Code>{links.reactStatic}</Code> to build some starter
        boilerplate:
      </Text>
      <CodeBlock language={"jsx"}>{snippets.install}</CodeBlock>
      <Text>
        After giving a name, you should be presented with a list of boilerplate
        options. We are going to start from the <Code>blank</Code> template.
        That said, I recommend you try out the <Code>basic</Code> template
        before moving on. Start up the app with <Code>yarn start</Code>, and
        poke around the code. See if you can get an idea for how it is put
        together.
      </Text>
    </>
  );
};

export default Setup;
