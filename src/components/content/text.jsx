import React from "react";
import { Typography } from "@material-ui/core";
import Wrapper from "./wrapper";

const Text = ({ children }) => {
  return (
    <Wrapper>
      <Typography>{children}</Typography>
    </Wrapper>
  );
};

export default Text;
