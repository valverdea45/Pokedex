import React from "react"

function Pokemon({ singlePokemon }) {

    return (
    <div style={{
        margin: "1rem",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "10px 10px black",
        background: "#f9f9f0"
    }}>
      <div>
        <div className="image">
          <img alt={singlePokemon.name} src={singlePokemon.sprites.front} />
        </div>
        <div className="content">
          <div className="header">{singlePokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {singlePokemon.hp} hp
          </span>
        </div>
      </div>
    </div>
    )
}

export default Pokemon