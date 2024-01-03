import React, { useState } from "react";
import Pokemon from "./Pokemon";

function UncaughtPokemon({ uncaughtPokemon }) {

    const [search, setSearch] = useState("")

    const filteredPokemon = uncaughtPokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })

    const pokemonCards = filteredPokemon.map((singlePokemon) => {
        return <Pokemon key={singlePokemon.name} singlePokemon={singlePokemon} />
    })

    return (
        <div>
            <h1>Uncaught Pokemon</h1>
            <p>{`Total uncaught pokemon ${uncaughtPokemon.length}.`}</p>
            <label>Search: </label>
            <input onChange={(e) => setSearch(e.target.value)}/>
         
            {pokemonCards}
        </div>
    )
}

export default UncaughtPokemon