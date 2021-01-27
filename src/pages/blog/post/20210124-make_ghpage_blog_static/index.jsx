import React from "react";
import { Section } from "components/content";
import Overview from "./overview";
import Setup from "./setup";
import Configuration from "./configuration";
import Implementation from "./implementation";

const Component = () => {
  return (
    <>
      <Section key={"Overview"} heading={"Overview"}>
        <Overview />
      </Section>
      <Section key={"Setup"} heading={"Setup"}>
        <Setup />
      </Section>
      <Section key={"Configuration"} heading={"Configuration"}>
        <Configuration />
      </Section>
      <Section key={"Implementation"} heading={"Implementation"}>
        <Implementation />
      </Section>
    </>
  );
};

export default Component;
