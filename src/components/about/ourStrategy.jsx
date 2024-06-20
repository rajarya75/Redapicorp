import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import strategy1 from "@/../../public/images/about/strategy1.png";
import strategy2 from "@/../../public/images/about/strategy2.png";
import strategy3 from "@/../../public/images/about/strategy3.png";
import strategy4 from "@/../../public/images/about/strategy4.png";
import strategy5 from "@/../../public/images/about/strategy5.png";

export default function OurStrategy() {
  return (
    <Box className="our-strategy">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={12} className="text-center">
            <Typography variant="h2" pb={3} className="animated-heading">
              Our Strategy
            </Typography>
            <Typography variant="body2">
              To achieve smooth and continuous growth we have five value-added
              strategic points to shape
              <br /> the future and help us to build a cherished relationship
              within the ecosystem.
            </Typography>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box className="strategy-item">
              <Box className="icon">
                <Image src={strategy1} alt="" width={160} />
              </Box>
              <Typography variant="body2">Untether the People Power</Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box className="strategy-item">
              <Box className="icon">
                <Image src={strategy2} alt="" width={240} />
              </Box>
              <Typography variant="body2">
                Innovation & Transformation
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box className="strategy-item">
              <Box className="icon">
                <Image src={strategy3} alt="" width={230} />
              </Box>
              <Typography variant="body2">
                Applaud Operational Excellence
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={2}
            sx={{ display: { md: "initial", xs: "none" } }}
          ></Grid>
          <Grid item md={4} xs={6}>
            <Box className="strategy-item">
              <Box className="icon">
                <Image src={strategy4} alt="" width={100} />
              </Box>
              <Typography variant="body2">
                Think Wide, Go Beyond Digitalization
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box className="strategy-item">
              <Box className="icon">
                <Image src={strategy5} alt="" width={245} />
              </Box>
              <Typography variant="body2">
                Building a bond with Customers
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
