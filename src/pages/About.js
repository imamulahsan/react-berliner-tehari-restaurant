import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div
        className="two-column-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Column 1: Image */}
        <div className="content-column" style={{ textAlign: "center" }}>
          {/* You can add additional content or styling for the image column here */}
          <h3 style={{ color: "#000000" }}>
            Vettersstraße 54/110, 09126, Berlin
          </h3>
        </div>

        {/* Column 2: Location Content */}
        <div className="content-column">
          <div className="headerContainer">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
