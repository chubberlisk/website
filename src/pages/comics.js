import React from "react";
import Layout from "../components/core/Layout";
import Section from "../components/core/Section";
import Image from "next/image";
import ComicCard from "../components/custom/ComicCard";

const Comics = () => (
  <Layout title="Comics | Wen Ting Wang">
    <Section id="comics" minHeight="min-h-screen-90">
      <div className="container">
        <h1>Comics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ComicCard
            image={{
              src: "/images/paintings/1-i-am-tingker-bell.png",
              alt: "4 panel comic, with each panel of Tingker Bell",
            }}
            title="I am Tingker Bell"
            publishedDate={"12th November 2021"}
            tags={["Tingker Bell"]}
          />
        </div>
      </div>
    </Section>
  </Layout>
);

export default Comics;
