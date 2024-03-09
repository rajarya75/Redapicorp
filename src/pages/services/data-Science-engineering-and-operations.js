import React from "react";
import AddValues from "@/components/services/data-science/AddValue";
import MSlider from "@/components/services/data-science/MSlider";
import Offerings from "@/components/services/data-science/Offerings";
import ServiceCta from "@/components/services/data-science/ServiceCta";

export default function DataScienceEngineeringOperations() {
  return (
    <>
      <MSlider />
      <Offerings />
      <AddValues />
      <ServiceCta />
    </>
  );
}
