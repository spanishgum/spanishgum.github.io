import React from "react";
import { Typography } from "@material-ui/core";
import links from "./links";
import {
  Code,
  CodeBlock,
  BulletListView,
  BulletListItem,
} from "../../../common/content";

const Overview = () => {
  return (
    <>
      <Typography>
        To build a github page using react, we will use {links.createReactApp},{" "}
        {links.ghPages}, {links.reactRouter}, and {links.materialUI}. Some
        things to keep in mind:
      </Typography>
      <BulletListView>
        <BulletListItem>
          <Typography>A github page is a static site</Typography>
        </BulletListItem>
        <BulletListItem>
          <Typography>
            An <Code>index.html</Code> must exist at the root of the repository
          </Typography>
        </BulletListItem>
        <BulletListItem>
          <Typography>
            All resource paths are relative the root of the repository
          </Typography>
        </BulletListItem>
        <BulletListItem>
          <Typography>
            Your repository must be named{" "}
            <Code>{`<your-github-username>.github.io`}</Code>
          </Typography>
        </BulletListItem>
      </BulletListView>
      <Typography>
        Start by creating your react app and installing dependencies mentioned.
        Note that you don't have to use {links.materialUI}. I use it because it
        is one of the easiest and complete frameworks out there to get started
        with.
      </Typography>
      <CodeBlock language={"bash"}>
        {`npx create-react-app $GITHUB_USERNAME.github.io\n`}
        {`cd $GITHUB_USERNAME.github.io\n`}
        {`yarn add gh-pages            # manage pushing to github\n`}
        {`yarn add react-router-dom    # routing pages\n`}
        {`\n# Below are optional, choose what you want to use\n`}
        {`yarn add @material-ui/core   # core design components\n`}
        {`yarn add @material-ui/styles # theming\n`}
        {`yarn add @material-ui/icons  # simple icons \n`}
        {`yarn add @material-ui/lab    # experimental componments`}
      </CodeBlock>
      <Typography>
        Next, you should add a script to your <Code>package.json</Code> for
        quick deployment:
      </Typography>
      <CodeBlock language={"json"}>
        {`"scripts": {\n`}
        {`  "deploy": "gh-pages -b master -d build",\n`}
        {`}`}
      </CodeBlock>
      <Typography>
        Now every time you want to publish your site, you can run this:
      </Typography>
      <CodeBlock language={"bash"}>
        {`yarn build\n`}
        {`yarn deploy`}
      </CodeBlock>
    </>
  );
};

export default Overview;
