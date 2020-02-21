import React from "react";
import '../styles/About.css'


function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1>WHAT IS SEEFOOD?</h1>
                    <p>SEEFOOD is an interactive recipe book which uses a web application that will scan AR and QR codes to initialize a delightful and immersive experience for the customer. Customers will be able to see their ingredients in a 3D form using AR to help them understand what the product looks like in its full form to help them with their purchase decision.
                    </p>
                    <hr />
                    <h2>Customer Quotes</h2>
                    <p> “There are times when I see unfamiliar ingredients in a recipe book. If there was some way to visualize the product and its density I would feel better about making the dish. I end up avoiding dishes that have unfamiliar ingredients because I am not successful in finding them at the store.”</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <h1>HOW DOES IT WORK?</h1>
                    <p>How to video coming soon..</p>
                    <video>TBF</video>
                </div>
            </div>
            <div className="row">
                <h1>MEET THE TEAM</h1>
                <p>The people at SEEFOOD are passionate about creating delightful experiences that is globally accessible to everyone.</p>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light responsive-img">
                            <img className="activator" src="https://avatars2.githubusercontent.com/u/57707960?s=460&v=4" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Robert Cavalero<i
                                className="material-icons right">more_vert</i></span>
                            <p className="aboutp"><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i
                                className="material-icons right">close</i></span>
                            <p className="aboutp">Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light responsive-img">
                            <img className="activator" src="https://avatars3.githubusercontent.com/u/57238930?s=460&v=4" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Rafay Khawar<i
                                className="material-icons right">more_vert</i></span>
                            <p className="aboutp"><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i
                                className="material-icons right">close</i></span>
                            <p className="aboutp">Here is some more information about this product that is only revealed once clicked on.</p>
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
                            <span className="card-title activator grey-text text-darken-4">Sarah Kwon<i
                                className="material-icons right">more_vert</i></span>
                            <p className="aboutp"><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i
                                className="material-icons right">close</i></span>
                            <p className="aboutp">Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default About;