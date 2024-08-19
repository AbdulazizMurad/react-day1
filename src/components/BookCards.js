import React from "react";

import "../assets/css/day1.css";

const BookCards = ({
  productImage,
  productAlternative,
  productName,
  productPrice,
}) => {
  return (
    <div className="image1-container">
      <img src={productImage} alt={productAlternative} className="image1" />
      <h2> {productName}</h2>
      <p>{productPrice}</p>
    </div>
  );
};

export default BookCards;
