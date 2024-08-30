"use client"
import Image from "next/image";
import React, { useEffect, useState, useContext, createContext } from "react";

const UpdateFunctionContext = createContext<(singlePokemon: Pokemon) => void>(() => {})

export function useData() {
  return (
    useContext(UpdateFunctionContext)
  )
}
// entire pokemon object example
// {
//   "abilities": [
//       {
//           "ability": {
//               "name": "overgrow",
//               "url": "https://pokeapi.co/api/v2/ability/65/"
//           },
//           "is_hidden": false,
//           "slot": 1
//       },
//       {
//           "ability": {
//               "name": "chlorophyll",
//               "url": "https://pokeapi.co/api/v2/ability/34/"
//           },
//           "is_hidden": true,
//           "slot": 3
//       }
//   ],
//   "base_experience": 236,
//   "cries": {
//       "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10195.ogg",
//       "legacy": null
//   },
//   "forms": [
//       {
//           "name": "venusaur-gmax",
//           "url": "https://pokeapi.co/api/v2/pokemon-form/10364/"
//       }
//   ],
//   "game_indices": [],
//   "height": 240,
//   "held_items": [],
//   "id": 10195,
//   "is_default": false,
//   "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/10195/encounters",
//   "moves": [],
//   "name": "venusaur-gmax",
//   "order": -1,
//   "past_abilities": [],
//   "past_types": [],
//   "species": {
//       "name": "venusaur",
//       "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
//   },
//   "sprites": {
//       "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10195.png",
//       "back_female": null,
//       "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10195.png",
//       "back_shiny_female": null,
//       "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png",
//       "front_female": null,
//       "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10195.png",
//       "front_shiny_female": null,
//       "other": {
//           "dream_world": {
//               "front_default": null,
//               "front_female": null
//           },
//           "home": {
//               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10195.png",
//               "front_female": null,
//               "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/10195.png",
//               "front_shiny_female": null
//           },
//           "official-artwork": {
//               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png",
//               "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10195.png"
//           },
//           "showdown": {
//               "back_default": null,
//               "back_female": null,
//               "back_shiny": null,
//               "back_shiny_female": null,
//               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10195.gif",
//               "front_female": null,
//               "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10195.gif",
//               "front_shiny_female": null
//           }
//       },
//       "versions": {
//           "generation-i": {
//               "red-blue": {
//                   "back_default": null,
//                   "back_gray": null,
//                   "back_transparent": null,
//                   "front_default": null,
//                   "front_gray": null,
//                   "front_transparent": null
//               },
//               "yellow": {
//                   "back_default": null,
//                   "back_gray": null,
//                   "back_transparent": null,
//                   "front_default": null,
//                   "front_gray": null,
//                   "front_transparent": null
//               }
//           },
//           "generation-ii": {
//               "crystal": {
//                   "back_default": null,
//                   "back_shiny": null,
//                   "back_shiny_transparent": null,
//                   "back_transparent": null,
//                   "front_default": null,
//                   "front_shiny": null,
//                   "front_shiny_transparent": null,
//                   "front_transparent": null
//               },
//               "gold": {
//                   "back_default": null,
//                   "back_shiny": null,
//                   "front_default": null,
//                   "front_shiny": null,
//                   "front_transparent": null
//               },
//               "silver": {
//                   "back_default": null,
//                   "back_shiny": null,
//                   "front_default": null,
//                   "front_shiny": null,
//                   "front_transparent": null
//               }
//           },
//           "generation-iii": {
//               "emerald": {
//                   "front_default": null,
//                   "front_shiny": null
//               },
//               "firered-leafgreen": {
//                   "back_default": null,
//                   "back_shiny": null,
//                   "front_default": null,
//                   "front_shiny": null
//               },
//               "ruby-sapphire": {
//                   "back_default": null,
//                   "back_shiny": null,
//                   "front_default": null,
//                   "front_shiny": null
//               }
//           },
//           "generation-iv": {
//               "diamond-pearl": {
//                   "back_default": null,
//                   "back_female": null,
//                   "back_shiny": null,
//                   "back_shiny_female": null,
//                   "front_default": null,
//                   "front_female": null,
//                   "front_shiny": null,
//                   "front_shiny_female": null
//               },
//               "heartgold-soulsilver": {
//                   "back_default": null,
//                   "back_female": null,
//                   "back_shiny": null,
//                   "back_shiny_female": null,
//                   "front_default": null,
//                   "front_female": null,
//                   "front_shiny": null,
//                   "front_shiny_female": null
//               },
//               "platinum": {
//                   "back_default": null,
//                   "back_female": null,
//                   "back_shiny": null,
//                   "back_shiny_female": null,
//                   "front_default": null,
//                   "front_female": null,
//                   "front_shiny": null,
//                   "front_shiny_female": null
//               }
//           },
//           "generation-v": {
//               "black-white": {
//                   "animated": {
//                       "back_default": null,
//                       "back_female": null,
//                       "back_shiny": null,
//                       "back_shiny_female": null,
//                       "front_default": null,
//                       "front_female": null,
//                       "front_shiny": null,
//                       "front_shiny_female": null
//                   },
//                   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/10195.png",
//                   "back_female": null,
//                   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/10195.png",
//                   "back_shiny_female": null,
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/10195.png",
//                   "front_female": null,
//                   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/10195.png",
//                   "front_shiny_female": null
//               }
//           },
//           "generation-vi": {
//               "omegaruby-alphasapphire": {
//                   "front_default": null,
//                   "front_female": null,
//                   "front_shiny": null,
//                   "front_shiny_female": null
//               },
//               "x-y": {
//                   "front_default": null,
//                   "front_female": null,
//                   "front_shiny": null,
//                   "front_shiny_female": null
//               }
//           },
//           "generation-vii": {
//               "icons": {
//                   "front_default": null,
//                   "front_female": null
//               },
//               "ultra-sun-ultra-moon": {
//                   "front_default": null,
//                   "front_female": null,
//                   "front_shiny": null,
//                   "front_shiny_female": null
//               }
//           },
//           "generation-viii": {
//               "icons": {
//                   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/3-gmax.png",
//                   "front_female": null
//               }
//           }
//       }
//   },
//   "stats": [
//       {
//           "base_stat": 80,
//           "effort": 0,
//           "stat": {
//               "name": "hp",
//               "url": "https://pokeapi.co/api/v2/stat/1/"
//           }
//       },
//       {
//           "base_stat": 82,
//           "effort": 0,
//           "stat": {
//               "name": "attack",
//               "url": "https://pokeapi.co/api/v2/stat/2/"
//           }
//       },
//       {
//           "base_stat": 83,
//           "effort": 0,
//           "stat": {
//               "name": "defense",
//               "url": "https://pokeapi.co/api/v2/stat/3/"
//           }
//       },
//       {
//           "base_stat": 100,
//           "effort": 2,
//           "stat": {
//               "name": "special-attack",
//               "url": "https://pokeapi.co/api/v2/stat/4/"
//           }
//       },
//       {
//           "base_stat": 100,
//           "effort": 1,
//           "stat": {
//               "name": "special-defense",
//               "url": "https://pokeapi.co/api/v2/stat/5/"
//           }
//       },
//       {
//           "base_stat": 80,
//           "effort": 0,
//           "stat": {
//               "name": "speed",
//               "url": "https://pokeapi.co/api/v2/stat/6/"
//           }
//       }
//   ],
//   "types": [
//       {
//           "slot": 1,
//           "type": {
//               "name": "grass",
//               "url": "https://pokeapi.co/api/v2/type/12/"
//           }
//       },
//       {
//           "slot": 2,
//           "type": {
//               "name": "poison",
//               "url": "https://pokeapi.co/api/v2/type/4/"
//           }
//       }
//   ],
//   "weight": 10000
// }
// keys used in species object
// capture rate
// is_baby is_mythical is_legendary
// flavor text entries

  export type Text_Entry = {
    flavor_text: string,
    language: {
      name: string
    }
  }

  export type Species = {
    capture_rate: number,
    is_baby: boolean,
    is_legendary: boolean,
    is_mythical: boolean,
    flavor_text_entries: Text_Entry[]
  }

  export type SpriteObj = {
    back_default: string|null,
    back_shiny: string|null,
    front_default: string|null,
    front_shiny: string|null,
    other: {
      showdown: {
        front_default: string|null,
        front_shiny: string|null,
        back_default: string|null,
        back_shiny: string|null
      }
    }
  }

  export type Stat = {
    base_stat: number,
    stat: {
      name: string
    }
  }

  export type TypeObj = {
    type: {
      name: string
    }
  }

  export type Pokemon = {
    cries: {
      latest: string
    },
    height: number,
    id: number,
    name: string,
    sprites: SpriteObj,
    stats: Stat[],
    types: TypeObj[],
    weight: number,
    species: {
      url: string
    }
  }


export function Provider(props: React.PropsWithChildren) {

  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([])
  const [currency, setCurrency] = useState(0)


  useEffect(() => {
    fetch("http://localhost:3000/pokemonId")
      .then((data) => data.json())
      .then((pokemonIds) => getAllPokemon(pokemonIds))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/currency")
      .then((data) => data.json())
      .then((currency) => setCurrency(currency.currency))
    // eslint-disable-next-line
  }, [])



  function getAllPokemon(pokemonIds: Pick<Pokemon,"id">[]) {
    const urls: string[] = []
    for (let i = 0; i < pokemonIds.length; i++) {
      let newUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIds[i].id}`
      urls.push(newUrl)
    }

    const allPromises: Array<Promise<Response>> = urls.map((url) => fetch(url))

    Promise.all(allPromises)
      .then((responses) => Promise.all(responses.map((response) => response.json())))
      .then((pokemons) => setAllPokemon(pokemons))

  }

  function onAddPokemon(newPokemon: Pokemon) {
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

  function handleUpdatePokemon(newPokemon: Pokemon) {
    const newArrayOfPokemon = allPokemon.map((singlePokemon) => {
      if (newPokemon.id === singlePokemon.id) {
        return newPokemon
      } else {
        return singlePokemon
      }
    })
    setAllPokemon(newArrayOfPokemon)
  }

  function handleUpdateddPokemon(singlePokemon: Pokemon) {
    const newArrayOfPokemon = allPokemon.filter((pokemon) => {
      return pokemon.id !== singlePokemon.id
    })
    setAllPokemon(newArrayOfPokemon)
  }

  return (
    <UpdateFunctionContext.Provider value={handleUpdateddPokemon}>
      {props.children}
    </UpdateFunctionContext.Provider>
  );
}

