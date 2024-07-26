import React from "react";

function PokemonImage({ singlePokemon, imageClick, showShiny, initialRender, clearMessage, setClearMessage }) {


    if (singlePokemon.sprites.other.showdown.front_default === null || singlePokemon.sprites.other.showdown.back_default === null) {
        if (singlePokemon.sprites.front_default && singlePokemon.sprites.back_default) {
            if (imageClick) {
                return (
                    <img alt={singlePokemon.name} src={singlePokemon.sprites.back_default} />
                )
            } else {
                return (
                    <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default} />
                )
            }
        } else {
            // if (imageClick && initialRender === false) {
            //     return (
            //         <div>
            //             <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default} />
            //             {clearMessage ? null : <div> <p>Sorry! there are no other sprites for this pokemon.</p><button onClick={() => setClearMessage(true)}>X</button> </div>}
            //         </div>
            //     )
            // } else if (imageClick === false && initialRender === false) {
            //     return (
            //         <div>
            //             <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default} />
            //             {clearMessage ? null : <div> <p>Sorry! there are no other sprites for this pokemon.</p><button onClick={() => setClearMessage(true)}>X</button> </div>}
            //         </div>
            //     )
            // } else if (initialRender) {
            //     return (
            //         <div>
            //             <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default} />
            //         </div>
            //     )
            // }
            if (initialRender) {
                return (
                    <div>
                        <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default} />
                    </div>
                )
            } else {

                return (
                    <div>
                        <img alt={singlePokemon.name} src={singlePokemon.sprites.front_default} />
                        {clearMessage ? null : <div> <p>Sorry! there are no other sprites for this pokemon.</p><button onClick={() => setClearMessage(true)}>x</button> </div>}
                    </div>
                )
            }
        }
    }

    return (
        <div>
            {
                showShiny ?
                    imageClick ? <img alt={singlePokemon.name} src={singlePokemon.sprites.other.showdown.back_shiny} /> : <img alt={singlePokemon.name} src={singlePokemon.sprites.other.showdown.front_shiny} />
                    :
                    imageClick ? <img alt={singlePokemon.name} src={singlePokemon.sprites.other.showdown.back_default} /> : <img alt={singlePokemon.name} src={singlePokemon.sprites.other.showdown.front_default} />
            }
        </div>
    )
}

export default PokemonImage