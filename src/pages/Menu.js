import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { regularRecipe } from "../data/menulist"; // Replace with the correct path
import Layout from "../components/Layout/Layout";
import Swal from "sweetalert2";

const Menu = () => {
  const handleBuyNow = (title) => {
    Swal.fire({
      title: "Confirm Purchase",
      text: `Do you want to buy ${title}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, buy it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Implement the logic for the confirmed purchase
        console.log(`Buy Now confirmed for ${title}`);
        Swal.fire(
          "Purchased!",
          `${title} has been successfully purchased.`,
          "success"
        );
      }
    });
  };

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    overflowX: "auto",
    marginTop: "50px",
    marginBottom: "50px",
    padding: "0 13%",
  };

  const cardStyle = {
    width: "100%",
    backgroundColor: "#F5EEF8",
    transition: "background-color 0.3s, transform 0.3s", // Add transform to the transition

    "&:hover": {
      backgroundColor: "#e0e0e0",
      transform: "translateY(-5px)", // Adjust the translation distance as needed
    },
  };

  return (
    <Layout>
      <div style={cardContainerStyle}>
        {regularRecipe.map((recipe) => (
          <Card key={recipe.id} style={cardStyle}>
            <CardMedia
              component="img"
              alt={recipe.title}
              height="140"
              image={recipe.image}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {recipe.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.description}
              </Typography>
              <Typography variant="h6" color="text.primary">
                Price: ${recipe.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleBuyNow(recipe.title)}
                style={{ marginTop: "10px" }}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Menu;
