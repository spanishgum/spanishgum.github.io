import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bodyBoxStyle: {
    padding: theme.spacing(2),
  },
}));

const Body = ({ children }) => {
  const { bodyBoxStyle } = useStyles();
  return <Box className={bodyBoxStyle}>{children}</Box>;
};

export default Body;
