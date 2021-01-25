import React from "react";
import { useRouteData } from "react-static";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    padding: theme.spacing(1),
  },
}));

const Card = ({ post }) => {
  return (
    <Link href={post.link} style={{ textDecoration: "none", color: "inherit" }}>
      <Paper>
        <Typography>{post.title}</Typography>
      </Paper>
    </Link>
  );
};

const Home = () => {
  const { posts } = useRouteData();
  const { gridStyle } = useStyles();

  return (
    <>
      <Grid container>
        {posts.map((post) => (
          <Grid
            item
            key={post.id}
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
    </>
  );
};

export default Home;
