import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bodyBoxStyle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Body = ({ children }) => {
  const { bodyBoxStyle } = useStyles();
  return (
    <Container>
      <Box className={bodyBoxStyle}>{children}</Box>
    </Container>
  );
};

export default Body;
