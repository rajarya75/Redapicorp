import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function ServiceCta() {
  return (
    <Box className="cta_section bg-primary">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="white">
              You are Seekers, We are Listeners and Providers. Data
              Engineering-A deep Ocean to dive. We are the Divers.
            </Typography>
            <Box pt={3}>
              <Button className="btn-light" variant="contained" size="large">
                Reach Out to Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
