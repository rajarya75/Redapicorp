import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import unique1 from "@/../../public/images/home/ProactiveManagemen.png";
import unique2 from "@/../../public/images/home/GlobalCoverage.png";
import unique3 from "@/../../public/images/home/Qualified.png";
import unique4 from "@/../../public/images/home/CustomerAdvocacy.png";
import unique5 from "@/../../public/images/home/Collaborative.png";
import unique6 from "@/../../public/images/home/ProofofConcept.png";
import unique7 from "@/../../public/images/home/TechnologyFocussed.png";
import Image from "next/image";

export default function UniqueSlider() {
  var settings = {
    arrow: true,
    loop: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // pauseOnHover: true,
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
          <Grid item xs={12} className="text-center">
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
                <Box className="icons">
                  <Image
                    src={unique1}
                    alt=""
                    style={{ marginTop: "7px", marginLeft: "-3px" }}
                  />
                </Box>
                <Typography variant="h6" color="primary">
                  Proactive Management
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons">
                  <Image src={unique2} alt="" style={{ marginTop: "-15px" }} />
                </Box>
                <Typography variant="h6" color="primary">
                  Global Coverage & Availability
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons">
                  <Image src={unique3} alt="" style={{ marginLeft: "-8px" }} />
                </Box>
                <Typography variant="h6" color="primary">
                  Qualified and Expert Professionals
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons">
                  <Image
                    src={unique4}
                    alt=""
                    style={{ marginTop: "3px", marginLeft: "-3px" }}
                  />
                </Box>
                <Typography variant="h6" color="primary">
                  Customer Advocacy and Management Experience.
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons">
                  <Image src={unique5} alt="" />
                </Box>
                <Typography variant="h6" color="primary">
                  Collaborative Approach and Delivery Excellence.
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons">
                  <Image src={unique6} alt="" style={{ marginLeft: "-3px" }} />
                </Box>
                <Typography variant="h6" color="primary">
                  Proof of Concept
                </Typography>
              </Box>
              <Box className="unique_item">
                <Box className="icons">
                  <Image src={unique7} alt="" />
                </Box>
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
