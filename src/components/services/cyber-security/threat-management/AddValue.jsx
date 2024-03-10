import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function AddValues() {
  return (
    <Box className="unique_slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} className="text-center">
            <Typography
              variant="h2"
              color="primary"
              className="animated-heading"
              pb={3}
            >
              Milestones of Threat Management Service Offerings
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Vulnerability Assessment and Remediation
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Penetration Test
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Attack Simulation
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Incident Readiness and Response
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Ransomware
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Threat Intelligence
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
