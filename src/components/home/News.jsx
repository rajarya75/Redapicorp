import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function News() {
  return (
    <Box className="news">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} className="text-center">
            <Typography
              variant="h2"
              pb={3}
              className="animated-heading"
              color="primary"
            >
              News
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <Box className="new_box"></Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="new_box"></Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="new_box"></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
