import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Gap from "./gap";

const useStyles = makeStyles((theme) => ({
  sectionBoxStyle: {
    padding: theme.spacing(2),
  },
}));

const Section = ({ heading, children }) => {
  const { sectionBoxStyle } = useStyles();
  return (
    <>
      <Box className={sectionBoxStyle}>
        <Box>
          <Typography variant="h5">{heading}</Typography>
        </Box>
        <Gap />
        <Box>{children}</Box>
      </Box>
    </>
  );
};

export default Section;
