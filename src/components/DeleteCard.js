import React, { useState, useEffect } from "react";
import API from "../utils/API"
import './styles/Delete.css';

function DeleteCard(props) {
    return (

        <div className="container">

            <h2>Delete Ingredients / Recommendations</h2>
            <div className="row inputbox">
                <div className="input-field col s12">
                    <select className="browser-default" defaultValue={""} onChange={props.handleDeleteIngredientSelection}>
                        <option value="" disabled>Select an Ingredient</option>
                        {props.ingredients.map(ing => (
                            <option value={ing.id} key={ing.id} name="delIngName" >{ing.name} </option>
                        ))}
                    </select>
                    <button onClick={props.handleDeleteIngredient} ><i className="far fa-trash-alt fa-2x"></i></button>
                </div>
            </div>

            <div>
                {props.recommendations.length > 0 ? (

                    <div className="input-field col s12">
                        <ul className="list-group">
                            {props.recommendations.map(rec => (
                                <li className="list-group-item" value={rec.id} key={rec.id} name="recommendation">
                                    {rec.brand} 
                                    
                                        <button value={rec.id} onClick={props.handleDeleteRecommendation}><span value={rec.id} onClick={props.handleDeleteRecommendation}><i className="far fa-trash-alt fa-2x" value={rec.id}></i></span></button>
                                            
                                </li>))}
                        </ul>
                    </div>
                    // </div>
                ) : <p>Select Ingredient to see Recommendations</p>}
            </div>
        </div>
    )
}

export default DeleteCard