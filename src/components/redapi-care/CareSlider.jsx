import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import slider1 from "@/../../public/images/about/slider1.png";
import slider2 from "@/../../public/images/about/slider2.png";

export default function CareSlider() {
  var settings = {
    dots: true,
    infinite: true,
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
    <Box className="slider care-bg">
      {/* <div className="wave-background"></div> */}
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Slider {...settings}>
              <Box data-aos="fade-up" data-aos-duration="3000">
                <Box className="flex-between">
                  <Box>
                    <Typography
                      variant="h2"
                      pb={3}
                      component={"h2"}
                      className="animated-heading"
                    >
                      Joining to Relieving
                    </Typography>
                    <Typography variant="body2">
                      Tough observations, Smooth joining, Making work-life{" "}
                      <br />
                      joyful, Stress-free self-time, Growth with guidance and
                      <br />
                      Fiscal support, Get a smooth relieving when heading
                      <br />
                      towards your new Journey.
                    </Typography>
                  </Box>
                  <Box className="about-slider-img">
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
                      component={"h2"}
                      className="animated-heading"
                    >
                      Achieving Mindfulness
                    </Typography>
                    <Typography variant="body2">
                      Globally it is believed that if you are a happy soul, you
                      <br />
                      are completely successful and satisfied. Let&apos;s begin
                      <br />
                      this journey together with REDAPi Care to absorb its
                      <br />
                      positive outcomes.
                    </Typography>
                  </Box>
                  <Box className="about-slider-img">
                    <Image src={slider2} alt="slider2" />
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
