import React from "react";
import "./Screen.css";

export const Screen = ({ value }) => {
  return (
    <div className="screen" mode="single" max={70}>
      {value}
    </div>
  );
};