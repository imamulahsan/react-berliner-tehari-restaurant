import React from "react";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import bannerImage from "../images/banner.jpg";
import kababImage from "../images/kabab-platter.jpg";
import mejbanImage from "../images/mejban-platter.jpg";

const SpecialMenu = () => {
  const containerVariantsdate = {
    hidden: { opacity: 0.1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 3 } },
  };
  const specialRecipe = [
    {
      id: 1,
      title: "Biriyani Platter",
      price: 8.5,
      image: bannerImage,
      description:
        "A spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot and served with borhani",
    },
    {
      id: 2,
      title: "Kabab Platter",
      price: 9.5,
      image: kababImage,
      description:
        "A dish of Asian origin that typically combines small pieces of meat such as lamb or beef with vegetables grilled.",
    },
    {
      id: 3,
      title: "Mejban Platter",
      price: 8.0,
      image: mejbanImage,
      description:
        "Succulent mutton. A tantalizing array of spices. Freshly roasted and ground. Cooked languorously over a lazy flame.",
    },
  ];

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "black", // Make text transparent to show the background gradient
        }}
      >
        Today's Special
      </h1>
      <div
        style={{
          backgroundColor: "#e5f4e3",
          padding: "5px",
          textAlign: "center",
        }}
      >
        <motion.div
          variants={containerVariantsdate}
          initial="hidden"
          animate="visible"
        >
          <Typography variant="h5" gutterBottom style={{ margin: "10px" }}>
            {` ${formattedDate}`}
          </Typography>
        </motion.div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px 13%",
            flexWrap: "wrap",
          }}
        >
          {specialRecipe.map((recipe) => (
            <Card
              key={recipe.id}
              sx={{
                maxWidth: 345,
                margin: "15px",
                flex: "0 0 auto",
                backgroundColor: "#F5CBA7",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {recipe.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {recipe.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    style={{ marginTop: "10px" }}
                  >
                    ${recipe.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecialMenu;
