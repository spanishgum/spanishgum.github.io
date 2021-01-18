import React from "react";
import { Section } from "../../../common/content";
import Overview from "./overview";
import Structure from "./structure";

const title = "Build a github page blog in react";
const description = "Learn how to build a github page blog using react.";
const Component = () => {
  return (
    <>
      <Section key={"Overview"} heading={"Overview"}>
        <Overview />
      </Section>
      <Section key={"Structure"} heading={"Structure"}>
        <Structure />
      </Section>
    </>
  );
};

export { title, description, Component };
