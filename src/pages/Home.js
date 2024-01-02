import React from "react";
import { motion } from "framer-motion";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import SpecialMenu from "../components/SpecialMenu";
import Location from "../components/Location";
import Banner from "../images/banner.jpg";
import Gallery from "../components/Gallery";

const Home = ({ openModal, closeModal }) => {
  const containerVariantsleft = {
    hidden: { opacity: 0.5, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const containerVariantsright = {
    hidden: { opacity: 0.5, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  return (
    <Layout>
      <div className="two-column-container">
        {/* Column 1: Content */}
        <motion.div
          className="content-column"
          variants={containerVariantsleft}
          initial="hidden"
          animate="visible"
        >
          <div className="headerContainer">
            <h1>Berliner Tehari</h1>
            <p>
              A Bangladeshi restaurant that specializes in Biriyani and Tehari
            </p>
            <Link to="/menu">
              <button className="order-button">Book Now</button>
            </Link>
          </div>
        </motion.div>

        {/* Column 2: Image */}
        <motion.div
          className="image-column"
          variants={containerVariantsright}
          initial="hidden"
          animate="visible"
        >
          {/* You can add additional content or styling for the image column here */}
          <img className="banner-image" src={Banner} alt="banner" />
        </motion.div>
      </div>
      <SpecialMenu />
      <Location />
      <Gallery openModal={openModal} closeModal={closeModal} />
    </Layout>
  );
};

export default Home;
