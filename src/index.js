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

var customStyle = {
  color: "red"
};

if (currentHour < 12 && currentHour > 0) {
  greeting = "Good morning";
  customStyle = {
    color: "red"
  };
} else if (currentHour < 18) {
  greeting = "Good afternoon";
  customStyle = {
    color: "green"
  };
} else if (currentHour < 24) {
  greeting = "Good evening";
  customStyle = {
    color: "blue"
  };
} else {
  console.log("error");
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
