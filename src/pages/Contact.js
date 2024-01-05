import React from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to get in touch with us for any inquiries or reservations!
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                fullWidth
                variant="outlined"
                type="email"
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
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
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
