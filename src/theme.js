import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2B44FF"
    },
    secondary: {
      main: "#0ACAD4"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Open Sans", "sans-serif"],
    color: "#263838",
    defaultFont: {
      color: "#263838",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "17px",
      textAlign: "left",
      textTransform: "none"
    },
    secondaryFont: {
      color: "#263838",
      fontSize: 16,
      fontWeight: 700,
      lineHeight: "24px",
      textAlign: "left",
      textTransform: "none"
    },
    tertiaryFont: {
      color: "#54747A",
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "16px",
      textAlign: "left",
      textTransform: "none"
    }
  }
});

export default theme;
