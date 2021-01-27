import React from "react";
import links from "./links";
import { Code, Text } from "components/content";

const Overview = () => {
  return (
    <>
      <Text>
        In my {links.previousPost} I talked about how to build a github pages
        blog using <Code>{links.createReactApp}</Code>. This is a great tool
        when your first starting out, but you may find as your site grows in
        size, the load times may start to degrade. This is because the entire
        site is bundled together and recieved by the browser in one transaction!
        In this post I will show you how to fix this by building your blog with{" "}
        <Code>{links.reactStatic}</Code>.
      </Text>
      <Text>
        As we dive into <Code>{links.reactStatic}</Code>, it will help to have a
        basic understanding of <Code>{links.webpack}</Code>, and{" "}
        <Code>{links.reachRouter}</Code>. I highly recommend this{" "}
        {links.webpackCrashCourse} as an intro to webpack.
      </Text>
    </>
  );
};

export default Overview;
