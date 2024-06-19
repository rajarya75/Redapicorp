import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function VisionMission() {
  return (
    <Box className="vision-mission">
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} className="vision">
            <Typography variant="h2" pb={3} className="animated-heading light">
              Vision
            </Typography>
            <Typography>
              To acquire the highest position in this technical world where
              customers thoughts are stuck only on the REDAPi, globally, when it
              comes to technical delivery and service excellence.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="vision-bg"></Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={0}>
          <Grid item md={6} xs={12}>
            <Box className="mision-bg"></Box>
          </Grid>
          <Grid item md={6} xs={12} className="mission">
            <Typography variant="h2" pb={3} className="animated-heading light">
              Mission
            </Typography>
            <Typography>
              To become an inevitable part of the IT service industry so that in
              the coming years REDAPi can contribute to help the upcoming
              generation to give rise to employment, To secure the kind of
              position where so many eyes can dream big and take that first step
              to dig into the field of success and to develop the crave for
              giving the best and quality based solutions by going out of box.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
