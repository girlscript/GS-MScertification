import React from "react";
import "./Contact1.css";
function Contact1() {
  return (
    <div className="conatiner__">
      <div className="left__">
        <div className="content_left">
          <h1 className="content_title1">
            JOIN OUR <br /> TELEGRAM <br />
            GROUP
          </h1>
          <h4 className="descreption__">
            Got any queries, <br />
            join the chat and <br />
            ask anything you want.
          </h4>
          <div className="btn">
            <button className="Join_group_btn">Join The Group</button>
          </div>
        </div>
      </div>

      <div className="right__">
        <div className="content_right">
          <h1 className="content_title">
            REACH <br />
            OUT <br />
            TO US
          </h1>

          <div className="first__">
            <h4 className="mini_tiltle">Call Us at</h4>
            <p className="numbers">
              <p className="first_title">
                +91 9552809927 <br /> +91 9552809927{" "}
              </p>
            </p>
          </div>

          <div className="first__">
            <h4 className="mini_tiltle">Send an e-mail</h4>
            <p className="numbers">girlscriptmsprogram@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
