// DatePickerComponent.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComponent() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    if (checkOutDate && date >= checkOutDate) {
      setCheckOutDate(null); // Reset checkout date if it's before check-in date
    }
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div>
        <DatePicker
          selected={checkInDate}
          onChange={handleCheckInChange}
          minDate={new Date()}
          placeholderText="Select a check-in date"
          dateFormat="yyyy-MM-dd"
        />   
        <DatePicker
          selected={checkOutDate}
          onChange={handleCheckOutChange}
          minDate={checkInDate ? checkInDate : new Date()}
          placeholderText="Select a check-out date"
          dateFormat="yyyy-MM-dd"
        />
    </div>
  );
}

export default DatePickerComponent;
