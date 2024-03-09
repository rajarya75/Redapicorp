import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Slider from "react-slick";

export default function MSlider() {
  var settings = {
    dots: true,
    infinite: true,
    loop: true,
    fade: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
  };

  return (
    <Box className="slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Slider {...settings}>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography
                  variant="h2"
                  pb={3}
                  component={"h1"}
                  className="animated-heading"
                >
                  Achieving Excellence in IT
                  <br /> Management and Operations
                </Typography>
                <Typography variant="body2">
                  REDAPi “Managed Services” follows the proactive management
                  approach to IT - attempting to conduct maintenance, upgrades,
                  system monitoring and issues resolution on a day to day
                  operation basis, with the goal of preventing problems before
                  they impact customer business.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  From Server to Cloud – We Manage All
                </Typography>
                <Typography variant="body2">
                  We provide a complete end to end managed services solution
                  comprising people, process and technology that help our
                  customers to offload their IT management and operational tasks
                  to us by strategically managing the customers end to end
                  operations through concatenation of solutions for service desk
                  support, application management, incident management, problem
                  management, change management and vendor management.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
