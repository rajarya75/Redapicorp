import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import "../styles/main.scss";
import Layout from "./layout";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Ensures animation repeats every time the element enters the viewport
      mirror: true, // Ensures animation occurs when scrolling up as well
    });

    AOS.refresh(); // Refresh AOS on load or content updates
  }, []);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
