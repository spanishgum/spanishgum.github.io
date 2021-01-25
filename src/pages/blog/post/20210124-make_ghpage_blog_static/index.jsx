import React from "react";
import { Section, Code } from "components/content";
import { Typography } from "@material-ui/core";

export default () => {
  return (
    <>
      <Section key={"Overview"} heading={"Overview"}>
        <Typography>
          Coming soon. This site is currently built with react-static so you can
          checkout the <Code>dev</Code> branch if you're curious.
        </Typography>
      </Section>
    </>
  );
};
