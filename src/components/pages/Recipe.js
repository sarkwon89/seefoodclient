import React from "react";
import '../styles/Recipe.css'

function Recipe() {
    return (
        <div className="recipecontainer">
            <div className="row">
                <div className="col s12 m6">
                    <h1 className="center-align recipetitle">Gordon Ramsay's Hamburger</h1>
                    <div className="row recbox">
                        <div className="col s8">
                            <p className="start">Scan the QR code with your mobile device camera to start your journey {'\u2728'}</p>
                        </div>
                        <div className="col s3">
                        <img className="responsive-img z-depth-2 qr" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582249295/app2_u5qvqc.png" />
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <img className="responsive-img z-depth-3" src="https://cdn.stocksnap.io/img-thumbs/960w/WYL5KWIPUD.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col box s12 m6">
                    <h2 className="center-align">INGREDIENTS</h2>
                    <p className="center-align">AR Mode Available</p>
                    <div className="test">
                        <p>Onion</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-onion_furv7i.png" />
                    </div>
                    <div className="test">
                        <p>Hamburger Bun</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498346/pattern-burgerBun_bsd5qg.png" />
                    </div>
                    <div className="test">
                        <p>Tomato</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498348/pattern-tomato_fv4acw.png" />
                    </div>
                    <div className="test">
                        <p>Meat</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582651036/pattern-beef_eh7kxh.png" />
                    </div>
                    <div className="test">
                        <p>Mayonnaise</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-mayonnaise_rvn6kx.png" />
                    </div>
                    <div className="test">
                        <p>Lettuce</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-lettuce_dpjxs2.png" />
                    </div>
                    <div className="test">
                        <p>Salt & Pepper</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-saltAndPepper_ekrb2j.png" />
                    </div>
                    <div className="test">
                        <p>Cheese</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-cheese_frbds1.png" />
                    </div>
                    <div className="test">
                        <p>Mustard</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-mustard_ev1j7t.png" />
                    </div>
                </div>
                <div className="col box s12 m6">
                    <h2 className="center-align">RECIPE</h2>
                    <div className="test">
                        <p>Gordon Ramsay's Video</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582157205/gordonramsayvid_bqveqd.png" />
                    </div>
                    <div className="test">
                        <p>Mystery Marker</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582157981/hiro_qcsdr1.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe