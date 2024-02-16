import React from "react";
import OurStrategy from "@/components/about/ourStrategy";
import OurValues from "@/components/about/ourValues";
import BusinessSlider from "@/components/about/businessSlider";
import OurPilots from "@/components/about/ourPilots";
import VisionMission from "@/components/about/visionMission";

export default function About() {
  return (
    <>
      <BusinessSlider />
      <OurPilots />
      <OurStrategy />
      <OurValues />
      <VisionMission />
    </>
  );
}
