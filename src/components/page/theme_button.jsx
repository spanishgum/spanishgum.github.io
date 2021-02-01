import React from "react";
import { IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { useTheme } from "@material-ui/core/styles";

const ThemeButton = ({ themeToggle }) => {
  const {
    palette: { type },
  } = useTheme();
  const isDark = type === "dark";

  return (
    <IconButton onClick={themeToggle}>
      {isDark ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default ThemeButton;
