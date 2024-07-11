import React, { useContext, useState } from "react"
import { UpdateFunctionContext } from "./App"

function Pokemon({ singlePokemon }) {

  const handleUpdate = useContext(UpdateFunctionContext)
  const [ tradeDescision, setTradeDescision ] = useState(false)

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

  function handleTradeClick() {
    setTradeDescision(false)
    handleDeleteClick()
  }

    return (
    <div style={pokemonCardStyle}>
      <div>
        <div>
          <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default} />
        </div>
        <div>
          <div>{singlePokemon.name}</div>
        </div>
        <div>
          {singlePokemon.types ? 
          <div> type: {singlePokemon.types.map((types) => types.type.name)}</div> 
          : 
          null }
        </div>
        <button onClick={handleDeleteClick}>Release Pokemon</button>

        {tradeDescision === false ? <button onClick={() => {setTradeDescision(true)}}>Trade Pokemon</button> 
        :
        <div>
          <p>you will get 150 pokedollars are you sure you want to do this?</p>
          <button onClick={handleTradeClick}>Yes</button> <button onClick={() => {setTradeDescision(false)}}>No</button>
        </div> 
        }
        
      </div>
    </div>
    )
}

export default Pokemon