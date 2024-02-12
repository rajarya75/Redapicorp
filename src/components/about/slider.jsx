import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

export default function Slider() {
  return (
    <Box className="slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4" pb={3}>
              Result-Driven <br />
              IT Transformation of{" "}
            </Typography>
            <Typography>
              REDAPi is a next-generation IT industry that uproots enterprises
              worldwide to reinvent their business for datacenter, network,
              security & cloud solutions. Our knowledge for the technology
              solutions and engineering are held up by the innovative young &
              risk taking collaborators who not only deliver the excellency and
              quality but their relentlessly focused and flexible approach with
              the customers make them the world&epos;s best customers peers.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
