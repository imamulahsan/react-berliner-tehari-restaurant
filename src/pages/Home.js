import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="two-column-container">
        {/* Column 1: Content */}
        <div className="content-column">
          <div className="headerContainer">
            <h1>Berliner Tehari</h1>
            <p>
              A Bangladeshi restaurant that specializes on Kacchi Biriyani and
              Tehari
            </p>
            <Link to="/menu">
              <button className="order-button">ORDER NOW</button>
            </Link>
          </div>
        </div>

        {/* Column 2: Image */}
        <div
          className="image-column"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          {/* You can add additional content or styling for the image column here */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
