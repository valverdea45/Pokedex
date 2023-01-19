import React from "react"

function Pokemon({ singlePokemon }) {

  const pokemonCardStyle = {
    margin: "1rem",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "10px 10px black",
        background: "#f9f9f0"
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
      </div>
    </div>
    )
}

export default Pokemon