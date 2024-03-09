import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function ServiceCta() {
  return (
    <Box className="cta_section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary">
              With New Concepts and Innovative Ideas Your New Destination for
              Data Traversal.
            </Typography>
            <Typography className="fw-500" variant="h4" color="primary">
              Write to us to Discover our Solutions.
            </Typography>
            <Box pt={3}>
              <Button variant="contained" size="large">
                Get in Touch
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
