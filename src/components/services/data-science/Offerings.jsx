import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Offerings() {
  return (
    <Box className="our-value home_services">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography variant="h2" pb={3} className="animated-heading light">
              Milestones of Data Science, Engineering and Operations Offerings
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Data Strategy
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Data Engineering
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Data Analysis and Models
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Data Visualization and Operationalization
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Artificial Intelligence and Machine Learning
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
