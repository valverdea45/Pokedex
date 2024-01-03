import React, { useContext } from "react"
import { UpdateFunctionContext } from "./App"

function Pokemon({ singlePokemon }) {

  const handleUpdate = useContext(UpdateFunctionContext)

  const pokemonCardStyle = {
        margin: "1rem",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "10px 10px black",
        background: "#f9f9f0"
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/pokemon/${singlePokemon.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        caught: false
      })
    })
    .then((data) => data.json())
    .then((updatedPokemon) => handleUpdate(updatedPokemon))
  }

    return (
    <div style={pokemonCardStyle}>
      <div>
        <div>
          <img alt={singlePokemon.name} src={singlePokemon.sprites.front} />
        </div>
        <div>
          <div>{singlePokemon.name}</div>
        </div>
        <div>
          <span>
            {singlePokemon.hp} hp
          </span>
        </div>
        {singlePokemon.caught ? <button onClick={handleDeleteClick}>Release Pokemon</button> : null}
        
      </div>
    </div>
    )
}

export default Pokemon