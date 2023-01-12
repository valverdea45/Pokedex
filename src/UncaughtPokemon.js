import React from "react";
import Pokemon from "./Pokemon";

function UncaughtPokemon({ uncaughtPokemon }) {

    // make name descriptive

    const individualPokemon = uncaughtPokemon.map((singlePokemon) => {
        return <Pokemon key={singlePokemon.name} singlePokemon={singlePokemon} />
    })

    return (
        <div>
            <h1>Uncaught Pokemon</h1>
            <p>{`total uncaught pokemon ${uncaughtPokemon.length}.`}</p>
            {individualPokemon}
        </div>
    )
}

export default UncaughtPokemon