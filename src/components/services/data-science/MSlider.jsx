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
                  Transform Data into Action with Fourth Paradigm of Science
                </Typography>
                <Typography variant="body2">
                  Data science is a concept which brings uniformity in raw data
                  using statistics, data analysis, informatics, and their
                  related methods to create a clear visuality to understand and
                  analyze the actual phenomena of the data. It is becoming an
                  integral part of science and computation and so it’s
                  considered as a <b>fourth paradigm</b> of science.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
