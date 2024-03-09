import React from "react";
import AddValues from "@/components/services/cyber-security/infrastructure-security/AddValue";
import MSlider from "@/components/services/cyber-security/infrastructure-security/MSlider";
import Offerings from "@/components/services/cyber-security/infrastructure-security/Offerings";
import ServiceCta from "@/components/services/cyber-security/infrastructure-security/ServiceCta";

export default function InfrastructureSecurity() {
  return (
    <>
      <MSlider />
      <Offerings />
      <AddValues />
      <ServiceCta />
    </>
  );
}
