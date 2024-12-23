import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function AddValues() {
  return (
    <Box className="unique_slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color="primary"
              className="animated-heading"
              pb={3}
            >
              How REDAPi Datacenter and Transformation Services Adds Value
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                SDN-Based Datacenters
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Automation & Orchestration
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                DataCenter Consolidation & Migration
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Workload and Data Management
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
