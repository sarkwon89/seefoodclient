import React, { Component } from "react";
import BrandCard from "../BrandCard"
import API from "../../utils/API"
import '../styles/BrandRec.css'


class BrandRec extends Component {

    state = {
        recommendations: []
    }

    componentDidMount() {
        const href = window.location.href.split("/");
        const ingId = parseInt(href[href.length - 1]);
        API.getIngredientRecs(ingId).then(res => this.setState({ recommendations: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <a target="_blank" href="https://rafaykhawar09.github.io/arTest/" className="waves-effect waves-light btn btn-primary red accent-2 backbtn"><i className="material-icons right">center_focus_strong</i>Back to AR Mode</a>
                {this.state.recommendations.length > 0 ? (

                    <div className="container recontainer">
                        <h1 className="center-align">Brand Recommendation</h1>
                        <h2 className="center-align"> {this.state.recommendations[0].Ingredient.name || "loading"}</h2>
                        <div className="row recrow">

                            {this.state.recommendations.map((rec, index) => (
                                <BrandCard
                                    key={index}
                                    brand={rec.brand}
                                    url={rec.url}
                                    image={rec.image}
                                    price={rec.price}
                                />

                            ))}
                        </div>
                    </div>
                ) : <p className="loading">Click a 3d model to see brand recommendations</p>}
            </div>
        )
    }
}

export default BrandRec;
