import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import Slider from "react-slick";

export default function HomeSlider() {
  var settings = {
    fade: true,
    dots: true,
    loop: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // pauseOnHover: true,
    pauseOnDotsHover: true,
  };

  return (
    <Box className="slider home_slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Slider {...settings}>
              <Box>
                <Typography variant="h2" pb={3} className="animated-heading">
                  From Server to Cloud,
                  <br /> We are Here to Work
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Explore More
                  </Button>
                </Box>
              </Box>

              <Box>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Making History - First Ever High Capacity,
                  <br /> Secure, Encrypted, NNI Partner Free
                  <br /> Backbone to Boost Security and <br /> Business
                  Performance.
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Explore More
                  </Button>
                </Box>
              </Box>

              <Box>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Data is Simple → Processing is Complex → <br />
                  Results are Amazing
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Explore More
                  </Button>
                </Box>
              </Box>

              <Box>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Spy — We are far ahead of you
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Explore More
                  </Button>
                </Box>
              </Box>

              <Box>
                <Typography variant="h2" pb={3} className="animated-heading">
                  You Required Change, We Provide <br /> Innovative Data-Driven
                  Solutions
                  <br /> for your Business
                </Typography>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Explore More
                  </Button>
                </Box>
              </Box>

              <Box>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Why, How, When — Brainstorming,
                  <br /> Planning, Execution — Achieved
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
