import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const Home = () => (
  <Layout>
    <Section className="text-center">
      <div className="container">
        <h1>
          Hi there!
          <br />
          My name is <b>Wen Ting Wang</b>.
          <br />
          But you can just call me
          <br />
          <mark className="bg-white">
            <b>Ting</b>
          </mark>
          .
        </h1>
      </div>
    </Section>
  </Layout>
);

export default Home;
