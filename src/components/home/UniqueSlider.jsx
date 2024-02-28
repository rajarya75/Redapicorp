import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function UniqueSlider() {
  var settings = {
    arrow: true,
    loop: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{ fill: "#8a1111", width: "34px", height: "34px" }}
      />
    ),
    prevArrow: (
      <ArrowBackIosIcon
        sx={{ fill: "#8a1111", width: "34px", height: "34px" }}
      />
    ),
  };

  return (
    <Box className="unique_slider">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color="primary"
              className="animated-heading"
              pb={3}
            >
              REDAPi is small but unique.
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mt: "-10px" }}>
              Read below to solve all your queries:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Slider {...settings}>
              <Box className="unique_item">
                <Box className="icons"></Box>
                <Typography variant="h6" color="primary">
                  Proactive Management
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons"></Box>
                <Typography variant="h6" color="primary">
                  Global Coverage & Availability
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons"></Box>
                <Typography variant="h6" color="primary">
                  Qualified and Expert Professionals
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons"></Box>
                <Typography variant="h6" color="primary">
                  Customer Advocacy and Management Experience.
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons"></Box>
                <Typography variant="h6" color="primary">
                  Collaborative Approach and Delivery Excellence.
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons"></Box>
                <Typography variant="h6" color="primary">
                  Proof of Concept
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons"></Box>
                <Typography variant="h6" color="primary">
                  Technology Focussed and Competent Team
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
