import React from "react";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jpg";
import gallery9 from "../images/gallery9.jpg";
import gallery10 from "../images/gallery10.jpg";

const Gallery = ({ openModal, closeModal }) => {
  // Replace these image URLs with the URLs of your actual images
  const imageUrls = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
  ];

  const openImageModal = (imageUrl) => {
    openModal(imageUrl);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          color: "black", // Make text transparent to show the background gradient
        }}
      >
        Interiors and Food
      </h1>

      <div className="image-gallery">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={` ${index + 1}`}
            onClick={() => openImageModal(imageUrl)}
            loading="lazy" // Add the loading="lazy" attribute for lazy loading
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
