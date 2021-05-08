//Create a React app from scratch.
//Show a single h1 that says "Good morning" if
//between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var greeting = "Test Greeting";
const currentDate = new Date();
const currentHour = currentDate.getHours();
console.log(currentHour);

// const customStyle = {
//   color: "red"
// };

// const customStyle = {
//   color: "red"
// };

// const customStyle = {
//   color: "red"
// };

if (currentHour < 12 && currentHour > 0) {
  greeting = "Good morning";
} else if (currentHour < 18) {
  greeting = "Good afternoon";
} else if (currentHour < 24) {
  greeting = "Good evening";
} else {
  console.log("error");
}

ReactDOM.render(
  <div>
    <h1 className="heading">{greeting}</h1>
  </div>,
  document.getElementById("root")
);
