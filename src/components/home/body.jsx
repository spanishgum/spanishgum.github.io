import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "./card";
import PostContext from "../post/context";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    padding: theme.spacing(1),
  },
}));

const Body = ({ listing }) => {
  const { posts } = useContext(PostContext);
  const { gridStyle } = useStyles();

  return (
    <Grid container>
      {posts.map((post) => (
        <Grid
          item
          key={post.link}
          className={gridStyle}
          xs={12}
          md={6}
          lg={4}
          xl={3}
        >
          <Card post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Body;
