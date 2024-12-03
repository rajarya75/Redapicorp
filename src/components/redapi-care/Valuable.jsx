import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import cloud from "@/../../public/images/care/cloud.png";
import arrow from "@/../../public/images/care/arrow.png";
import art2 from "@/../../public/images/about/strategy2.png";
import art3 from "@/../../public/images/about/strategy3.png";
import art4 from "@/../../public/images/about/strategy4.png";

export default function Valuable() {
  const [hoveredItem, setHoveredItem] = useState(0);

  const items = [
    { image: art2, caption: "Perks" },
    { image: art3, caption: "Holidays" },
    { image: art4, caption: "Training" },
  ];

  const items1 = [
    { image: art2, caption: 'Balance "gut" and "mind"' },
    { image: art3, caption: 'Be a "believer"' },
    { image: art4, caption: "It's never too late." },
  ];

  return (
    <>
      <Box className="valuable">
        <Container>
          <Grid container spacing={2}>
            {/* Left Section */}
            <Grid item md={8}>
              <Box className="val-left">
                <Image className="arrow" src={arrow} alt="Arrow Icon" />
                <Image className="cloud" src={cloud} alt="Cloud Icon" />
                <Typography variant="h2">
                  We Are <br /> <span>Tougher</span>
                  <br />
                  To Make You
                  <br />
                  <span>Valuable</span>
                </Typography>
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid item md={4}>
              <Box className="val-right">
                {/* Hover Content (Images) */}
                <Box
                  className="hover-content"
                  position="relative"
                  height="280px"
                >
                  <Box>
                    {items.map((item, index) => (
                      <Image
                        key={index}
                        src={item.image}
                        alt={item.caption}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: hoveredItem === index ? 1 : 0, // Control visibility
                          zIndex: hoveredItem === index ? 1 : 0, // Ensure proper stacking
                          transition: "opacity 0.5s ease", // Smooth hide/show effect
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Hover Items (Typography) */}
                <Box className="hover-item" mt={2}>
                  <Typography variant="h5">Evaluation</Typography>
                  {items.map((item, index) => (
                    <Typography
                      key={index}
                      variant="subtitle1"
                      onMouseEnter={() => setHoveredItem(index)} // Set hovered item on mouse enter
                      onMouseLeave={() => setHoveredItem(0)} // Reset to default image on mouse leave
                      style={{
                        cursor: "pointer",
                        marginTop: "12px", // Add spacing between captions
                      }}
                    >
                      {item.caption}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="valuable">
        <Container>
          <Grid container spacing={2}>
            {/* Left Section */}
            <Grid item md={8}>
              <Box className="val-left val-left-1">
                <Image className="arrow" src={arrow} alt="Arrow Icon" />

                <Typography variant="h2">
                  <span>Happy</span>
                  <br /> <span style={{ fontSize: "inherit" }}>To</span>
                  <br />
                  <span> Heal</span>
                  <br />
                  <span>You</span>
                </Typography>

                <Image className="cloud" src={cloud} alt="Cloud Icon" />
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid item md={4}>
              <Box className="val-right val-right-1">
                {/* Hover Content (Images) */}
                <Image className="right-cloud" src={cloud} alt="" />
                <Box
                  className="hover-content"
                  position="relative"
                  height="280px"
                >
                  <Box>
                    {items1.map((item, index) => (
                      <Image
                        key={index}
                        src={item.image}
                        alt={item.caption}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: hoveredItem === index ? 1 : 0, // Control visibility
                          zIndex: hoveredItem === index ? 1 : 0, // Ensure proper stacking
                          transition: "opacity 0.5s ease", // Smooth hide/show effect
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Hover Items (Typography) */}
                <Box className="hover-item" mt={2}>
                  <Typography variant="h5">
                    Be a Happy soul- <br />
                    learning <b>Yog</b>
                  </Typography>
                  {items1.map((item, index) => (
                    <Typography
                      key={index}
                      variant="subtitle1"
                      onMouseEnter={() => setHoveredItem(index)} // Set hovered item on mouse enter
                      onMouseLeave={() => setHoveredItem(0)} // Reset to default image on mouse leave
                      style={{
                        cursor: "pointer",
                        marginTop: "12px", // Add spacing between captions
                      }}
                    >
                      {item.caption}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
