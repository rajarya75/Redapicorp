import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import service1 from "@/../../public/images/home/ManagedServices.png";
import service2 from "@/../../public/images/home/CarrierServices.png";
import service3 from "@/../../public/images/home/DataScience.png";
import service4 from "@/../../public/images/home/CyberSecurity.png";
import service5 from "@/../../public/images/home/Datacenter.png";
import service6 from "@/../../public/images/home/Technology.png";
import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <Box className="our-value home_services">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12} className="text-center">
            <Typography variant="h2" pb={3} className="animated-heading light">
              Our Services
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Link href={"/services/managed-services"}>
              <Box className="value-box">
                <Image src={service1} alt="" />
              </Box>
              <Box className="text-center" pt={1}>
                <Typography variant="body1" color="white">
                  Managed Services
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item md={4} xs={12}>
            <Link href={"/services/carrier-services"}>
              <Box className="value-box">
                <Image src={service2} alt="" />
              </Box>
              <Box className="text-center" pt={1}>
                <Typography variant="body1" color="white">
                  Carrier Services
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item md={4} xs={12}>
            <Link href={"/services/data-Science-engineering-and-operations"}>
              <Box className="value-box">
                <Image src={service3} alt="" />
              </Box>
              <Box className="text-center" pt={1}>
                <Typography variant="body1" color="white">
                  Data Science, Engineering and Operations
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item md={4} xs={12}>
            <Link href={"/services/cyberSecurity-and-compliance"}>
              <Box className="value-box">
                <Image src={service4} alt="" />
              </Box>
              <Box className="text-center" pt={1}>
                <Typography variant="body1" color="white">
                  CyberSecurity and Compliance
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item md={4} xs={12}>
            <Link href={"/"}>
              <Box className="value-box">
                <Image src={service5} alt="" />
              </Box>
              <Box className="text-center" pt={1}>
                <Typography variant="body1" color="white">
                  Datacenter and Transformation
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item md={4} xs={12}>
            <Link
              href={"/services/technology-engineering-and-consultancy-services"}
            >
              <Box className="value-box">
                <Image src={service6} alt="" />
              </Box>
              <Box className="text-center" pt={1}>
                <Typography variant="body1" color="white">
                  Technology Engineering and Consultancy Services
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
