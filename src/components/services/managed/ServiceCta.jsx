import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function ServiceCta() {
  return (
    <Box className="cta_section bg-primary">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              color="white"
              sx={{ fontWeight: "500", pb: "10px" }}
            >
              Interested in Partnering with REDAPi to
            </Typography>
            <Typography variant="h2" color="white">
              Collaborate, Innovate, and Elevate ?{" "}
            </Typography>
            <Box pt={3}>
              <Button className="btn-light" variant="contained" size="large">
                Connect with us Today
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
