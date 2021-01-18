import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { Divider } from "@material-ui/core";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <Divider />
      <Body>{children}</Body>
      <Divider />
      <Footer />
    </>
  );
};

export default Page;
