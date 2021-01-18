import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";

const Card = ({ post }) => {
  const { link, content } = post;
  return (
    <Link to={link}>
      <Paper>
        <Typography>{content.description}</Typography>
      </Paper>
    </Link>
  );
};

export default Card;
