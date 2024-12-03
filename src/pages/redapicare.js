import React from "react";
import CareSlider from "@/components/redapi-care/CareSlider";
import { Box } from "@mui/material";
import Valuable from "@/components/redapi-care/Valuable";

export default function Redapicare() {
  return (
    <Box className="care-page">
      <CareSlider />
      <Valuable />
    </Box>
  );
}
