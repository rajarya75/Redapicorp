import AddValues from "@/components/services/cyber-security/threat-management/AddValue";
import MSlider from "@/components/services/cyber-security/threat-management/MSlider";
import Offerings from "@/components/services/cyber-security/threat-management/Offerings";
import ServiceCta from "@/components/services/cyber-security/threat-management/ServiceCta";
import React from "react";

export default function ThreatManagement() {
  return (
    <>
      <MSlider />
      <Offerings />
      <AddValues />
      <ServiceCta />
    </>
  );
}
