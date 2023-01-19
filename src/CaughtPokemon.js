import React from "react"
import Pokemon from "./Pokemon"

function CaughtPokemon({ caughtPokemon }) {

    const pokemonCards = caughtPokemon.map((individualPokemon) => {
        return <Pokemon key={individualPokemon.name} singlePokemon={individualPokemon}/>
    })

    return (
        <div>
            <h1>Caught Pokemon</h1>
            <div>{`Total caught Pokemon ${caughtPokemon.length}.`}</div>
            <div>{pokemonCards}</div>
        </div>
    )
}

export default CaughtPokemon