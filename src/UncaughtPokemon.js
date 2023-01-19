import React from "react";
import Pokemon from "./Pokemon";

function UncaughtPokemon({ uncaughtPokemon }) {

    const pokemonCards = uncaughtPokemon.map((singlePokemon) => {
        return <Pokemon key={singlePokemon.name} singlePokemon={singlePokemon} />
    })

    return (
        <div>
            <h1>Uncaught Pokemon</h1>
            <p>{`total uncaught pokemon ${uncaughtPokemon.length}.`}</p>
            {pokemonCards}
        </div>
    )
}

export default UncaughtPokemon