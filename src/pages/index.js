import React from "react";
import Layout from "../components/core/Layout";
import LandingSection from "../components/custom/LandingSection";
import AboutMeSection from "../components/custom/AboutMeSection";
import ContactMeSection from "../components/custom/ContactMeSection";

const Home = () => (
  <Layout>
    <LandingSection />
    <AboutMeSection />
    <ContactMeSection />
  </Layout>
);

export default Home;
