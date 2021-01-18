import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headingBoxStyle: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
  },
  childrenBoxStyle: {
    padding: theme.spacing(1),
  },
}));

const Section = ({ heading, children }) => {
  const { headingBoxStyle, childrenBoxStyle } = useStyles();
  return (
    <>
      <Box className={headingBoxStyle}>
        <Typography variant="h5">{heading}</Typography>
      </Box>
      <Box className={childrenBoxStyle}>{children}</Box>
      <Divider />
    </>
  );
};

export default Section;
