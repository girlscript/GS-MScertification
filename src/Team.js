import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import dummy from "./images/dummy.jpg";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import kamini from "./images/kamini.jpg";
import muskan from "./images/muskan.jpg";
import manas from "./images/manas.jpg";
import harsha from "./images/harsha.jpg";
import tejasi from "./images/tejasi.jpeg";
import "./Team.css";
const Team = () => {
  return (
    <>
      <h1 className="ourteam">OUR TEAM</h1>
      <div class="main">
        <div class="profile-card">
          <div class="img">
            <img src={tejasi} />
          </div>
          <div class="caption">
            <h3>Tejasi Mangale</h3>
            <p>Program Lead</p>
            <div class="social-links">
              <a href="https://twitter.com/Tejasi7?t=ichfZ-yswKOUN9jzicLXlg&s=08" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/tejasi-mangale-15a0821a9" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/tejasi_17" target="_blank">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={manas} />
          </div>
          <div class="caption">
            <h3>Manas Gupta</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="https://twitter.com/cyberbuddy_io" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/cyberbuddy-manas" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/Manas_Gupta01" target="_blank">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={harsha} />
          </div>
          <div class="caption">
            <h3>Harsha Bajaj</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="https://twitter.com/bajajharsha2?t=kdeTDeOpBGGLMhKKqhfhUA&s=08" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/harsha-bajaj-398323200" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/Harsha" target="_blank">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={muskan} />
          </div>
          <div class="caption">
            <h3>Muskan Bansal</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="https://twitter.com/Muskan0109?t=cvjWeCd1Pl205ByLiXpm-A&s=09" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/muskan-bansal-095601189" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/Muskan0109" target="_blank">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={kamini} />
          </div>
          <div class="caption">
            <h3>Kamini Singh</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="https://mobile.twitter.com/KaminiS30055234" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/kamini-singh-619483204" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/kamini_singh04" target="_blank">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
