import React from 'react'
import { useState } from "react";

const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");


    const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
    }

  return (
    <header>
        <section>
            <form>
                <fieldset>
                <div>
                    <label htmlFor="book-date">Choose Date:</label>
                    <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                </div>
                <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm;