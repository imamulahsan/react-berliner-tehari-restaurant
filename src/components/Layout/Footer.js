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
          flexDirection: "row", // Set flexDirection to "row"
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#000000",
          color: "white",
          padding: "0 13%",
        }}
      >
        {/* Left side with image */}
        <img
          src={footerImage}
          alt="Your Footer"
          style={{ height: "150px", width: "150px", margin: "10px" }}
        />

        {/* Middle side with links */}
        <Box>
          {/* Add more links as needed */}
          <Link
            href="/home"
            color="inherit"
            underline="none"
            sx={{ marginBottom: "5px" }}
          >
            Home
          </Link>
          <Link
            href="/about"
            color="inherit"
            underline="none"
            sx={{ display: "block", marginBottom: "5px" }}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            color="inherit"
            underline="none"
            sx={{ display: "block", marginBottom: "5px" }}
          >
            Contact Us
          </Link>
        </Box>

        {/* Right side with social icons */}
        <Box
          sx={{
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mb: 1, // Adjust margin-bottom for social icons
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
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
