import React from "react";
import "../assets/css/day1.css";

import BookLists from "./BookLists";
import Header from "./Header";
const Home = () => {
  return (
    <div className="container">
      <Header />
      <BookLists />
    </div>
  );
};

export default Home;
