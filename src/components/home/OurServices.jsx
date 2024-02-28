import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function OurServices() {
  return (
    <Box className="our-value home_services">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography variant="h2" pb={3} className="animated-heading light">
              Our Services
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Managed Services
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Carrier Services
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Data Science, Engineering and Operations
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                CyberSecurity and Compliance
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Datacenter and Transformation
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Technology Engineering and Consultancy Services
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
