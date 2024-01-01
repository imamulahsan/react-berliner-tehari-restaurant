import React, { useState } from "react";
import Modal from "react-modal";
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

Modal.setAppElement("#root"); // Set the root element for accessibility

const Gallery = () => {
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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
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
            onClick={() => openModal(imageUrl)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            borderRadius: "8px",
            zIndex: 1001,
          },
        }}
      >
        <img
          src={selectedImage}
          alt="Preview"
          style={{ width: "100%", height: "auto" }}
        />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default Gallery;
