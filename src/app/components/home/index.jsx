import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Page from "../common/page";
import Card from "./card";
import AppContext from "../../context";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    padding: theme.spacing(1),
  },
}));

const Home = () => {
  const { posts } = useContext(AppContext);
  const { gridStyle } = useStyles();

  return (
    <Page>
      <Grid container>
        {Object.entries(posts).map(([link, content]) => (
          <Grid
            item
            key={link}
            className={gridStyle}
            xs={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Card link={link} content={content} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default Home;
