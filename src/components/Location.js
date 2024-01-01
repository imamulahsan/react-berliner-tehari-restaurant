import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import mapImage from "../images/mapImage.svg";
import "leaflet/dist/leaflet.css";

const Location = () => {
  const position = [52.520008, 13.404954]; // Replace with the actual latitude and longitude

  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
  });

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("location-component");
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > elementTop - windowHeight + elementHeight / 2) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      id="location-component"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="location-container"
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "black", // Make text transparent to show the background gradient
        }}
      >
        Find us Here
      </h1>

      <div
        className="two-column-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Column 1: Image */}
        <div className="content-column" style={{ textAlign: "center" }}>
          {/* You can add additional content or styling for the image column here */}
          <div style={{ display: "inline-block" }}>
            <img src={mapImage} alt="mapImage" height="180px" width="180px" />
          </div>
          <h3 style={{ color: "#000000" }}>
            Vettersstraße 54/110, 09126, Berlin
          </h3>
        </div>

        {/* Column 2: Location Content */}
        <div className="content-column">
          <div className="headerContainer">
            {/* Map */}
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={icon}>
                <Popup>Your Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
