import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "@material-ui/core";
import { Paper, Typography } from "@material-ui/core";

const Card = ({ link, content }) => {
  // <Link to={{ pathname: "/", search: `?post=${link}` }}>
  return (
    <Link
      href={`/?post=${link}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Paper>
        <Typography>{content.description}</Typography>
      </Paper>
    </Link>
  );
};

export default Card;
