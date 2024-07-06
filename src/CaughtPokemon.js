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

    function handleNewClick() {
        fetch("https://pokeapi.co/api/v2/pokemon/rayquaza")
        .then((data) => data.json())
        .then((pokemon) => new Audio(pokemon.cries.latest).play())
    }

    return (
        <div>
            <h1>Caught Pokemon</h1>
            <div>{`Total caught Pokemon ${caughtPokemon.length}.`}</div>
            <br/>
            <label>Search: </label>
            <input onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleNewClick}>get pikachu</button>
            <div>{pokemonCards}</div>
        </div>
    )
}

export default CaughtPokemon