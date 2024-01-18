import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import CaughtPokemon from "./CaughtPokemon"
import Navbar from "./Navbar";
import UncaughtPokemon from "./UncaughtPokemon"
import WildPokemon from "./WildPokemon";
import Home from "./Home";
import AddPokemon from "./AddPokemon"
import Bag from "./Bag"
import WildEnounter from "./WildEncounter";

export const UpdateFunctionContext = createContext(false)

function App() {

  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
      .then((data) => data.json())
      .then((pokemons) => setAllPokemon(pokemons))
  }, [])

  const caughtPokemon = allPokemon.filter(singlePokemon => singlePokemon.caught === true)

  const uncaughtPokemon = allPokemon.filter(singlePokemon => singlePokemon.caught === false)


  function onAddPokemon(newPokemon) {
    setAllPokemon([...allPokemon, newPokemon])
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

  function handleUpdateddPokemon(singlePokemon) {
    const newArrayOfPokemon = allPokemon.map((pokemon) => {
      if(pokemon.id === singlePokemon.id) {
        return singlePokemon
      } else {
        return pokemon
      }
    })
    setAllPokemon(newArrayOfPokemon)
  }

  return (
    <UpdateFunctionContext.Provider value={handleUpdateddPokemon}>
    <div>
    <Navbar />
    <div className="box"/>
      <Routes>
        <Route path="/CaughtPokemon" element={<CaughtPokemon caughtPokemon={caughtPokemon}/>}/>
        <Route path="/UncaughtPokemon" element={<UncaughtPokemon uncaughtPokemon={uncaughtPokemon}/>}/>
        <Route path="/WildPokemon" element={<WildPokemon uncaughtPokemon={uncaughtPokemon} handleUpdatePokemon={handleUpdatePokemon}/>}/>
        <Route path="/AddPokemon" element={<AddPokemon onAddPokemon={onAddPokemon}/>}/>
        <Route path="/Bag" element={<Bag/>}/>
        <Route path="/WildEncounter" element={<WildEnounter/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  </UpdateFunctionContext.Provider>
  );
}

export default App;
