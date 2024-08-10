import React from "react";
import { NavLink } from "react-router-dom";
import Link from 'next/link'
import '@/app/NavBar.css';



function Navbar() {
    return (
        <div className="flex">
            <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" className="pokeball-left" alt="pokeballs" />
            <Link href="/CaughtPokemon" className="linkStyles" >
                Pokemon P.C.
            </Link>
            <Link href="/WildPokemon" className="linkStyles" >
                Safari Zone
            </Link>
             <Link href="/Bag" className="linkStyles">
                Bag
            </Link>
            <Link href="/AddPokemon" className="linkStyles">
                Add Pokemon
            </Link>
            <Link href="/Store" className="linkStyles">
                Store
            </Link>
            <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" className="pokeball-right" alt="pokeballs" />
        </div>
    )
}

export default Navbar