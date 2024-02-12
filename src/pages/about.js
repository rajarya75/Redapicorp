import React from "react";
import Slider from "@/components/about/slider";
import OurStrategy from "@/components/about/ourStrategy";
import OurValues from "@/components/about/ourValues";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Slider />
      <Box className="our-pilots">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h4" pb={3}>
                Our Pilots
              </Typography>
              <Typography>
                We are a group of strong team each one of them having core
                experience of more than a decade and started a venture following
                their dreams. The team has passion, risk taking, do-by-own
                attitude and those qualities push us forward to start our own
                trademark “REDAPi Corporation”.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <OurStrategy />
      <OurValues />
      <Box className="vision-mission">
        <Container maxWidth="xl" disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={6} className="vision">
              <Typography variant="h4" pb={3}>
                Our Pilots
              </Typography>
              <Typography>
                We are a group of strong team each one of them having core
                experience of more than a decade and started a venture following
                their dreams. The team has passion, risk taking, do-by-own
                attitude and those qualities push us forward to start our own
                trademark “REDAPi Corporation”.
              </Typography>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>

          <Grid container spacing={2} mt={0}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6} className="mission">
              <Typography variant="h4" pb={3}>
                Our Pilots
              </Typography>
              <Typography>
                We are a group of strong team each one of them having core
                experience of more than a decade and started a venture following
                their dreams. The team has passion, risk taking, do-by-own
                attitude and those qualities push us forward to start our own
                trademark “REDAPi Corporation”.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
