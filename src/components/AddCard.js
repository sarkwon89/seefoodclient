import React from 'react';
import './styles/AddCard.css'

function AddIng(props) {

    return (
        <div className="container">
            
            <h2>New Ingredient</h2>
            
            <div className="row inputbox z-depth-4">  
                <div className="input-field col s12">
                    <form className = "col s12"  onSubmit={props.handleSubmitIngredient}>
                    <label htmlFor="newIngredient">Add an ingredient</label>
                    <input id="newIngredient" type="text" name="name" value={props.newIng.name} onChange={props.handleAddIngredient} />
                    
                    
                    <button className="btn btn-primary red accent-2" onClick={props.handleSubmitIngredient}>
                        Add Ingredient
                    </button>
                    </form>
                </div>
            </div>
        </div>)
}

export default AddIng;