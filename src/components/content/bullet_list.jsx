import React, { useState } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";

import Wrapper from "./wrapper";

const BulletListView = ({ children }) => {
  return (
    <Wrapper>
      <Paper>
        <List dense>{children}</List>
      </Paper>
    </Wrapper>
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
