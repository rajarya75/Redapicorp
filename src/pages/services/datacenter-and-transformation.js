import React from "react";
import AddValues from "@/components/services/datacenter-transformation/AddValue";
import MSlider from "@/components/services/datacenter-transformation/MSlider";
import Offerings from "@/components/services/datacenter-transformation/Offerings";
import ServiceCta from "@/components/services/datacenter-transformation/ServiceCta";

export default function DatacenterTransformation() {
  return (
    <>
      <MSlider />
      {/* <Offerings /> */}
      <AddValues />
      <ServiceCta />
    </>
  );
}
