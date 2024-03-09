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
                  Collaborate with REDAPi to Ensure Reliable Access and Security
                  of Shared Data
                </Typography>
                <Typography variant="body2">
                  The definition of cybersecurity infrastructure encompasses
                  both physical and cybersecurity systems and assets that are so
                  vital to your organization that the incapacity or destruction
                  of them would have a debilitating impact on the organization.
                  A variety of evolving sources are constantly posing a threat
                  to your infrastructure. Compliance puts pressure on you, and
                  you need additional expertise.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Digging Deep with Correct Approach to Analyze the
                  Infrastructure
                </Typography>
                <Typography variant="body2">
                  Are you using new security tools to plug holes? Although this
                  reactive method may solve short-term problems, it eventually
                  leads to an accumulation of diverse technologies with
                  inadequate resources to manage them, resulting in increased
                  risk, complexity, and inefficiency.Ensure efficient,
                  effective, and scaled operations by examining every part of
                  your infrastructure.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
