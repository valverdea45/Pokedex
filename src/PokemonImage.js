import React, { useState } from "react";

function PokemonImage({ singlePokemon }) {

    const [imageClick, setImageClick] = useState(false)
    const [showShiny, setShowShiny] = useState(false)

    if(singlePokemon.sprites.other.showdown.front_default === null) {
        if(imageClick && singlePokemon.sprites.back_default) {
            return (
                <img alt={singlePokemon.name} src={singlePokemon.sprites.back_default}/>
            )
        } else if(imageClick === false && singlePokemon.sprites.front_default){
            return (
                <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default}/>
            )
        }
    }

    return (
        <div>
            <button onClick={() => setShowShiny(!showShiny)}>Shiny</button>
            <div onClick={() => setImageClick(!imageClick)}>
                {
                    singlePokemon.sprites.other.showdown.front_default === null ?
                        imageClick ? <img alt={singlePokemon.name} src={singlePokemon.sprites.back_default} /> : <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default} />
                        :
                        showShiny ?
                            imageClick ? <img alt={singlePokemon.name} src={singlePokemon.sprites.other.showdown.back_shiny} /> : <img alt={singlePokemon.name} src={singlePokemon.sprites.other.showdown.front_shiny} />
                            :
                            imageClick ? <img alt={singlePokemon.name} src={singlePokemon.sprites.other.showdown.back_default} /> : <img alt={singlePokemon.name} src={singlePokemon.sprites.other.showdown.front_default} />
                }
            </div>
        </div>
    )
}

export default PokemonImage