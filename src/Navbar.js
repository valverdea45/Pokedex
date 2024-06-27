import React from "react";
import { NavLink } from "react-router-dom"
import './css/NavBar.css'


// const linkStyles = {
//     display: "inline-block",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
// }

const hoverStyle = {
    background: "darkblue"
}

function Navbar() {
    return (
        <div>
            <NavLink to="/CaughtPokemon" exact style={linkStyles} activeStyle={hoverStyle}>
                Caught Pokemon
            </NavLink>
            <NavLink to="/UncaughtPokemon"exact style={linkStyles} activeStyle={hoverStyle}>
                Uncaught Pokemon
            </NavLink>
            <NavLink to="/WildPokemon" exact style={linkStyles} activeStyle={hoverStyle}>
                Wild Pokemon
            </NavLink>
            <NavLink to="/Bag" exact style={linkStyles} activeStyle={hoverStyle}>
                Bag
            </NavLink>
            <NavLink to="/AddPokemon" exact style={linkStyles} activeStyle={hoverStyle}>
                Add Pokemon
            </NavLink>
        </div>
    )
}

export default Navbar