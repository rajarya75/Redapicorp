import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Offerings() {
  return (
    <Box className="our-value home_services">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography variant="h2" pb={3} className="animated-heading light">
              How REDAPi Carrier Services Offerings Adds Value
            </Typography>
          </Grid>
          <Grid item md={1} xs={12}></Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Higher Throughput
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2} xs={12}></Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                End-End Secure and Encrypted Transit
              </Typography>
            </Box>
          </Grid>
          <Grid item md={1} xs={12}></Grid>
          <Grid item md={1} xs={12}></Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Low-Latency
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2} xs={12}></Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                High Resiliency with 99.999% Uptime
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
