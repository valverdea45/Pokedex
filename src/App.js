import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CaughtPokemon from "./CaughtPokemon"
import Navbar from "./Navbar";
import UncaughtPokemon from "./UncaughtPokemon"
import WildPokemon from "./WildPokemon";
import Home from "./Home";
import AddPokemon from "./AddPokemon"

function App() {

  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/pokemon")
      .then((data) => data.json())
      .then((pokemons) => setAllPokemon(pokemons))
  }, [])

  const caughtPokemon = allPokemon.filter(singlePokemon => singlePokemon.caught === true)

  const uncaughtPokemon = allPokemon.filter(singlePokemon => singlePokemon.caught === false)

  console.log("this is uncaught", uncaughtPokemon)
  console.log("this is caught pokemon", caughtPokemon)

  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/CaughtPokemon">
          <CaughtPokemon caughtPokemon={caughtPokemon} />
        </Route>
        <Route exact path="/UncaughtPokemon">
          <UncaughtPokemon uncaughtPokemon={uncaughtPokemon} />
        </Route>
        <Route exact path="/WildPokemon">
          <WildPokemon allPokemon={allPokemon} uncaughtPokemon={uncaughtPokemon} caughtPokemon={caughtPokemon} setAllPokemon={setAllPokemon}/>
        </Route>
        <Route exact path="/AddPokemon">
          <AddPokemon uncaughtPokemon={uncaughtPokemon}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
