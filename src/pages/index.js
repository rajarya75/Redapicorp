import React from "react";
import HomeSlider from "@/components/home/HomeSlider";
import OurServices from "@/components/home/OurServices";
import UniqueSlider from "@/components/home/UniqueSlider";
import Ecosystem from "@/components/home/Ecosystem";
import Blog from "@/components/home/Blog";
import Events from "@/components/home/Events";
import News from "@/components/home/News";
import CtaSection from "@/components/core/CtaSection";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <OurServices />
      <UniqueSlider />
      <Ecosystem />
      <News />
      <Blog />
      <Events />
      <CtaSection />
    </>
  );
}
