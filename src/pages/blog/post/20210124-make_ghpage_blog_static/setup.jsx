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
      <Text>
        To deploy this app, we are going to use <Code>{links.ghPages}</Code>:
      </Text>
      <CodeBlock language={"jsx"}>{snippets.installGhPages}</CodeBlock>
      <Text> After installing, add this scripts:</Text>
      <CodeBlock language={"jsx"}>{snippets.scripts}</CodeBlock>
      <Text>
        We need to be careful here though. <Code>{links.reactStatic}</Code> will
        be generating a lot of files, some that start with underscores. For this
        reason, we need to make sure we always have a empty{" "}
        <Code>dist/.nojekyll</Code> file committed to master. Make sure you're{" "}
        <Code>.gitignore</Code> is set up to handle this. This tells GitHub to
        avoid their Jekyll deployment pipeline and just present the existing
        static files as they are.
      </Text>
    </>
  );
};

export default Setup;
