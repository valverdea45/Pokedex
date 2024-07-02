import React from "react";
import { NavLink } from "react-router-dom";
import './css/NavBar.css';



function Navbar() {
    return (
        <div className="flex">
            <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" className="pokeball-left" alt="pokeballs" />
            <NavLink to="/CaughtPokemon" exact="true" className="linkStyles" >
                Caught Pokemon
            </NavLink>
            <NavLink to="/UncaughtPokemon" exact="true" className="linkStyles" >
                Uncaught Pokemon
            </NavLink>
            <NavLink to="/WildPokemon" exact="true" className="linkStyles" >
                Wild Pokemon
            </NavLink>
            <NavLink to="/Bag" exact="true" className="linkStyles">
                Bag
            </NavLink>
            <NavLink to="/AddPokemon" exact="true" className="linkStyles">
                Add Pokemon
            </NavLink>
            <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" className="pokeball-right" alt="pokeballs" />
        </div>
    )
}

export default Navbar