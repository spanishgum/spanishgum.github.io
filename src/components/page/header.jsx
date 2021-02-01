import React from "react";
import { Link } from "@reach/router";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import ThemeButton from "./theme_button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbarSpacerStyle: {
    ...theme.mixins.toolbar,
  },
  linkStyle: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const Header = ({ themeToggle }) => {
  const { linkStyle, toolbarSpacerStyle } = useStyles();
  return (
    <>
      <AppBar color="inherit">
        <Toolbar variant="dense">
          <Link to="/" className={linkStyle}>
            <Typography variant="h5">spanishgum</Typography>
          </Link>
          <ThemeButton themeToggle={themeToggle} />
        </Toolbar>
      </AppBar>
      <div className={toolbarSpacerStyle} />
    </>
  );
};

export default Header;
