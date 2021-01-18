import React, { useState } from "react";
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bulletListBoxStyle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const BulletListView = ({ children }) => {
  const { bulletListBoxStyle } = useStyles();
  return (
    <Box className={bulletListBoxStyle}>
      <Paper>
        <List dense>{children}</List>
      </Paper>
    </Box>
  );
};

const BulletListItem = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    setChecked((prev) => !prev);
  };
  return (
    <ListItem>
      <ListItemIcon onClick={toggle}>
        <Checkbox checked={checked} disableRipple />
      </ListItemIcon>
      {children}
    </ListItem>
  );
};

export { BulletListView, BulletListItem };
