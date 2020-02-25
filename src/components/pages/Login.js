import React, { useState } from 'react'
import {Redirect,useHistory} from 'react-router-dom'
import API from "../../utils/API"
import "../styles/Login.css";


export default function Login(props) {
    const [login, setLogin] = useState({
        name: "",
        password: ""
    })
    const history = useHistory();
    const handleInputChange = event => {
        const { name, value } = event.target;
        setLogin({
            ...login,
            [name]: value
        })
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        API.login(login).then(res=>{
            console.log(res.data)
            props.loggedInFunction();
            history.push('/manage')
            
        }).catch(err=>{
            console.log(err);
        })
        
    }
    const isAuthButton = event => {
        API.isAuthenticated().then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log("error occured", err)
        })
    }
    return (
        <div>
            <div className="container">
            <form onSubmit={handleFormSubmit}>
                {/* {willRedirect?<Redirect to='/'/>:null} */}
                <input onChange={handleInputChange} value={login.name} type="text" name="name" placeholder="name" />
                <input onChange={handleInputChange} value={login.password} type="password" name="password" placeholder="class" />
                <input className="btn btn-primary red accent-2" type="submit" value="Login" />
            </form>
            </div>
        </div>
    )
}
