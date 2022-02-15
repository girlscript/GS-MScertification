import React from "react";
import illust from "./images/illust1.svg";

function Profile() {
  return (
    <div className="profile track">
    <div className='side'>
        <div className="lines">
          <div className="line1"></div>
          <div className="dot profile"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="dumm">
      <div class="linkedin-container">
        <div class="illustration">
          <img src={illust} alt=""></img>
        </div>
        <div class="text">
          <h1 className="main-heading-home">2. Update your LinkedIn</h1>
          <p class="para">
            Once you complete the course, you will have to update your LinkedIn
            Skill and add "Microsoft Azure" to your profile. Once the profile is
            updated successfully, share your LinkedIn Profile with us.
          </p>
          <button className="blue-button">
            <a href=" https://www.microsoft.com/en-in/campaign/AzureSkills/?source=FC-4" target=" ">
              Share Profile
            </a>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
