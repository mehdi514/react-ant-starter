import React from "react";
import NotFound from "../../assets/images/404.jpg";

//stylesheet
import "./404.css";

export default () => (
  <div className="text-center">
    <img src={NotFound} alt="NotFound" />
  </div>
);
