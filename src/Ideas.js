import React from "react";
import first from "./images/first.png";
import second from "./images/second.png";
import third from "./images/third.png";
// import "./index.css";
// import "./Ideas.css"
function Ideas() {
  return (
    <div>
      <div className="wrapper-grid">
        <div className="container-grid">
          <div className="image-holder">
            <img src={first} alt=""></img>
          </div>
          <h3 className="grid-heading">
            Learn with easy-to-read <br /> instruction
          </h3>
          <p className="grid-para">
            Choose any one of the track and complete the course. If you have
            incomplete progress from the previous challenge, you can continue
            this new challenge from that point itself and complete the course.
          </p>
        </div>
        <div className="container-grid">
          <div className="image-holder">
            <img src={second} alt=""></img>
          </div>
          <h3 className="grid-heading">
            Get a FREE Certification <br /> Voucher
          </h3>
          <p className="grid-para">
            Once you complete the course, you will have to update your LinkedIn
            Skill and add "Microsoft Azure" to your profile. Once the profile is
            updated successfully, share your LinkedIn Profile with us.
          </p>
        </div>
        <div className="container-grid">
          <div className="image-holder">
            <img src={third} alt=""></img>
          </div>
          <h3 className="grid-heading">
            Develop <br /> marketable skills
          </h3>
          <p className="grid-para">
            On successful completion of the above two steps, you can take up a
            mock test for your track. Passing Criteria: 70% Incase someone fails
            to achieve this then they need not worry. We'll mail a 2nd mock test
            to them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ideas;
