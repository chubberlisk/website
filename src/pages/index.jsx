import React from "react";
import Layout from "../components/core/Layout";
import LandingSection from "../components/custom/LandingSection";
import AboutMeSection from "../components/custom/AboutMeSection";
import PaintingsSection from "../components/custom/PaintingsSection";
import ContactMeSection from "../components/custom/ContactMeSection";

const Home = () => (
  <Layout>
    <div className="divide-y-2 divide-wtw-yellow">
      <LandingSection />
      <AboutMeSection />
      <PaintingsSection />
      <ContactMeSection />
    </div>
  </Layout>
);

export default Home;
