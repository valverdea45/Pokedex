import React, { useState } from "react";

function AddPokemon({ onAddPokemon }) {

    const [pokemonName, setPokemonName] = useState("")
    const [pokemonHp, setPokemonHp] = useState(0)
    const [pokemonImage, setPokemonImage] = useState("")

    console.log(pokemonName)
    console.log(pokemonHp)
    console.log(pokemonImage)

    function handleSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            name: pokemonName,
            hp: pokemonHp,
            sprites: {
                front: pokemonImage
            },
            caught: false
        }
        console.log(objToBeSent)

        fetch("http://localhost:3000/pokemon", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((data)=> data.json())
        .then((newPokemon) => onAddPokemon(newPokemon))

        setPokemonHp(0)
        setPokemonImage("")
        setPokemonName("")
    }
    
    return (
        <div>
            <h1>Add a Pokemon!</h1>
            <form onSubmit={handleSubmit} >
                <input onChange={(e) => setPokemonName(e.target.value)} value={pokemonName} type="text" placeholder="Pokemon name"/>
                <input onChange={(e) => setPokemonHp(e.target.value)} value={pokemonHp} type="number" placeholder="hp"/>
                <input onChange={(e) => setPokemonImage(e.target.value)} value={pokemonImage} type="text" placeholder="sprite URL"/>
                <button type="submit">Add Pokemon</button>
            </form>
            <p>note: when adding a pokemon it gives it a chance to be found in the wild</p>
        </div>
    )
}

export default AddPokemon;