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
              <Box sx={{ maxWidth: { md: "70%", xs: "100%" } }}>
                <Typography
                  variant="h2"
                  pb={3}
                  component={"h1"}
                  className="animated-heading"
                >
                  Major Technology Shift – Simplified Advocacy and Management
                </Typography>
                <Typography variant="body2">
                  One of the biggest concerns in IT world is the major
                  technology shift in multiple domains & to stay focused on core
                  competencies is the primary focus area of the customer&apos;s
                  IT unit. This raised a question “Why” before adopting any new
                  technology & having no idea about impact analysis & risk
                  assessment of new technology/solutions, customers would never
                  easily roll-in the new technology/solutions into existing
                  network architecture.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "70%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Your Questions , Our Answers
                </Typography>
                <Typography variant="body2">
                  This is where REDAPi not only answer the customer’s question
                  “Why” but in connection to “Why” add two most important key
                  components “How” & “When”
                </Typography>
                <Typography variant="body2" pt={2}>
                  The team of expert Technical Architects & Engineering of
                  innovative young & risk taking collaborators work closely with
                  customers & follow the complete project management, technical
                  workshops for the customers to attain the next-generation
                  model in IT infra, following the transparency model from the
                  day project kick-off & keeps the customers informed about the
                  risk factors & solutions to mitigate the risk factors.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
