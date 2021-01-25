import React from "react";
import { Section } from "components/content";
import Overview from "./overview";
import Implementation from "./implementation";

const title = "Build a github page blog in react";
const description = "Learn how to build a github page blog using react.";
const Component = () => {
  return (
    <>
      <Section key={"Overview"} heading={"Overview"}>
        <Overview />
      </Section>
      <Section key={"Implementation"} heading={"Implementation"}>
        <Implementation />
      </Section>
    </>
  );
};

export default Component;
export { title, description };
