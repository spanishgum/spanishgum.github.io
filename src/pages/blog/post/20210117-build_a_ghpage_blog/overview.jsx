import React from "react";
import links from "./links";
import {
  Code,
  CodeBlock,
  Text,
  BulletListView,
  BulletListItem,
} from "components/content";

const Overview = () => {
  return (
    <>
      <Text>
        To build a github page using react, we will use {links.createReactApp},{" "}
        {links.ghPages}, and {links.materialUI}. Some things to keep in mind:
      </Text>
      <BulletListView>
        <BulletListItem>
          <Text>A github page is a static site</Text>
        </BulletListItem>
        <BulletListItem>
          <Text>
            An <Code>index.html</Code> must exist at the root of the repository
          </Text>
        </BulletListItem>
        <BulletListItem>
          <Text>
            All resource paths are relative the root of the repository
          </Text>
        </BulletListItem>
        <BulletListItem>
          <Text>
            Your repository must be named{" "}
            <Code>{`<your-github-username>.github.io`}</Code>
          </Text>
        </BulletListItem>
      </BulletListView>
      <Text>
        Because a static site is required, requests to{" "}
        <Code>/some_endpoint</Code> will only be successful if a resource with
        that name exists. You could use something like {links.reactRouter} and
        the development server to respond to arbitrary requests, but that will
        not work in this scenario. While tools exist to support building static
        sites, we are going to stick to using plain {links.createReactApp} with
        the single index file it generates.
      </Text>
      <Text>
        Start by creating your react app and installing dependencies mentioned.
        Note that you don't have to use {links.materialUI}. I will throughout
        this post to provide some basic page elements. Feel free to ignore them
        and find/build your own compnoents.
      </Text>
      <CodeBlock language={"bash"}>
        {`npx create-react-app $GITHUB_USERNAME.github.io\n`}
        {`cd $GITHUB_USERNAME.github.io\n`}
        {`yarn add gh-pages            # manage pushing to github\n`}
        {`\n# Below are optional, choose what you want to use\n`}
        {`yarn add @material-ui/core   # core design components\n`}
        {`yarn add @material-ui/styles # theming\n`}
        {`yarn add @material-ui/icons  # simple icons \n`}
        {`yarn add @material-ui/lab    # experimental componments`}
      </CodeBlock>
      <Text>
        Next, you should add a script to your <Code>package.json</Code> for
        quick deployment:
      </Text>
      <CodeBlock language={"json"}>
        {`"scripts": {\n`}
        {`  "deploy": "gh-pages -b master -d build",\n`}
        {`}`}
      </CodeBlock>
      <Text>
        Now every time you want to publish your site, you can run this:
      </Text>
      <CodeBlock language={"bash"}>
        {`yarn build\n`}
        {`yarn deploy`}
      </CodeBlock>
      <Text>
        You may also want to ignore the <Code>build</Code> directory in your{" "}
        <Code>.gitignore</Code>.
      </Text>
    </>
  );
};

export default Overview;
