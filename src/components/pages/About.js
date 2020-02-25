import React from "react";
import '../styles/About.css'


function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1>WHAT IS SEEFOOD?</h1>
                    <p>SEEFOOD is an interactive recipe book which uses a web application that will scan AR and QR codes to initialize a delightful and immersive experience for the customer. Customers will be able to see their ingredients in 3D form using AR to understand how the product looks in order to help them find and purchase. 
                    </p>
                    <hr />
                    <h2>Customer Quotes</h2>
                    <p> “There are times when I see unfamiliar ingredients in a recipe book. I end up avoiding the dish because it is hard to know what I am looking for at the store. If there was a way to visualize these ingredients, I would feel better about attempting to cook with them.”  </p>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <h1>HOW DOES IT WORK?</h1>
                    <ol className="steps">
                        <li>Open your device camera and scan the QR code on a recipe page to open the SEEFOOD application.</li>
                        <li>Click the AR button to intialize your augmented reality experience when viewing the ingredient section or click the QR button to initialize your video experience when viewing the recipe section.</li>
                    </ol>
                    <h5 className="howto">HOW TO USE VIDEO TUTORIAL</h5>
                    <div className="video1">
                    <video autoPlay src="https://res.cloudinary.com/diad1aa5z/video/upload/v1582667333/howtovideo_girxoc.mp4"  />
                    </div>
                </div>
            </div>
            <div className="row">
                <h1>MEET THE TEAM</h1>
                <p>The people at SEEFOOD are passionate about creating delightful experiences that are globally accessible to everyone.</p>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light responsive-img">
                            <img className="activator" src="https://avatars2.githubusercontent.com/u/57707960?s=460&v=4" />
                        </div>
                        <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Click to learn about:<i
                                className="material-icons right">more_vert</i>
                                <p>Robert Cavalero</p></span>
                        </div>
                        <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Robert Cavalero<i
                                className="material-icons right">close</i></span>
                            <p className="aboutp">Back-End Developer aka database master.</p>
                            <p className="aboutp"><a href="https://www.linkedin.com/in/robert-cavalero/" target="_blank">LinkedIn</a></p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light responsive-img">
                            <img className="activator" src="https://avatars3.githubusercontent.com/u/57238930?s=460&v=4" />
                        </div>
                        <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Click to learn about:<i
                                className="material-icons right">more_vert</i>
                                <p>Rafay Khawar</p></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Rafay Khawar<i
                                className="material-icons right">close</i></span>
                            <p className="aboutp">AR guru and Front-End Developer.</p>
                            <p className="aboutp"><a href="https://www.linkedin.com/in/abdur-rafay-khawar-5ab703196/" target="_blank">LinkedIn</a></p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light responsive-img">
                            <img className="activator"
                                src="https://avatars2.githubusercontent.com/u/54822096?s=400&u=b4cbf6c0f17a7a04af1f7af87703eab1c587063d&v=4" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Click to learn about:<i
                                className="material-icons right">more_vert</i>
                                <p>Sarah Kwon</p></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Sarah Kwon<i
                                className="material-icons right">close</i></span>
                            <p className="aboutp">Project Manager and Front-End Developer.</p>
                            <p className="aboutp"><a href="https://www.linkedin.com/in/sarah-kwon-268b2671" target="_blank">LinkedIn</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;