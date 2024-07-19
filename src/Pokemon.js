import React, { useContext, useState, useEffect } from "react"
import { UpdateFunctionContext } from "./App"
import PokemonImage from "./PokemonImage"

function Pokemon({ singlePokemon }) {

  const handleUpdate = useContext(UpdateFunctionContext)
  const [tradeDescision, setTradeDescision] = useState(false)
  const [ releaseDescision, setReleaseDescision ] = useState(false)
  const [specie, setSpecie] = useState({})
  const [pokedexEntry, setPokedexEntry] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")

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
      const totalH = singlePokemon.height * 10 / 30.48
      const totalHInString = totalH.toString().split(".")
      const heightInFt = parseInt(totalHInString[0])
      const heightInFtAfterDecimal = parseFloat(`.${totalHInString[1]}`)
      const heightInInches = Math.round(heightInFtAfterDecimal * 12)
      setHeight(`${heightInFt}' ${heightInInches}"`)
      const weightInPounds = singlePokemon.weight / 4.536
      const weightRounded = Math.round(weightInPounds*10)/10
      setWeight(weightRounded)
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

  // console.log(specie)
  console.log(singlePokemon)

  return (
    <div style={pokemonCardStyle}>
      <div>
        <PokemonImage singlePokemon={singlePokemon}/>
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
        <p>Base Stats:</p>
        <ul>
        {singlePokemon.stats.map((stat) => {
          return (
            <p>{stat.stat.name} {stat.base_stat}</p>
          )
        })}
        </ul>
        <p>Height: {height}</p>
        <p>Weight: {weight} lbs</p>
      </div>
  )
}

export default Pokemon