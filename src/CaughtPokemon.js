import React, { useState } from "react"
import Pokemon from "./Pokemon"

function CaughtPokemon({ caughtPokemon, onAddPokemon, currency, setCurrency }) {

    const [search, setSearch] = useState("")

    const filteredPokemon = caughtPokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })

    const pokemonCards = filteredPokemon.map((individualPokemon) => {
        return <Pokemon key={individualPokemon.id} singlePokemon={individualPokemon} currency={currency} setCurrency={setCurrency}/>
    })

    function messingAround(pokemon) {
        new Audio(pokemon.cries.latest).play()
        onAddPokemon(pokemon)
    }

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function handleNewClick() {
        // from 1 - 1025
        // from 10,001 - 10,277

        function createPokemonId() {

            const allIds = caughtPokemon.map((pokemon) => pokemon.id)

            while (true) {
                const coinFlip = getRandomInteger(0, 1)
                let bothNumbers = [getRandomInteger(1, 1025), getRandomInteger(10001, 10277)]
                let numToBeUsed = bothNumbers[coinFlip]

                let duplicatesFound = allIds.filter((id) => {
                    return id === numToBeUsed
                })

                if (duplicatesFound.length === 0) {
                    return numToBeUsed
                } else {
                    continue
                }
            }


        }

        const pokemonId = createPokemonId()
        

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((data) => data.json())
            .then((pokemon) => messingAround(pokemon))

    }

    return (
        <div>
            <h1>Caught Pokemon</h1>
            <div>{`Total caught Pokemon ${caughtPokemon.length}.`}</div>
            <br />
            <label>Search: </label>
            <input onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleNewClick}>get random pokemon</button>
            <div>{pokemonCards}</div>
        </div>
    )
}

export default CaughtPokemon