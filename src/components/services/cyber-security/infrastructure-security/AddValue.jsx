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
              How REDAPi Infrastructure Security Services
              <br /> Adds Value
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Account Security Enhancement
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Ease of Access
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Improvement in Productivity
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4}></Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Centralized Access Control
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
