import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function ServiceCta() {
  return (
    <Box className="cta_section bg-primary">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="white">
              It&apos;s a Crime to Lose your Digital Identity.
            </Typography>
            <Box pt={3}>
              <Button className="btn-light" variant="contained" size="large">
                Explore More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
