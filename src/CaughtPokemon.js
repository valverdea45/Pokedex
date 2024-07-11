import React, { useState } from "react"
import Pokemon from "./Pokemon"

function CaughtPokemon({ caughtPokemon, onAddPokemon }) {

    const [ search, setSearch ] = useState("")


    const filteredPokemon = caughtPokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })

    const pokemonCards = filteredPokemon.map((individualPokemon) => {
        return <Pokemon key={individualPokemon.id} singlePokemon={individualPokemon} />
    })

    function messingAround(pokemon) {
        new Audio(pokemon.cries.latest).play()
        onAddPokemon(pokemon)
    }

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function handleNewClick() {
        const num = getRandomInteger(1, 1025)
        fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then((data) => data.json())
        .then((pokemon) => messingAround(pokemon))
    }

    return (
        <div>
            <h1>Caught Pokemon</h1>
            <div>{`Total caught Pokemon ${caughtPokemon.length}.`}</div>
            <br/>
            <label>Search: </label>
            <input onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleNewClick}>get random pokemon</button>
            <div>{pokemonCards}</div>
        </div>
    )
}

export default CaughtPokemon