import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#a14040",
      main: "#8a1111",
      dark: "#600b0b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f08934",
      main: "#ed6c02",
      dark: "#a54b01",
      contrastText: "#fff",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h2: {
      fontSize: "2.625rem",
      fontWeight: "700",
      "@media(max-width: 768px)": {
        fontSize: "1.6rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "700",
      "@media(max-width: 768px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      lineHeight: "1.6",
      "@media(max-width: 768px)": {
        fontSize: ".875rem",
      },
    },
    body2: {
      lineHeight: "1.6",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
