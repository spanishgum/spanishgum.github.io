import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gapBoxStyle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Gap = () => {
  const { gapBoxStyle } = useStyles();
  return <Box className={gapBoxStyle} />;
};

export default Gap;
