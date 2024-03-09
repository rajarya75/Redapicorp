import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function ServiceCta() {
  return (
    <Box className="cta_section bg-primary">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="white">
              Risk is Manageable. Trust and Connect with us to
              <br /> Explore More
            </Typography>
            <Box pt={3}>
              <Button className="btn-light" variant="contained" size="large">
                Get in Touch
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
