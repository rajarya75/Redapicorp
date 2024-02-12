import React from "react";
import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box className="main-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
