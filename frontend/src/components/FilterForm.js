// components/FilterForm.js

import React, { useState } from 'react';

function FilterForm({ onFilter }) {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(startTime, endTime);
  };

  return (
    <div>
      <h2>Filter Data</h2>
      <form onSubmit={handleSubmit}>
        <label>Start Time:</label>
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <label>End Time:</label>
        <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        <button type="submit">Apply Filter</button>
      </form>
    </div>
  );
}

export default FilterForm;
