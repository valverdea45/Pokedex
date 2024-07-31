import React, { useState } from "react"
import Pokemon from "./Pokemon"

function CaughtPokemon({ caughtPokemon, onAddPokemon }) {

    const [search, setSearch] = useState("")

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
        // from 1 - 1025
        // from 10,001 - 10,277
        // use filter to go through all the ids and if one id matches the num to be used return tht id
        // use while loop to see if there is a match if there is rerun the code
        const allIds = caughtPokemon.map((pokemon) => pokemon.id)
        const coinFlip = getRandomInteger(0, 1)
        let matchingNumber = [1]

        function matchingNumberCheck(numToBeUsed) {
            const numbersChecked = allIds.filter((id) => {
                return id === numToBeUsed
            })
            return matchingNumber = numbersChecked
        }

        if (matchingNumber.length > 0) {
            let bothNumbers = [getRandomInteger(1, 1025), getRandomInteger(10001, 10277)]
            let numToBeUsed = bothNumbers[coinFlip]
            matchingNumberCheck(numToBeUsed)
        } else {
            const weGood = 'we good'
            console.log(weGood)
        }

        debugger

        // if (coinFlip === 1) {
        //     const num = getRandomInteger(1, 1025)
        //     fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        //         .then((data) => data.json())
        //         .then((pokemon) => messingAround(pokemon))
        // } else if (coinFlip === 2) {
        //     const num = getRandomInteger(10001, 10277)
        //     fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        //         .then((data) => data.json())
        //         .then((pokemon) => messingAround(pokemon))
        // }

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