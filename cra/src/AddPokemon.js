import React, { useState } from "react";

function AddPokemon({ onAddPokemon }) {

    const [pokemonName, setPokemonName] = useState("")
    const [pokemonHp, setPokemonHp] = useState(0)
    const [pokemonImage, setPokemonImage] = useState("")
    const [isInvalidInput, setIsInvalidInput] = useState(false)
    
    function handleSubmit(e) {
        e.preventDefault()
        if(pokemonName === "" && pokemonImage === "" && pokemonHp === 0) {
            setIsInvalidInput(true)
            return null
        } else {

        setIsInvalidInput(false)

        const objToBeSent = {
            name: pokemonName,
            hp: pokemonHp,
            sprites: {
                front: pokemonImage
            },
            caught: false
        }

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
    }}
    
    return (
        <div>
            <h1>Add a Pokemon!</h1>
            <form onSubmit={handleSubmit} >
                <label>Name: </label>
                <input onChange={(e) => setPokemonName(e.target.value)} value={pokemonName} type="text" placeholder="Name"/>
                <br/>
                <label>HP: </label>
                <input onChange={(e) => setPokemonHp(e.target.value)} value={pokemonHp} type="number" placeholder="HP"/>
                <br/>
                <label>Image: </label>
                <input onChange={(e) => setPokemonImage(e.target.value)} value={pokemonImage} type="text" placeholder="Sprite URL"/>
                <br/>
                <button type="submit">Add Pokemon</button>
            </form>
            {isInvalidInput ? (
                <p>Oops - don't forget to fill out all fields above</p>
            ) : null}
            <p>note: when adding a pokemon it gives it a chance to be found in the wild</p>
        </div>
    )
}

export default AddPokemon;