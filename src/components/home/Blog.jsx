import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Blog() {
  return (
    <Box className="blogs">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              pb={3}
              className="animated-heading"
              color="primary"
            >
              Blogs
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <Box className="blog_box"></Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="blog_box"></Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="blog_box"></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
