import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function OurStrategy() {
  return (
    <Box className="our-strategy">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" pb={3} className="animated-heading">
              Our Startegy
            </Typography>
            <Typography variant="body2">
              To achieve smooth and continuous growth we have five value-added
              strategic points to shape
              <br /> the future and help us to build a cherished relationship
              within the ecosystem.
            </Typography>
            <Box className="flex-evenly strategies">
              <Box className="strategy-item">
                <Box className="icon">ddd</Box>
                <Typography variant="body2">
                  Untether the People Power
                </Typography>
              </Box>
              <Box className="strategy-item">
                <Box className="icon">ddd</Box>
                <Typography variant="body2">
                  Innovation & Transformation
                </Typography>
              </Box>
              <Box className="strategy-item">
                <Box className="icon">ddd</Box>
                <Typography variant="body2">
                  Applaud Operational Excellence
                </Typography>
              </Box>
              <Box className="strategy-item">
                <Box className="icon">ddd</Box>
                <Typography variant="body2">
                  Think Wide, Go Beyond Digitalization
                </Typography>
              </Box>
              <Box className="strategy-item">
                <Box className="icon">ddd</Box>
                <Typography variant="body2">
                  Building a bond with Customers
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
