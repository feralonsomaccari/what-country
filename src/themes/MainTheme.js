import { createMuiTheme } from "@material-ui/core/styles";
import { brown, green } from "@material-ui/core/colors/";

const Maintheme = createMuiTheme({
  palette: {
    primary: {
      light: green[500],
      main: green[700],
      dark: green[800],
      contrastText: "#fff"
    },
    secondary: brown
  },
  status: {
    danger: "orange"
  }
});

export default Maintheme;
