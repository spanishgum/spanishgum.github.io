import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Typography key="title" variant="h5" color="primary">
          spanishgum
        </Typography>
      </Link>
    </>
  );
};

export default Header;
