import React from "react";
import '../styles/Recipe.css'

function Recipe2() {
    return (
        <div className="recipecontainer">
            <div className="row">
                <div className="col s12 m6">
                    <h1 className="center-align recipetitle">SK's Cauliflower Fried Rice</h1>
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
                    <img className="responsive-img z-depth-3" src="https://www.onceuponachef.com/images/2016/10/Cauliflower-Fried-Rice-760x517.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col box s12 m6">
                    <h2 className="center-align">INGREDIENTS</h2>
                    <p className="center-align">AR Mode Available</p>
                    <div className="test">
                        <p>Cauliflower</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582651465/pattern-cauliflower_lzcn25.png" />
                    </div>
                    <div className="test">
                        <p>Frozen Veggies</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-frozenVeggies_war99m.png" />
                    </div>
                    <div className="test">
                        <p>Soy Sauce</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-soySauce_jcljb5.png" />
                    </div>
                    <div className="test">
                        <p>Sesame Oil</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498348/pattern-sesameOil_kes2xj.png" />
                    </div>
                    <div className="test">
                        <p>Garlic</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582651505/pattern-garlic_wxeim2.png" />
                    </div>
                    <div className="test">
                        <p>Egg</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-eggs_wuqpgx.png" />
                    </div>
                    <div className="test">
                        <p>Salt & Pepper</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-saltAndPepper_ekrb2j.png" />
                    </div>
                    <div className="test">
                        <p>Chicken (Optional)</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-chicken_tldpgv.png" />
                    </div>
                    <div className="test">
                        <p>Ginger</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582498347/pattern-ginger_hj4lum.png" />
                    </div>
                </div>
                <div className="col box s12 m6">
                    <h2 className="center-align">RECIPE</h2>
                    <div className="test">
                        <p>Cauliflower Fried Rice Video Tutorial</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582651651/cauliflowerfriedricevid_o7lj1b.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe2