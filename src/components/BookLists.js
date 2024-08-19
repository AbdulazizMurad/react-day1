import React from "react";

import "../assets/css/day1.css";
import BookCards from "./BookCards";
import products from "../products";

const BookLists = () => {
  const productsDisplay = products.map((product) => {
    return (
      <BookCards
        productImage={product.image}
        productAlternative={product.alt}
        productName={product.name}
        productPrice={product.price}
      />
    );
  });
  return <div className="images-container"> {productsDisplay}</div>;
};

export default BookLists;
