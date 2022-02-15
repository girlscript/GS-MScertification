import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import MicrosoftLogo from "./images/MicrosoftLogo.png";
import "./Challenge.css";
import bgimg from "./images/about-BG.jpg"
const Challenge = () => {
  return (
    <div className="container" >
      <div className="left">
        <div>
          <h1>
            ABOUT
            <br />
            MICROSOFT
            <br />
            CERTIFICATION
            <br />
            CHALLENGE
          </h1>
        </div>
      </div>
      <div className="right">
        <div className="descreptions">
          <p>
            {" "}
            This Challenge is brought to you by GirlScript Foundation.
            <br />
            <br />
            Azure is Microsoft's own cloud computing service. Its data centers
            handles all major services like building, testing, deploying, and
            management.
            <br />
            <br />
            Choose one of the 3 Microsoft Fundamental courses and build a strong
            foundation over Azure .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
