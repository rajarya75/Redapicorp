import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Events() {
  return (
    <Box className="events">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} className="text-center">
            <Typography
              variant="h2"
              pb={3}
              className="animated-heading light"
              color="white"
            >
              Events
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <Box className="event_box"></Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="event_box"></Box>
            <hr />
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="event_box"></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
