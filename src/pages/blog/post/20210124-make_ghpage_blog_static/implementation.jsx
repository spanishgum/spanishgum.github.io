import React from "react";
import snippets from "./snippets";
import { Code, CodeBlock, Text } from "components/content";
import links from "./links";

const Implementation = () => {
  return (
    <>
      <Text>
        At this point, all we need to do now is take a look at{" "}
        <Code>App.js</Code>. Just like with <Code>{links.createReactApp}</Code>,
        it will be filled with some starter code that you can wipe out. If you
        read my previous post, I talked about using a common page that was built
        with components like{" "}
        <Code>{`src/app/components/common/page/{header,body,footer}`}</Code>.
        What's really cool about <Code>{links.reactStatic}</Code> is that{" "}
        <Code>App.js</Code> will actually be the same entry point for every
        template! This means this component can be your generic structure if you
        want! For example, this is my implementation:
      </Text>
      <CodeBlock language={"jsx"}>{snippets.appComponent}</CodeBlock>
      <Text>
        If you look deeper into the library, you will find there are specific
        tools for creating common structure like{" "}
        <Code>{links.reactStaticDocument}</Code>. For now, if you ignore all of
        the personalization stuff, you're really left with this:
      </Text>
      <CodeBlock language={"jsx"}>{snippets.appComponentTrimmed}</CodeBlock>
      <Text>
        If you haven't seen <Code>React.Suspense</Code>, all it does is render
        the <Code>fallback</Code> until the data provided by the curret route is
        made available. Whats really import here is the routing. If you've used
        tools like <Code>{links.reactRouter}</Code> or{" "}
        <Code>{links.reachRouter}</Code>, you might have an idea of how this
        works. Simply put, a router routes requests to different components.
        This is often done in a dynamic environment where you can do things like
        "client side routing". Since we are in a static environment generated by{" "}
        <Code>{links.reactStatic}</Code>, we can use it's <Code>Routes</Code>{" "}
        component. With it, every request will be mapped to the components
        defined by our <Code>template</Code> keys in{" "}
        <Code>static.config.js</Code>!
      </Text>
      <Text>
        And with that, you should be good to go! Be sure to check out my{" "}
        <Code>dev</Code> branch if you get stuck, or want to check out how I do
        my components.
      </Text>
      <Text>Cheers!</Text>
    </>
  );
};

export default Implementation;
