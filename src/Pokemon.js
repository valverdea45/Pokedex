import React, { useContext, useState, useEffect } from "react"
import { UpdateFunctionContext } from "./App"

function Pokemon({ singlePokemon }) {

  const handleUpdate = useContext(UpdateFunctionContext)
  const [tradeDescision, setTradeDescision] = useState(false)
  const [ releaseDescision, setReleaseDescision ] = useState(false)
  const [specie, setSpecie] = useState({})
  const [pokedexEntry, setPokedexEntry] = useState("")

  const pokemonCardStyle = {
    margin: "1rem",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "10px 10px black",
    background: "#f9f9f0"
  }
  useEffect(() => {
    fetch(`${singlePokemon.species.url}`)
    .then((data) => data.json())
    .then((pokemonSpecies) => {
      setSpecie(pokemonSpecies)
      const pokeEntry = pokemonSpecies.flavor_text_entries.filter((entry) => entry.language.name === 'en')
      const lastEntry = pokeEntry[pokeEntry.length - 1].flavor_text
      setPokedexEntry(lastEntry)
    })
    // eslint-disable-next-line
  }, [])

  function handleDeleteClick() {
    handleUpdate(singlePokemon)
    fetch(`http://localhost:3000/pokemonId/${singlePokemon.id}`, {
      method: "DELETE"
    })
  }

  function handleTradeClick() {
    setTradeDescision(false)
    handleDeleteClick()
  }

  console.log(specie)


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
            <div>
              type:{singlePokemon.types.map((types) => <div>{types.type.name}</div> )}
            </div>
            :
            null}
        </div>
        { releaseDescision ?
          <div>
            <p>You are about to release this pokemon are you sure you want to do that?</p>
            <button onClick={() => handleDeleteClick()}>Yes</button> <button onClick={() => setReleaseDescision(false)}>No</button>
            <p>note: Once a pokemon is released they cannot be recovered</p>
          </div>
         : 
         <button onClick={() => setReleaseDescision(true)}>Release Pokemon</button>}

        {tradeDescision === false ? <button onClick={() => { setTradeDescision(true) }}>Trade Pokemon</button>
          :
          <div>
            <p>you will get 150 pokedollars are you sure you want to do this?</p>
            <button onClick={handleTradeClick}>Yes</button> <button onClick={() => { setTradeDescision(false) }}>No</button>
          </div>}
        
        <p>{pokedexEntry}</p>
      </div>
    </div>
  )
}

export default Pokemon