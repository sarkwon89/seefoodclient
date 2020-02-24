import React, { useState, useEffect } from "react";
import API from "../utils/API"
import './styles/Delete.css';

function DeleteCard(props) {
    return (

        <div className="container deletebox">

            <h2>Delete Ingredients & Brand Recommendations</h2>
            <div className="row inputbox">
                <div className="input-field col s12">
                    <select className="browser-default" defaultValue={""} onChange={props.handleDeleteIngredientSelection}>
                        <option value="" disabled>Select an Ingredient</option>
                        {props.ingredients.map(ing => (
                            <option value={ing.id} key={ing.id} name="delIngName" >{ing.name} </option>
                        ))}
                    </select>
                    <button className="btn btn-primary red accent-2" onClick={props.handleDeleteIngredient} ><i className="far fa-trash-alt fa-2x"></i></button>
                </div>
            </div>

            <div>
                <div className="row inputbox">

                    {props.recommendations.length > 0 ? (

                        <div className="input-field col s12">
                            <ul className="list-group">
                                {props.recommendations.map(rec => (
                                    <li className="list-group-item recdelsection" value={rec.id} key={rec.id} name="recommendation">
                                        {rec.brand}
                                        <button className="btn btn-primary red accent-2" value={rec.id} onClick={props.handleDeleteRecommendation}>Delete</button>
                                    </li>))}
                            </ul>
                        </div>
                    ) : <p>Select Ingredient to see Recommendations</p>}
                </div>
            </div>
        </div>
    )
}

export default DeleteCard