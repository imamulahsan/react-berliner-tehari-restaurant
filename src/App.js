import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";

Modal.setAppElement("#root"); // Set the root element for accessibility

const App = () => {
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
      <BrowserRouter>
        {/* Other components can go here */}
        <Routes>
          <Route
            path="/"
            element={<Home openModal={openModal} closeModal={closeModal} />}
          />
          <Route
            path="/about"
            element={<About openModal={openModal} closeModal={closeModal} />}
          />
          <Route
            path="/contact"
            element={<Contact openModal={openModal} closeModal={closeModal} />}
          />
          <Route
            path="/menu"
            element={<Menu openModal={openModal} closeModal={closeModal} />}
          />
        </Routes>
      </BrowserRouter>

      {/* Global modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1001, // Ensure a higher value than the Drawer
          },
          content: {
            maxWidth: "600px",
            height: "600px",
            margin: "auto",
            padding: "20px",
            borderRadius: "8px",
            zIndex: 1002,
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

export default App;
