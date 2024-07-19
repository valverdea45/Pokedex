import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import CaughtPokemon from "./CaughtPokemon"
import Navbar from "./Navbar";
import Store from "./Store"
import WildPokemon from "./WildPokemon";
import Home from "./Home";
import AddPokemon from "./AddPokemon"
import Bag from "./Bag"
import WildEnounter from "./WildEncounter";

export const UpdateFunctionContext = createContext(false)

function App() {

  const [allPokemon, setAllPokemon] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/pokemonId")
      .then((data) => data.json())
      .then((pokemonIds) => getAllPokemon(pokemonIds))
     // eslint-disable-next-line
  }, [])

  function getAllPokemon(pokemonIds) {
    const urls = []
    for(let i = 0; i < pokemonIds.length; i++) {
      let newUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIds[i].id}`
      urls.push(newUrl)
    }

    const allPromises = urls.map((url) => fetch(url))

    Promise.all(allPromises)
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((pokemons) => setAllPokemon(pokemons))

  }

  function onAddPokemon(newPokemon) {
    setAllPokemon([...allPokemon, newPokemon])
    fetch(`http://localhost:3000/pokemonId`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: newPokemon.id
      })
    })
  }

  function handleUpdatePokemon(newPokemon) {
    const newArrayOfPokemon = allPokemon.map((singlePokemon) => {
      if (newPokemon.id === singlePokemon.id) {
        return newPokemon
      } else {
        return singlePokemon
      }
    })
    setAllPokemon(newArrayOfPokemon)
  }

//   const newReviews = car.reviews.filter((review) => {
//     return review.id !== toBeDeletedReview.id
// })

  function handleUpdateddPokemon(singlePokemon) {
    const newArrayOfPokemon = allPokemon.filter((pokemon) => {
      return pokemon.id !== singlePokemon.id
    })
    setAllPokemon(newArrayOfPokemon)
  }

  return (
    <UpdateFunctionContext.Provider value={handleUpdateddPokemon}>
    <Navbar/>
      <Routes>
        <Route path="/CaughtPokemon" element={<CaughtPokemon caughtPokemon={allPokemon} onAddPokemon={onAddPokemon}/>}/>
        <Route path="/Store" element={<Store/>}/>
        <Route path="/WildPokemon" element={<WildPokemon handleUpdatePokemon={handleUpdatePokemon}/>}/>
        <Route path="/AddPokemon" element={<AddPokemon onAddPokemon={onAddPokemon}/>}/>
        <Route path="/Bag" element={<Bag/>}/>
        <Route path="/WildEncounter" element={<WildEnounter/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
  </UpdateFunctionContext.Provider>
  );
}

export default App;
