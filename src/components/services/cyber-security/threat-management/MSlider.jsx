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
                  The World is Watching You But We are Watching the World!
                </Typography>
                <Typography variant="body2">
                  Security threats can affect network connections, apps,
                  websites, social media, mobile, email, and more in many ways.
                  Your security program may be stretched when you adopt IoT,
                  virtual environments, and cloud applications because it
                  wasn&apos;t created to match your business operations. The
                  task of tracking issues becomes more complex with the addition
                  of third-party open-source components and the question of who
                  does what in IT.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Risk is Manageable. Trust and Try Us.
                </Typography>
                <Typography variant="body2">
                  In this constantly changing environment, the ability to find
                  something is essential for fixing it, and hackers are becoming
                  more adept at hiding every day. Investing in more tools to
                  address specific threats can make integration and remediation
                  more challenging. This problem is becoming more serious, and
                  it fails to bridge security and IT operations, reduce risk, or
                  communicate ROI to the board.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Be a Cool Organization as We are Working at The Backend
                </Typography>
                <Typography variant="body2">
                  To effectively manage cyber threats, one must go beyond just
                  identifying and responding to ongoing attacks against the
                  organization. Proactive security policies and tools that can
                  identify and block these attacks are necessary to minimize the
                  potential damage and cost associated with these attacks.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
