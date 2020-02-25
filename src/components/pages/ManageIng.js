import React, {Component } from 'react';
import API from "../../utils/API"
import Add from '../AddCard';
import AddRec from '../AddRec'
import M from "materialize-css";
import Delete from '../DeleteCard'


class ManageIng extends Component {

    state = {
        newIng: {
            name: ""},
        ingredients: [],
        newRec: {
            brand: "",
            url: "",
            image: "",
            price: "",
            IngredientId: 0
        },
        recommendations: [],
        delIngId: 0,
    }


    // ON PAGE LOAD
    //Grab all the existing ingredients from the database and adding them to the "ingredients[]"
    getIngs = () =>{

        API.getIngredients()
            .then(res => this.setState({ 
                ingredients: res.data 
            }))
            .then(M.AutoInit())
    
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getIngs();
    }


    // The following functions are for "AddCard.js"
    handleAddIngredient = event => {

        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        // const name = event.target.name;

        // Updating the input's state
        this.setState({
            newIng: {
                name: value}
            
        });
    }

    handleSubmitIngredient = event => {
        event.preventDefault();
        API.addIngredient(this.state.newIng)
            .then(() => {
                    this.getIngs();
            })
            .catch(err => console.log(err));

            this.setState({ 
              newIng: {
                  name: ""}
            })
    };


    // The following functions are for "AddRec.js"
    handleIngredientSelection = event => {
        console.log(event.target);
        

        this.setState({
            newRec: {
                ...this.state.newRec,
                IngredientId: parseInt(event.target.value)
            }
        });
    };

    handleAddRecommendation = event => {
        // Getting the value and name of the input which triggered the change
        console.log(event.target);
        
        const value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            newRec: {
                ...this.state.newRec,
                [name]: value
            }
        });
    };

    handleSubmitRecommendation = event => {
        event.preventDefault();
        API.addRecommendation(this.state.newRec);
        this.resetImageFile();
        this.setState({
            newRec: {
                brand: "",
                url: "",
                image: "",
                price: "",
                IngredientId: 0,
                files: ""
            }
        });
    }

    handleImageUpload = imageUrl=>{
        this.setState({
            newRec:{
                ...this.state.newRec,
                image:imageUrl
            }
        })
    }

    resetImageFile = event => {
        let fileName = document.getElementById('imgFile');
        fileName.value = "";
    }
    // The following functions are for "DeleteCard.js"

    handleDeleteIngredientSelection = event => {
        this.setState({
            delIngId: parseInt(event.target.value),
            delIngName: event.target.name
        },this.getRecommendations);
    };

    getRecommendations = event => {
        API.getIngredientRecs(this.state.delIngId)
            .then(res => this.setState({ 
                recommendations: res.data 
            }))
            .catch(err => console.log(err));
    }

    handleDeleteIngredient = event => {
        API.deleteIngredient(this.state.delIngId)
        .then(res => this.setState(
            {delIngId: 0},this.getIngs))
        .catch(err => console.log(err))
        this.resetDeleteSelection();
    }

    resetDeleteSelection = event => {
        let delIngSelect = document.getElementById('delIngSel');
        delIngSelect.value = "";
    }

    handleDeleteRecommendation = event => {
        console.log(event.target);
        console.log(event.target.value);
        API.deleteRecommendation(parseInt(event.target.value))
        .then(res => this.getRecommendations())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1 className="center-align">Manage Ingredients</h1>
                <br />

                <Add
                    newIng={this.state.newIng}
                    handleAddIngredient={this.handleAddIngredient}
                    handleSubmitIngredient={this.handleSubmitIngredient}
                />

                <AddRec
                    ingredients={this.state.ingredients}
                    newRec={this.state.newRec}
                    handleIngredientSelection={this.handleIngredientSelection}
                    handleAddRecommendation={this.handleAddRecommendation}
                    handleSubmitRecommendation={this.handleSubmitRecommendation}
                    handleImageUpload={this.handleImageUpload}
                />

                <Delete
                    ingredients={this.state.ingredients}
                    delIngId={this.state.delIngId}
                    recommendations={this.state.recommendations}
                    handleDeleteIngredientSelection={this.handleDeleteIngredientSelection}
                    handleDeleteIngredient={this.handleDeleteIngredient}
                    handleDeleteRecommendation={this.handleDeleteRecommendation}
                    getRecommendations={this.getRecommendations}
                    deleteRec={this.deleteRec}
                />
            </div>
        );
    }
}

export default ManageIng;