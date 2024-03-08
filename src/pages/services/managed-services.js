import AddValues from "@/components/services/managed/AddValue";
import MSlider from "@/components/services/managed/MSlider";
import Offerings from "@/components/services/managed/Offerings";
import ServiceCta from "@/components/services/managed/ServiceCta";
import React from "react";

export default function ManagedServices() {
  return (
    <>
      <MSlider />
      <Offerings />
      <AddValues />
      <ServiceCta />
    </>
  );
}
