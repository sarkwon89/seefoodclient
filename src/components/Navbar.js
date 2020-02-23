import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import './styles/Navbar.css'

class Navbar extends Component {

    componentDidMount() {
        M.AutoInit()
    }

    render() {
        return (
            <nav>
                <ul id="dropdown1" className="dropdown-content">
                    <li> <Link to="/recipe" className={window.location.pathname === "recipe" ? "nav-link active" : "nav-link1"}>
                        Hamburger
                        </Link></li>
                    <li> <Link to="/recipe2" className={window.location.pathname === "recipe2" ? "nav-link active" : "nav-link1"}>
                        Cauliflower Fried Rice
                        </Link></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li> <Link to="/manage" className={window.location.pathname === "manage" ? "nav-link active" : "nav-link1"}>
                        Manage
                        </Link></li>
                    <li> <Link to="/brandrec" className={window.location.pathname === "brandrec" ? "nav-link active" : "nav-link1"}>
                        Brand
                        </Link></li>
                </ul>
                <div className="nav-wrapper teal darken-4">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Home
                        </Link>
                        </li>
                        <li>
                            <Link to="/about" className={window.location.pathname === "about" ? "nav-link active" : "nav-link"}>
                                About
                        </Link>
                        </li>
                        <li>
                            <a className="dropdown-trigger" href="#!" data-target="dropdown1">Recipes<i className="material-icons right">arrow_drop_down</i></a>
                        </li>
                        <li>
                            <a className="dropdown-trigger" href="#!" data-target="dropdown2">Internal<i className="material-icons right">arrow_drop_down</i></a>
                        </li>
                    </ul>
                </div>
                <ul className="sidenav teal darken-3" id="mobile-demo">
                    <li>
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={window.location.pathname === "about" ? "nav-link active" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <a className="dropdown-trigger" href="#!" data-target="dropdown1">Recipes<i className="material-icons right">arrow_drop_down</i></a>
                    </li>
                    <li>
                        <a className="dropdown-trigger" href="#!" data-target="dropdown2">Internal<i className="material-icons right">arrow_drop_down</i></a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;