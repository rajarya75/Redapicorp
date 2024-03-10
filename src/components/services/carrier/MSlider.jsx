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
              <Box sx={{ maxWidth: { md: "70%", xs: "100%" } }}>
                <Typography
                  variant="h2"
                  pb={3}
                  component={"h1"}
                  className="animated-heading"
                >
                  Make your Data Traverse the High Capacity, Secure and
                  Encrypted Backbone Across Geography..
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Explore More
                  </Button>
                </Box>
              </Box>
              <Box sx={{ maxWidth: { md: "70%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Low-Latency and NNI Partner Free Geo Reachability with 99.999%
                  Uptime..
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
