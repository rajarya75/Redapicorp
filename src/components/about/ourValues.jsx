import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function OurValues() {
  return (
    <Box className="our-value">
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Typography variant="h2" pb={3} className="animated-heading light">
              Our Values
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Learn by Listening
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Be Transparent & True
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Achieve the Excellence
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Always Available
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Commitment & Accountability
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Teamwork & Integrity
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Passion to deliver & Win
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                We are ambitious
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="value-box"></Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Team and Teamwork
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
