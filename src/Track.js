import React, { useEffect } from "react";
import "./Track.css";
import "./index.css";
import showPanel from "./Track-tab";


function Track() {
  useEffect(()=>{showPanel(0, 'black')},[]);
  return (
    <div className="home track" id="track-container">
      <div className="side">
        <div className="lines">
          <div className="line1"></div>
          <div className="dot"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="dumm">
        <h1 className="main-heading-home">1. Choose a track</h1>
        <p className="subheading-home">
          You only get one Certificate Voucher, so choose wisely
        </p>

        <div className="tabContainer">
          <div className="buttonContainer">
            <button onClick={()=>showPanel(0,'black')}>Azure Fundamentals</button>
            <button onClick={()=>showPanel(1,'black')}>Data Fundamentals</button>
            <button onClick={()=>showPanel(2,'black')}>Security Fundamentals</button>
          </div>
          <div className="tabPanel">
            <div className="tabPanelFlex">
              <h1 className="sub-heading-track">Azure Fundamentals</h1>
              <p className="p-task">
                Azure fundamentals is a six-part series that teaches you basic
                cloud concepts, provides a streamlined overview of many Azure
                services, and guides you with hands-on exercises to deploy your
                very first services for free.
                <br />
              </p>
              <button className="tsk-btn">
                <a
                  href="https://docs.microsoft.com/learn/challenges?id=4ca8ff9c-0b3b-448d-83d9-073b8f8e9ea4"
                  target=" "
                >
                  Start Learning
                </a>
              </button>
            </div>
          </div>
          <div className="tabPanel">
            <div className="tabPanelFlex">
              <h1 className="sub-heading-track">Data Fundamentals</h1>
              <p className="p-task">
                Learn the fundamentals of database concepts in a cloud
                environment, get basic skilling in cloud data services, and
                build your foundational knowledge of cloud data services within
                Microsoft Azure. You will identify and describe core data
                concepts such as relational, non-relational, big data, and
                analytics.
                <br />
              </p>
              <button className="tsk-btn">
                <a
                  href="https://docs.microsoft.com/learn/challenges?id=0159a23d-a8a7-4fdc-8cd5-9401c8ae610e"
                  target=" "
                >
                  Start Learning
                </a>
              </button>
            </div>
          </div>
          <div className="tabPanel">
            <div className="tabPanelFlex">
              <h1 className="sub-heading-track">Security Fundamentals</h1>
              <p className="p-task">
                Learn about core concepts, principles, and methodologies that
                are foundational to security, compliance, and identity
                solutions, including Zero-Trust, shared responsibility, the role
                of identity providers, and more.
                <br />
                <br />
              </p>

              <button className="tsk-btn">
                <a
                  href="https://docs.microsoft.com/learn/challenges?id=5b299298-0485-4262-ab12-5b9a04d62487"
                  target=" "
                >
                  Start Learning
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="wrapper-grid-track">
        <div className="container-grid-track">
          <div className="box">
            <h3 className="grid-heading-track">
              Azure<br />Fundamentals
            </h3>
            <p className="grid-para-track">
              Azure fundamentals is a six-part series that teaches you basic cloud concepts, provides a
              streamlined overview of many Azure services, and guides you with hands-on exercises to deploy your
              very first services for free.<br /><br /><br />
            </p>
            <div className="buttons">
              <div>
                <button className="blue-button-track"> <a href="https://docs.microsoft.com/learn/challenges?id=4ca8ff9c-0b3b-448d-83d9-073b8f8e9ea4" target=" "> Start Learning</a>
                </button>
              </div>


            </div>

          </div>
        </div>
        <div className="container-grid-track">
          <div className="box">
            <h3 className="grid-heading-track">
              Data<br /> Fundamentals
            </h3>
            <p className="grid-para-track">
              Learn the fundamentals of database concepts in a cloud environment, get basic skilling in cloud data services, and build your foundational knowledge of cloud data services within Microsoft Azure. You will identify and describe core data concepts such as relational, non-relational, big data, and analytics.
            </p>
            <div className="buttons">
              <div>
                <button className="blue-button-track"> <a href="https://docs.microsoft.com/en-us/learn/challenges?id=0159a23d-a8a7-4fdc-8cd5-9401c8ae610e" target=" "> Start Learning</a>
                </button>
              </div>


            </div>

          </div>
        </div><div className="container-grid-track">
          <div className="box">
            <h3 className="grid-heading-track">
              Security<br /> Fundamentals
            </h3>
            <p className="grid-para-track">
              Learn about core concepts, principles, and methodologies that are foundational to security, compliance, and identity solutions, including Zero-Trust, shared responsibility, the role of identity providers, and more.<br /><br /><br />
            </p>
            <div className="buttons">
              <div>
                <button className="blue-button-track"> <a href="https://docs.microsoft.com/learn/challenges?id=5b299298-0485-4262-ab12-5b9a04d62487" target=" "> Start Learning</a>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}
export default Track;
