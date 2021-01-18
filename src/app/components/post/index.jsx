import React, { useContext } from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../common/page";
import AppContext from "../../context";

const useStyles = makeStyles((theme) => ({
  titleBoxStyle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  componentBoxStyle: {
    paddingBottom: theme.spacing(1),
  },
}));

const Post = ({ post }) => {
  const { posts } = useContext(AppContext);
  const { titleBoxStyle, componentBoxStyle } = useStyles();
  const { title, Component } = posts[post];

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
