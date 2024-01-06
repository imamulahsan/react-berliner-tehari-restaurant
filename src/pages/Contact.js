import React from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import Layout from "./../components/Layout/Layout";
import Footerbg from "../images/footer-bg.jpg";
import Swal from "sweetalert2";

const Contact = () => {
  const headingStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Set the background color for the heading
    padding: "10px", // Add padding for better visual appearance
  };
  const containerStyle = {
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: `url(${Footerbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
    backdropFilter: "blur(5px)", // Set the backdrop filter for blurring
  };
  const buttonStyle = {
    marginTop: "20px", // Add margin for spacing
    backgroundColor: "#4caf50", // Set the background color
    color: "white", // Set the text color
    borderRadius: "8px", // Add border radius for rounded corners
    padding: "10px 20px", // Add padding for better visual appearance
  };

  const formContainerStyle = {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Set the background color with alpha (transparency)
    padding: "20px", // Add padding for better visual appearance
    borderRadius: "8px", // Add border radius for rounded corners // Set the backdrop filter for blurring
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form submission logic here

    // Example: Show SweetAlert2 success message
    Swal.fire({
      icon: "success",
      title: "Submission Successful",
      text: "Thank you for your message!",
    });

    // Reset the form if needed
    // e.target.reset();
  };

  return (
    <Layout>
      <Container maxWidth="md" style={containerStyle}>
        <Typography variant="h2" gutterBottom style={headingStyle}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph style={headingStyle}>
          Feel free to get in touch with us for any inquiries or reservations!
        </Typography>
        <form style={formContainerStyle} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                fullWidth
                variant="outlined"
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={buttonStyle}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Layout>
  );
};

export default Contact;
