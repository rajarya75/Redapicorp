import AddValues from "@/components/services/cyber-security/identity-security/AddValue";
import MSlider from "@/components/services/cyber-security/identity-security/MSlider";
import Offerings from "@/components/services/cyber-security/identity-security/Offerings";
import ServiceCta from "@/components/services/cyber-security/identity-security/ServiceCta";
import React from "react";

export default function IdentitySecurity() {
  return (
    <>
      <MSlider />
      <Offerings />
      <AddValues />
      <ServiceCta />
    </>
  );
}
