import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import value1 from "@/../../public/images/about/value1.png";
import value2 from "@/../../public/images/about/value2.png";
import value3 from "@/../../public/images/about/value3.png";
import value4 from "@/../../public/images/about/value4.png";
import value5 from "@/../../public/images/about/value5.png";
import value6 from "@/../../public/images/about/value6.png";
import value7 from "@/../../public/images/about/value7.png";
import value8 from "@/../../public/images/about/value8.png";
import value9 from "@/../../public/images/about/value9.png";

export default function OurValues() {
  return (
    <Box className="our-value">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12} className="text-center">
            <Typography variant="h2" pb={3} className="animated-heading light">
              Our Values
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value1} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Learn by Listening
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value2} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Be Transparent & True
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value3} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Achieve the Excellence
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value4} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Always Available
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value5} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Commitment & Accountability
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value6} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Teamwork & Integrity
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value7} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Passion to deliver & Win
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value8} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                We are ambitious
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="value-box">
              <Image src={value9} alt="" />
            </Box>
            <Box className="text-center" pt={1}>
              <Typography variant="body1" color="white">
                Team and Teamwork
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
