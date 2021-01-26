import React from "react";
import { Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  viewBoxStyle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
}));

const SectionView = ({ children }) => {
  const { viewBoxStyle } = useStyles();
  return (
    <>
      <Box className={viewBoxStyle}>
        {children.map((child, i) => (
          <>
            {i > 0 && <Divider />}
            {child}
          </>
        ))}
      </Box>
    </>
  );
};

export default SectionView;
