import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function ServiceCta() {
  return (
    <Box className="cta_section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary">
              Cyber world is so Fascinating to Explore for Good and Bad Actors.
              Be Aware of Cyber Devils. How?
            </Typography>
            <Box pt={3}>
              <Button variant="contained" size="large">
                Get in Touch With us.
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
