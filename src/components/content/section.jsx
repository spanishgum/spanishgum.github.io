import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  viewBoxStyle: {
    padding: theme.spacing(1),
  },
  headingBoxStyle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  contentBoxStyle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const Section = ({ heading, children }) => {
  const { viewBoxStyle, headingBoxStyle, contentBoxStyle } = useStyles();

  return (
    <>
      <Box className={viewBoxStyle}>
        <Box className={headingBoxStyle}>
          <Typography variant="h5">{heading}</Typography>
        </Box>
        <Box className={contentBoxStyle}>{children}</Box>
      </Box>
    </>
  );
};

export default Section;
