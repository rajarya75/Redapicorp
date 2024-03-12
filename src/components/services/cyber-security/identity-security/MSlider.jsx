import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Slider from "react-slick";

export default function MSlider() {
  var settings = {
    dots: false,
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
                  Identity Starts with I, Don&apos;t Let it Become Everything
                </Typography>
                <Typography variant="body2">
                  Technology is necessary for every organization to operate
                  efficiently, and without identity security, using that
                  technology is not possible.Identity security is also known as
                  identity governance and identity management. It safeguards
                  organizations against cybersecurity threats that arise when
                  they provide technology access to geographically dispersed
                  teams accessing data in the cloud.
                </Typography>
                <Typography variant="body2" mt={2}>
                  It aids in the secure authentication, central control, and
                  auditing of how applications, DevOps and automation tools use
                  secrets and privileged credentials to access databases, cloud
                  environments and other sensitive resources.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
