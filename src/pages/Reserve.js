import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Reservebg from "../images/reserve.jpg";
import Swal from "sweetalert2"; // Import SweetAlert2

const Reserve = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [occasionType, setOccasionType] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOccasionTypeChange = (event) => {
    setOccasionType(event.target.value);
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your logic to handle the form submission
    console.log("Date:", selectedDate);
    console.log("Occasion Type:", occasionType);
    console.log("Number of Guests:", numberOfGuests);

    // Display SweetAlert2 with reservation information
    Swal.fire({
      icon: "success",
      title: "Reservation Successful!",
      html: `
          <p>Date and Time: ${selectedDate}</p>
          <p>Occasion Type: ${occasionType}</p>
          <p>Number of Guests: ${numberOfGuests}</p>
        `,
    });
  };

  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "black", // Make text transparent to show the background gradient
        }}
      >
        Reserve a Table
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
        <div
          className="content-column"
          style={{ display: "flex", alignItems: "center", textAlign: "left" }}
        >
          {/* Image of the Head Chef */}
          {/* Image of the Head Chef with Framer Motion animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={Reservebg} width="60%" alt="banner" />
          </motion.div>
        </div>

        {/* Column 2: Location Content */}
        <div className="content-column">
          {/* Add the timeline component */}
          <div
            style={{ width: "100%", margin: "0 auto", background: "#FCF3CF" }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                <label style={{ fontSize: "25px", margin: "15px" }}>
                  Date and Time:
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  minTime={new Date().setHours(10, 0, 0)}
                  maxTime={new Date().setHours(22, 0, 0)}
                  style={{
                    fontSize: "15px",
                    padding: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                <label
                  style={{
                    fontSize: "25px",
                    margin: "15px",
                  }}
                >
                  Occasion Type:
                </label>
                <select
                  value={occasionType}
                  onChange={handleOccasionTypeChange}
                  style={{ fontSize: "15px", padding: "10px" }}
                >
                  <option value="">Select an Occasion</option>
                  <option value="standard">Standard Table</option>
                  <option value="private-booth">Private Booth</option>
                  <option value="outdoor-seating">Outdoor Seating</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                <label style={{ fontSize: "25px", margin: "15px" }}>
                  Number of Guests:
                </label>
                <input
                  type="number"
                  value={numberOfGuests}
                  onChange={handleNumberOfGuestsChange}
                  min={1}
                  max={15}
                  style={{ fontSize: "15px", padding: "10px" }}
                />
              </div>
              <button
                type="submit"
                style={{ fontSize: "16px", padding: "10px", margin: "20px" }}
              >
                Reserve Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reserve;
