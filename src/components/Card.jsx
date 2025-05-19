// File: src/components/Card.jsx
import React from "react";

const Card = ({ image, title, items }) => (
  <div className="card">
    <div className="card-image-container">
      <img src={image} alt={title} className="card-image" />
    </div>
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <ul className="card-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Card;
