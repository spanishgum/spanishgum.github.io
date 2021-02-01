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
      <CodeBlock language={"bash"}>{snippets.install}</CodeBlock>
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
      <Text>
        {" "}
        Now, modify your <Code>package.json</Code> scripts:
      </Text>
      <CodeBlock language={"jsx"}>{snippets.scripts}</CodeBlock>
      <Text>
        We modify the build script definitition so that every time the directory
        is rebuilt, a <Code>.nojekyll</Code> file is created. This tells GitHub
        to avoid their Jekyll deployment pipeline and just present the existing
        static files as they are. Without this, static files with leading
        underscores will not be served. This causes a problem as{" "}
        <Code>{links.reactStatic}</Code> generates a lot of files that start
        with underscores. You'll might want to update your{" "}
        <Code>.gitignore</Code> to handle this.
      </Text>
    </>
  );
};

export default Setup;
