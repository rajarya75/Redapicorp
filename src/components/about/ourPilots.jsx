import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function OurPilots() {
  return (
    <Box className="our-pilots">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography variant="h2" pb={3} className="animated-heading light">
              Our Pilots
            </Typography>
            <Typography variant="body2" pb={2}>
              We are a group of strong team each one of them having core
              experience of more than a decade and started a venture following
              their dreams. The team has passion, risk taking, do-by-own
              attitude and those qualities push us forward to start our own
              trademark “REDAPi Corporation”.
            </Typography>
            <Typography variant="body2">
              Each one of us in our leadership has invested heavily in building
              a strong technical and solution focused business unit of people
              and process. Whether being an individual contributor in the past
              or now being united as a REDAPi’s, we not only deliver excellence
              and quality but our relentlessly focused, flexible approach with
              the customers makes us the world&apos;s best customer peers.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
