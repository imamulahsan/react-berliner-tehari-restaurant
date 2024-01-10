import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Link } from "@mui/material";
import footerImage from "../../images/footer-logo.png";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Change flexDirection to "column" for smaller devices
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#000000",
          color: "white",
          padding: "0 5%", // Adjust padding for smaller screens
        }}
      >
        {/* Left side with image */}
        <img
          src={footerImage}
          alt="Your Footer"
          style={{ height: "150px", width: "150px", margin: "10px" }}
        />

        {/* Middle side with links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Change flexDirection to "column" for smaller devices
            marginBottom: "5px",
            textAlign: "center", // Center-align text for smaller screens
            "& > *": {
              margin: "5px",
              textDecoration: "none",
              color: "inherit",
            },
          }}
        >
          <Link href="/" color="inherit" underline="none">
            Home
          </Link>
          <Link href="/about" color="inherit" underline="none">
            About Us
          </Link>
          <Link href="/contact" color="inherit" underline="none">
            Contact Us
          </Link>
        </Box>

        {/* Right side with social icons */}
        <Box
          sx={{
            display: "flex",
            "& svg": {
              fontSize: "40px", // Reduce icon size for smaller screens
              cursor: "pointer",
              mb: 1,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
