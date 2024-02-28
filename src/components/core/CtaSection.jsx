import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function CtaSection() {
  return (
    <Box className="cta_section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "500", pb: "10px" }}
            >
              Interested in Partnering with REDAPi to
            </Typography>
            <Typography variant="h2" color="primary">
              Collaborate, Innovate, and Elevate ?{" "}
            </Typography>
            <Box pt={3}>
              <Button variant="contained" color="primary" size="large">
                Connect with us Today
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
