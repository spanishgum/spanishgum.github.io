import React from "react";
import { Link } from "@material-ui/core";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import ThemeButton from "./theme_button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbarSpacerStyle: {
    ...theme.mixins.toolbar,
  },
}));

const Header = ({ themeToggle }) => {
  const { toolbarSpacerStyle } = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography key="title" variant="h5">
              spanishgum
            </Typography>
          </Link>
          <ThemeButton themeToggle={themeToggle} />
        </Toolbar>
      </AppBar>
      <div className={toolbarSpacerStyle} />
    </>
  );
};

export default Header;
