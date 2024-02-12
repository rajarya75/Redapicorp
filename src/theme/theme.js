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
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export default theme;
