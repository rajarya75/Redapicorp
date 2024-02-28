import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Ecosystem() {
  return (
    <Box className="ecosystem">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Typography variant="h2" className="animated-heading light">
              Our Ecosystem
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body1" color="white">
              Innovation is a result of a genuine meeting of minds. Based on
              that principle, our partnership with the best technology platforms
              allows us to create differentiated solutions that work for you.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
