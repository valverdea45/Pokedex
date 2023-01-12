import React from "react"
import Pokemon from "./Pokemon"

function CaughtPokemon({ caughtPokemon }) {

    // make name descriptive and dont reuse names

    const individualPokemon = caughtPokemon.map((individualPokemon) => {
        return <Pokemon key={individualPokemon.name} singlePokemon={individualPokemon}/>
    })

    return (
        <div>
            <h1>Caught Pokemon</h1>
            <p>{`Total caught Pokemon ${caughtPokemon.length}.`}</p>
            <p>{individualPokemon}</p>
        </div>
    )
}

export default CaughtPokemon