import React from "react";
import welcomeData from "../../utils/welcomeData";
import "./WelcomeBox.css";

const WelcomeBox = () => {
  return (
    <div className="welcome-box">
     {welcomeData.map((text, index) =>
        text === "" ? <br key={index} /> : <p key={index}>{text}</p>
      )}
    </div>
  );
};

export default WelcomeBox;
