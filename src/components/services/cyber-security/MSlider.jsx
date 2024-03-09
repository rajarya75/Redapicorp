import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
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
                  Protecting your Digital Assets and Reputation
                </Typography>
                <Typography variant="body2">
                  Cyber security refers to every aspect of protecting an
                  organization and its employees and assets against cyber
                  threats. As cyberattacks become more common, sophisticated and
                  corporate networks grow more complex, a variety of cyber
                  security solutions are required to mitigate corporate cyber
                  risk.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Secure Access to Data
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Explore More
                  </Button>
                </Box>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Confronts Threat Proactively
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Explore More
                  </Button>
                </Box>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
