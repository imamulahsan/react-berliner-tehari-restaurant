import React from "react";
import Layout from "../components/Layout/Layout";
import Headchef from "../images/headchef.jpg";

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
          <img className="banner-image" src={Headchef} alt="banner" />
        </div>

        {/* Column 2: Location Content */}
        <div className="content-column">
          <div className="headerContainer">
            <h1>Our head Chef</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
