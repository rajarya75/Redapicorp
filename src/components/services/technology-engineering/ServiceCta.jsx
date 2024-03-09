import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function ServiceCta() {
  return (
    <Box className="cta_section bg-primary">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="white">
              Inviting to Listen and Understand Our “Proof of Concept” Before
              Jumping to the “Delivery Mode”.{" "}
              <Typography variant="h4">Are you Willing to Listen?</Typography>
            </Typography>
            <Box pt={3}>
              <Button className="btn-light" variant="contained" size="large">
                Write to us Today
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
