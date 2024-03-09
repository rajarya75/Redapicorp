import React from "react";
import AddValues from "@/components/services/cyber-security/AddValue";
import MSlider from "@/components/services/cyber-security/MSlider";
import Offerings from "@/components/services/cyber-security/Offerings";
import ServiceCta from "@/components/services/cyber-security/ServiceCta";

export default function CyberSecurityCompliance() {
  return (
    <>
      <MSlider />
      <Offerings />
      {/* <AddValues /> */}
      <ServiceCta />
    </>
  );
}
