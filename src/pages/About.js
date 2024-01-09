import React from "react";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Headchef from "../images/headchef.jpg";
import Chef1 from "../images/team/person1.jpg";
import Chef2 from "../images/team/person2.jpg";
import Chef3 from "../images/team/person3.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const cookingTeam = [
    {
      name: "Mushiqur Rahim",
      specialization: "Specialized in Bangladeshi Cuisine",
      experience: "50 years of experience in Cooking",
      photo: Chef1,
    },
    {
      name: "Shahrukh Khan",
      specialization: "Specialized in Indian Cuisine",
      experience: "10 years of experience in Cooking",
      photo: Chef2,
    },
    {
      name: "Kim Go-eun",
      specialization: "Waiter",
      experience: "10 years of experience in restaurant",
      photo: Chef3,
    },
  ];
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "black", // Make text transparent to show the background gradient
        }}
      >
        Our History
      </h1>
      <div
        className="two-column-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Column 1: Image */}
        <div
          className="content-column"
          style={{ display: "flex", alignItems: "center", textAlign: "left" }}
        >
          {/* Image of the Head Chef */}
          {/* Image of the Head Chef with Framer Motion animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={Headchef} width="100%" alt="banner" />
          </motion.div>
          {/* Description of the Head Chef */}
          <p>Fakhruddin Baburchi</p>
        </div>

        {/* Column 2: Location Content */}
        <div className="content-column">
          <div className="headerContainer">
            {/* Add the timeline component */}
            <VerticalTimeline style={{ background: "black" }}>
              {/* Timeline elements go here */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(210, 180, 222 )",
                  color: "#000000",
                  borderColor: "black", // Set line color to black
                }}
                contentArrowStyle={{
                  borderRight: "7px solid black", // Set separator color to black
                  color: "#000000",
                }}
                date="1985"
              >
                <h3 className="vertical-timeline-element-title">Origin</h3>
                <p>
                  The tehari we now prepare, was originally created Fakhruddin
                  Baburchi during the 1980s.
                </p>
              </VerticalTimelineElement>

              {/* Add more timeline elements for expansion, events, etc. */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(162, 217, 206)",
                  color: "#000000",
                  borderColor: "black", // Set line color to black
                }}
                contentArrowStyle={{
                  borderRight: "7px solid black", // Set separator color to black
                }}
                date="2011"
              >
                <h3 className="vertical-timeline-element-title">
                  Bangladesh Restaurant
                </h3>
                <p>
                  The Bangladesh branch of our restaurant was introduced in
                  2011. It is located in Dhaka.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#000000",
                  borderColor: "black", // Set line color to black
                }}
                contentArrowStyle={{
                  borderRight: "7px solid black", // Set separator color to black
                }}
                date="2022"
              >
                <h3 className="vertical-timeline-element-title">
                  German Branch Restaurant
                </h3>
                <p>
                  We have created a branch of our restaurant in the heart of
                  Berlin in 2022.{" "}
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "20px",
          color: "black", // Make text transparent to show the background gradient
        }}
      >
        Current Team
      </h1>
      <div
        className="two-column-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Cooking Team Cards */}
        {cookingTeam.map((teamMember, index) => (
          <div key={index} className="team-member-card">
            <img src={teamMember.photo} alt={`${teamMember.name}`} />
            <h3>{teamMember.name}</h3>
            <p>{teamMember.specialization}</p>
            <p>{teamMember.experience}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default About;
