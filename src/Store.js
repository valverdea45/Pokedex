import React from "react";
import ItemList from "./ItemList";

function Store({ currency, setCurrency }) {
    return (
        <div>
            <h1>Welcome to the PokeMart!</h1>
            <p>Pokémon Dollars: ${currency}</p>
            <ItemList/>
        </div>
    )
}

export default Store