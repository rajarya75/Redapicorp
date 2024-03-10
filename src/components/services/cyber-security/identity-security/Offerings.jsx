import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Offerings() {
  return (
    <Box className="our-value home_services">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12} className="text-center">
            <Typography variant="h2" pb={3} className="animated-heading light">
              Milestones of Identity Security Offerings
            </Typography>
            <Typography variant="subtitle1" color="white">
              There are various difficulties that come with every aspect of your
              cybersecurity system. We help you thoroughly address each.
            </Typography>
          </Grid>
          <Grid item md={1} xs={12}></Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Identity and Access Management
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2} xs={12}></Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Privileged Access Management
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
