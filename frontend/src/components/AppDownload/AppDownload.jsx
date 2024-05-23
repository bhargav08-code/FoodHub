import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="app-download">
      <p>
        For Better Expirence Download <br /> FoodHub App{" "}
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  );
};

export default AppDownload;