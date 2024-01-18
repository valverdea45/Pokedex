import React, { useState } from "react"
import Pokemon from "./Pokemon"

function CaughtPokemon({ caughtPokemon }) {

    const [ search, setSearch ] = useState("")


    const filteredPokemon = caughtPokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })

    const pokemonCards = filteredPokemon.map((individualPokemon) => {
        return <Pokemon key={individualPokemon.id} singlePokemon={individualPokemon} />
    })

    return (
        <div>
            <h1>Caught Pokemon</h1>
            <div>{`Total caught Pokemon ${caughtPokemon.length}.`}</div>
            <br/>
            <label>Search: </label>
            <input onChange={(e) => setSearch(e.target.value)} />
            <div>{pokemonCards}</div>
        </div>
    )
}

export default CaughtPokemon