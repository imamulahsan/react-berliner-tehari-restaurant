import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, Link } from "@mui/material";
import footerImage from "../../images/footer-logo.png";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side with image and links */}
          <Box>
            <Link href="/home" color="inherit" underline="none">
              <img
                src={footerImage}
                alt="Your Footer"
                style={{ height: "60px", marginRight: "10px" }}
              />
            </Link>
            {/* Add more links as needed */}
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
              "& svg": {
                fontSize: "60px",
                cursor: "pointer",
                mr: 2,
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

        <Typography
          variant="h5"
          sx={{
            marginTop: 3,
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Imamul Ahsan
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
