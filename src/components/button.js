import React, { useState } from "react";
import "../assets/css/day1.css";
const Button = () => {
  // visitor is a state initialized to 0
  const [visitor, setVisitor] = useState(0);

  // Function is called everytime increment button is clicked
  const visitorClick1 = () => {
    // Counter state is incremented
    setVisitor(visitor + 1);
  };

  return (
    <div className="button">
      Visitors
      <div>{visitor}</div>
      <div>
        <button onClick={visitorClick1}>Increment</button>
      </div>
    </div>
  );
};

export default Button;
