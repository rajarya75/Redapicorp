import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/../../public/images/core/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
      <Box className="footer">
        <Container>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <Typography variant="h5" className="animated-heading">
                Worldwide Headquarters
              </Typography>
              <Link href={"#"}>
                <Typography
                  variant="h3"
                  component={"span"}
                  color="primary"
                  fontSize={29}
                >
                  REDAPi
                </Typography>
                <Typography
                  variant="h3"
                  component={"span"}
                  color="#7f7f7f"
                  pl={1}
                  fontSize={29}
                >
                  Corporation
                </Typography>
              </Link>
              <Typography variant="subtitle2" pt={1} fontSize={17}>
                YLIOPISTOKATU 7, Helsinki, Finland
              </Typography>
            </Grid>
            <Grid item md={5}>
              <Typography variant="h5" className="animated-heading">
                Company
              </Typography>
              <Box>
                <Link href={"#"}>About us</Link>
              </Box>
              <Box>
                <Link href={"#"}>Careers</Link>
              </Box>
              <Box>
                <Link href={"#"}>Events, </Link>
                <Link href={"#"}> News, </Link>
                <Link href={"#"}> Blogs</Link>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Typography variant="h5" className="animated-heading">
                Follow Us
              </Typography>
              <Box className="social-links">
                <Link href={"#"}>
                  <TwitterIcon />
                </Link>
                <Link href={"#"}>
                  <LinkedInIcon />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="footer-bottom">
        <Typography variant="body2">
          © 2024 REDAPi Corporation | Privacy Statement | Cookie Policy
        </Typography>
      </Box>
    </>
  );
}
