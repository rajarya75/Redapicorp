import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Slider from "react-slick";

export default function BusinessSlider() {
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
                  Result-Driven
                  <br /> IT Transformation of Business
                </Typography>
                <Typography variant="body2">
                  REDAPi is a next-generation IT industry that uproots
                  enterprises worldwide to reinvent their business for
                  datacenter, network, security and cloud solutions. Our
                  knowledge for the technology solutions and engineering are
                  held up by the innovative young and risk taking collaborators
                  who not only deliver the excellency and quality but their
                  relentlessly focused and flexible approach with the customers
                  make them the world&apos;s best customers peers.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Read the Globe,
                  <br /> Win the World
                </Typography>
                <Typography variant="body2">
                  We offer end to end Managed Infrastructure Services,
                  Engineering Services, Carrier Services, Next-Gen Datacenter
                  and Transformation, CyberSecurity and Compliance Services to
                  worldwide industries based on Energy, Manufacturing, Aviation,
                  Financial, Healthcare, Education and Ministries. With global
                  access to technology and product partners worldwide, REDAPi
                  has achieved the delivery of Enterprise Networks, Cloud and
                  datacenter Planning, Designing, Implementation,Operational and
                  Optimization, journey with their strong analytical,
                  professional and delivery excellence.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
