import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function AddValues() {
  return (
    <Box className="unique_slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} className="text-center">
            <Typography
              variant="h2"
              color="primary"
              className="animated-heading"
              pb={3}
            >
              How REDAPi Data Science, Engineering and Operations Adds Value
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Identifying Outcomes and Trends to Stay Competitive
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Increase Efficiency
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Reduce Risk in Business Planning
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Identifying and Selecting Target Audience with Precision
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Validating Decisions Made by Management
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Facilitating Recruitment of Talent
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Identifying and Acting Upon Opportunities
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Empowering Management to Make Better Decision
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Mitigating Risk and Fraud
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
