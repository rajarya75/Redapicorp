import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function AddValues() {
  return (
    <Box className="unique_slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color="primary"
              className="animated-heading"
              pb={3}
            >
              How REDAPi Managed Services Offerings
              <br /> Adds Value
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Stunted Downtime & Increase Productivity
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Compliance & Security
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Increased IT Staff Productivity
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Minimize Resourcing Cost
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Quality Assurance & Expert Advice
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Truncate Business Impact
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Attainable IT Investment
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                Increase Business Productivity
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="unique_item">
              <Box className="icons"></Box>
              <Typography variant="h6" color="primary">
                24x7x365 Support
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
