import React from "react";
import { Section } from "components/content";
import Overview from "./overview";
import Implementation from "./implementation";

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
