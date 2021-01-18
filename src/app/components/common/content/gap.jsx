import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gapBoxStyle: {
    padding: theme.spacing(2),
  },
}));

const Gap = () => {
  const { gapBoxStyle } = useStyles();
  return <Box className={gapBoxStyle} />;
};

export default Gap;
