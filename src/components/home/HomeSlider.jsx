import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import slider1 from "@/../../public/images/home/from-server-to-cloud.png";
import slider2 from "@/../../public/images/home/making-history.png";
import slider3 from "@/../../public/images/home/data-simple.png";
import slider4 from "@/../../public/images/home/spy.png";
import slider5 from "@/../../public/images/home/you-required.png";
import slider6 from "@/../../public/images/home/why.png";

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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <Box className="slider home_slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Slider {...settings}>
              <Box>
                <Box className="flex-between">
                  <Box>
                    <Typography
                      variant="h2"
                      pb={3}
                      className="animated-heading"
                    >
                      From Server to Cloud, We are Here to Work
                    </Typography>
                    <Box>
                      <Button variant="contained" color="primary" size="large">
                        Explore More
                      </Button>
                    </Box>
                  </Box>
                  <Box className="home-slider-img">
                    <Image src={slider1} alt="slider1" />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box className="flex-between">
                  <Box>
                    <Typography
                      variant="h2"
                      pb={3}
                      className="animated-heading"
                    >
                      Making History - First Ever High Capacity, Secure,
                      Encrypted, NNI Partner Free Backbone to Boost Security and
                      Business Performance.
                    </Typography>
                    <Box>
                      <Button variant="contained" color="primary" size="large">
                        Explore More
                      </Button>
                    </Box>
                  </Box>
                  <Box className="home-slider-img">
                    <Image src={slider2} alt="" />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box className="flex-between">
                  <Box>
                    <Typography
                      variant="h2"
                      pb={3}
                      className="animated-heading"
                    >
                      Data is Simple → Processing is Complex → Results are
                      Amazing
                    </Typography>
                    <Box>
                      <Button variant="contained" color="primary" size="large">
                        Explore More
                      </Button>
                    </Box>
                  </Box>
                  <Box className="home-slider-img">
                    <Image src={slider3} alt="" />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box className="flex-between">
                  <Box>
                    <Typography
                      variant="h2"
                      pb={3}
                      className="animated-heading"
                    >
                      Spy — We are far ahead of you
                    </Typography>
                    <Box>
                      <Button variant="contained" color="primary" size="large">
                        Explore More
                      </Button>
                    </Box>
                  </Box>
                  <Box className="home-slider-img">
                    <Image src={slider4} alt="" />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box className="flex-between">
                  <Box>
                    <Typography
                      variant="h2"
                      pb={3}
                      className="animated-heading"
                    >
                      You Required Change, We Provide Innovative Data-Driven
                      Solutions for your Business
                    </Typography>
                    <Box>
                      <Button variant="contained" color="primary" size="large">
                        Explore More
                      </Button>
                    </Box>
                  </Box>
                  <Box className="home-slider-img">
                    <Image src={slider5} alt="" />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box className="flex-between">
                  <Box>
                    <Typography
                      variant="h2"
                      pb={3}
                      className="animated-heading"
                    >
                      Why, How, When — Brainstorming, Planning, Execution —
                      Achieved
                    </Typography>
                    <Box>
                      <Button variant="contained" color="primary" size="large">
                        Explore More
                      </Button>
                    </Box>
                  </Box>
                  <Box className="home-slider-img">
                    <Image src={slider6} alt="" />
                  </Box>
                </Box>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
