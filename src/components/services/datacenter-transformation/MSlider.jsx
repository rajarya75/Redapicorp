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
              <Box sx={{ maxWidth: { md: "80%", xs: "100%" } }}>
                <Typography
                  variant="h2"
                  pb={3}
                  component={"h1"}
                  className="animated-heading"
                >
                  Major Technology Shift – Simplified Advocacy and Management
                </Typography>
                <Typography variant="body2">
                  We bring to you, data center virtualization services, an
                  infrastructure service that is based on the process of
                  designing, developing and deploying a SDN data center based on
                  virtualization solutions.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Your Questions , Our Answers
                </Typography>
                <Typography variant="body2">
                  Software-defined data centers are considered by many to be the
                  next step in the evolution of virtualization and cloud
                  computing as it provides a solution to support both legacy
                  enterprise applications and new cloud computing services. It
                  is our goal and responsibility to maintain ease of access to a
                  virtualized environment that is durable, resilient and
                  underpins the requirement for today and future.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
