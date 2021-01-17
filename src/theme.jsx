import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import orange from "@material-ui/core/colors/orange";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

export default theme;
