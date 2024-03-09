import React from "react";
import AddValues from "@/components/services/technology-engineering/AddValue";
import MSlider from "@/components/services/technology-engineering/MSlider";
import Offerings from "@/components/services/technology-engineering/Offerings";
import ServiceCta from "@/components/services/technology-engineering/ServiceCta";

export default function TechnologyEngineeringConsultancyServices() {
  return (
    <>
      <MSlider />
      <Offerings />
      <AddValues />
      <ServiceCta />
    </>
  );
}
