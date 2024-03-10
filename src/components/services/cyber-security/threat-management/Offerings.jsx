import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Offerings() {
  return (
    <Box className="our-value home_services">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12} className="text-center">
            <Typography variant="h2" pb={3} className="animated-heading light">
              Why Threat Management is Crucial for Business
            </Typography>
            <Typography variant="subtitle1" color="white">
              Effectively managing cybersecurity risks has become a growing
              challenge for all organizations. Several factors contribute to
              this, including:
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Increase in Network Complexity
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Acceleration of Cyber Threats Landscape
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Under-Staff and Not-Qualified Security Teams
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
