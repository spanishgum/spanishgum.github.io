import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contentBoxStyle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const Wrapper = ({ children }) => {
  const { contentBoxStyle } = useStyles();
  return <Box className={contentBoxStyle}>{children}</Box>;
};

export default Wrapper;
