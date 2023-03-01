import React, { useState } from "react"
import Pokemon from "./Pokemon"

function CaughtPokemon({ caughtPokemon }) {
    const [caughtPokemons, setCaughtPokemons] = useState([])

    setCaughtPokemons(caughtPokemon)


    console.log(caughtPokemons)

    function handleSortClick() {
        setCaughtPokemons(caughtPokemons.map((pokemon) => {
            return pokemon.name.sort()
        }))
    }

    const pokemonCards = caughtPokemons.map((individualPokemon) => {
        return <Pokemon key={individualPokemon.name} singlePokemon={individualPokemon} />
    })

    return (
        <div>
            <h1>Caught Pokemon</h1>
            <div>{`Total caught Pokemon ${caughtPokemon.length}.`}</div>
            <button onClick={handleSortClick}> Sort By Name</button>
            <div>{pokemonCards}</div>
        </div>
    )
}

export default CaughtPokemon