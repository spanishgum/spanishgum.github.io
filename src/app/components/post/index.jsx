import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../common/page";

const useStyles = makeStyles((theme) => ({
  titleBoxStyle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  componentBoxStyle: {
    paddingBottom: theme.spacing(1),
  },
}));

const Post = ({ content }) => {
  const { title, Component } = content;
  const { titleBoxStyle, componentBoxStyle } = useStyles();
  return (
    <Page>
      <Container>
        <Box className={titleBoxStyle}>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box className={componentBoxStyle}>
          <Component />
        </Box>
      </Container>
    </Page>
  );
};

export default Post;
