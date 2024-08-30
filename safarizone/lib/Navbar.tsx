import React from "react";
import Link from 'next/link'




function Navbar() {
    return (
        <div className="flex justify-evenly flex-row w-screen items-center bg-gradient-to-br from-red-600 to-red-700 py-5">
            <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" alt="pokeballs" className="pokeball" />
            <Link href="/CaughtPokemon" className="blueButtons" >
                Pokemon P.C.
            </Link>
            <Link href="/WildPokemon" className="blueButtons" >
                Safari Zone
            </Link>
            <Link href="/Bag" className="blueButtons">
                Bag
            </Link>
            <Link href="/AddPokemon" className="blueButtons">
                Add Pokemon
            </Link>
            <Link href="/Store" className="blueButtons">
                Store
            </Link>
            <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" alt="pokeballs" className="pokeball"/>
        </div>
    )
}

export default Navbar