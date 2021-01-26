import React from "react";
import { Section, SectionView } from "components/content";
import Overview from "./overview";
import Implementation from "./implementation";

const Component = () => {
  return (
    <>
      <SectionView>
        <Section key={"Overview"} heading={"Overview"}>
          <Overview />
        </Section>
        <Section key={"Implementation"} heading={"Implementation"}>
          <Implementation />
        </Section>
      </SectionView>
    </>
  );
};

export default Component;
