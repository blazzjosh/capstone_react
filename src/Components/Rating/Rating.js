import React, { useState } from 'react';
import './Rating.css'

const Star = ({ selected = false, onSelect = f => f }) => (
    <span
    className={selected ? 'selected' : ''}
    onClick={onSelect}
  >
    {selected ? '★' : '☆'}
  </span>
);

const Rating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
    <label>Rating:</label>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

export default Rating;
