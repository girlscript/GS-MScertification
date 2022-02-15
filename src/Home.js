import React from 'react';
// import "./Home.css"
function Home() {
    return (
        <div id="home-container">
            <h1 className='main-heading-home'>What you need to do?</h1>
            <p className='subheading-home'>To be eligible to get the FREE Certificate Voucher</p>
            <div className="wrapper-grid-home">
                <div className="container-grid-idea">
                    <div className='serial-no'>
                        <h1 className='number'>1</h1>
                    </div>
                    <div className="box">
                        <h3 className="grid-heading-home">
                            Choose your own track and LEARN
                        </h3>
                        <p className="grid-para-home">
                            Choose any one of the track and complete the course. If you have incomplete progress from the previous challenge, you can continue this new challenge from that point itself and complete the course.<br/><br/>
                        </p>
                    </div>
                    <div className="blue-button-grid">
                    <button
                        className="blue-button"
                        onClick={() => {
                        let val = document.getElementById("track-container");
                        return val.scrollIntoView();
                        }}
                        style={{
                        cursor: "pointer",
                        }}>
                        Start Learning
                        </button>
                    </div>


                </div>
                <div className="container-grid-idea">
                    <div className='serial-no'>
                        <h1 className='number'>2</h1>
                    </div>
                    <div className="box">
                        <h3 className="grid-heading-home">
                            Update your LinkedIn Skills
                        </h3>
                        <p className="grid-para-home">
                            Once you complete the course, you will have to update your LinkedIn Skill and add "Microsoft Azure" to your profile. Once the profile is updated successfully, share your LinkedIn Profile with us.<br/><br/>
                        </p>
                    </div>
                    <div className="blue-button-grid">
                        <button> <a href="https://www.microsoft.com/en-in/campaign/AzureSkills/?source=FC-4" target="_blank">Share Profile</a>
                        </button>
                    </div>


                </div>
                <div className="container-grid-idea">
                    <div className='serial-no'>
                        <h1 className='number'>3</h1>
                    </div>
                    <div className="box">
                        <h3 className="grid-heading-home">
                            Give a mock test to be eligible
                        </h3>
                        <p className="grid-para-home">
                            On successful completion of the above two steps, you can take up a mock test for your track. Passing Criteria: 70% Incase someone fails to achieve this then they need not worry. We'll mail a 2nd mock test to them.
                        </p>
                    </div>
                    <div className="blue-button-grid">
                    <button
                        className="blue-button"
                        onClick={() => {
                        let val = document.getElementById("mock-container");
                        return val.scrollIntoView();
                        }}
                        style={{
                        cursor: "pointer",
                        }}>
                            Give Test
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Home;
