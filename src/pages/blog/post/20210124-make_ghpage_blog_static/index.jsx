import React from "react";
import { Section, SectionView } from "components/content";
import Overview from "./overview";
import Setup from "./setup";
import Configuration from "./configuration";
import Implementation from "./implementation";

const Component = () => {
  const sections = {
    Overview: Overview,
    Setup: Setup,
    Configuration: Configuration,
    Implementation: Implementation,
  };
  return (
    <>
      <SectionView>
        {Object.entries(sections).map(([key, comp]) => (
          <Section key={key} heading={key}>
            {comp}
          </Section>
        ))}
      </SectionView>
    </>
  );
};

export default Component;
