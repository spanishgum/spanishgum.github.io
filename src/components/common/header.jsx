import React from "react";
import { Link } from "react-router-dom";
import { Typography, Divider } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <Link to="/">
        <Typography key="title">spanishgum</Typography>
        <Typography key="subtitle">software engineer</Typography>
      </Link>
      <Divider />
    </>
  );
};

export default Header;
