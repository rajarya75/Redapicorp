import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
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
                  Protecting your Digital Assets and Reputation
                </Typography>
                <Typography variant="body2">
                  Cyber security refers to every aspect of protecting an
                  organization and its employees and assets against cyber
                  threats. As cyberattacks become more common, sophisticated and
                  corporate networks grow more complex, a variety of cyber
                  security solutions are required to mitigate corporate cyber
                  risk.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Secure Access to Data
                </Typography>
                <Typography variant="body2">
                  Identity attackers almost always start by compromising
                  credentials. From there, they move to other levels of
                  privileged access escalation until they reach their goal –
                  <b>Your DATA</b>
                </Typography>
                <Typography variant="body2" pt={2}>
                  Identity security (also called identity governance and
                  identity management) protects organizations from cyber threats
                  that arise when they provide tech access to geographically
                  dispersed teams accessing data in the cloud. It helps to
                  securely authenticate, centrally control and audit how
                  applications, DevOps and automation tools use secrets and
                  privileged credentials to access databases, cloud environments
                  and other sensitive resources. Protecting your business
                  against the potential cyber risks that target digital
                  identities is imperative.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography variant="h2" pb={3} className="animated-heading">
                  Confronts Threat Proactively
                </Typography>
                <Typography variant="body2">
                  Threat management is a framework and related set of practices
                  that enable organizations to continuously identify, assess,
                  classify and respond to threats and related vulnerabilities,
                  using proven remediation and mitigation techniques and best
                  practices, to reduce dwell time and minimize cyber risks
                  faster and with more accuracy.
                </Typography>
                <Typography variant="body2" pt={2}>
                  It’s about identifying your organization’s attack surface,
                  leveraging your existing security controls to maximize the
                  value of your current investments, knowing where security gaps
                  exist, and understanding which applications, assets, services,
                  and information technology (IT) environments (whether
                  cloud-based, virtual, or on-premise) are most appealing to
                  threat actors. Having a well-planned, fully-staffed, threat
                  and vulnerability management capability allows you to identify
                  cybersecurity vulnerabilities and malicious activity faster,
                  respond more rapidly to security incidents, reduce threat
                  actor dwell time, remediate issues and more naturally, “build
                  security in” – from the beginning – for your overall IT
                  infrastructure, applications and related services.
                </Typography>
              </Box>
              <Box sx={{ maxWidth: { md: "60%", xs: "100%" } }}>
                <Typography
                  variant="h2"
                  pb={3}
                  component={"h1"}
                  className="animated-heading"
                >
                  Secure And Transform Your Business, Security with SASE
                </Typography>
                <Typography variant="body2">
                  SASE security solutions are designed to meet the networking
                  and security needs of the increasingly distributed enterprise.
                  As companies adopt cloud technology, remote work, and mobile
                  devices, a growing percentage of their IT infrastructure lies
                  outside of the headquarters network. SASE solves this problem
                  by moving security services to the network edge, through a
                  global network of PoPs, and integrating networking
                  capabilities into a single solution. By doing so, it enables
                  companies to ensure that all branches and users enjoy
                  high-performance, while securing access to corporate
                  applications, SaaS and the web regardless of location or
                  device.
                </Typography>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
