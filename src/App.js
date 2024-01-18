import React, { useEffect, useState, createContext } from "react";
import { Route, Switch } from "react-router-dom";
import CaughtPokemon from "./CaughtPokemon"
import Navbar from "./Navbar";
import UncaughtPokemon from "./UncaughtPokemon"
import WildPokemon from "./WildPokemon";
import Home from "./Home";
import AddPokemon from "./AddPokemon"

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
      <Switch>
        <Route exact path="/CaughtPokemon">
          <CaughtPokemon caughtPokemon={caughtPokemon} />
        </Route>
        <Route exact path="/UncaughtPokemon">
          <UncaughtPokemon uncaughtPokemon={uncaughtPokemon} />
        </Route>
        <Route exact path="/WildPokemon">
          <WildPokemon uncaughtPokemon={uncaughtPokemon} handleUpdatePokemon={handleUpdatePokemon}/>
        </Route>
        <Route exact path="/AddPokemon">
          <AddPokemon onAddPokemon={onAddPokemon} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </UpdateFunctionContext.Provider>
  );
}

export default App;
