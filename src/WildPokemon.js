import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bag from "./Bag";
import WildEnounter from "./WildEncounter";
import css from "./WildPokemon.module.css"

function WildPokemon({ uncaughtPokemon, handleUpdatePokemon }) {

   const navigate = useNavigate()

    // add conditional for loading useeffect runs after the initial render.

    // function for creating random integers
    function getRandomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    // created state to change pokemon index on uncaughtPokemon array
    const [pokemonIndex, setPokemonIndex] = useState(0)

    // created a state for each conditional
    const [pokemonCaught, setPokemonCaught] = useState(false)
    const [pokemonRan, setPokemonRan] = useState(false)
    const [triedToRun, setTriedToRun] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    // created a state to display the game
    const [showHome, setShowHome] = useState(true)
    const [couldYouRun, setCouldYouRun] = useState(false)
    //current random pokemon
    let randomPokemon = uncaughtPokemon[pokemonIndex]


    // these useEffects are to reset states back to default
    useEffect(() => {
        setPokemonIndex(getRandomInteger(0, uncaughtPokemon.length - 1))
    }, [uncaughtPokemon])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPokemonCaught(false)
        }, 1500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [pokemonCaught])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPokemonRan(false)
        }, 1500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [pokemonRan])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowHome(true)
        }, 1700)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [showHome])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTriedToRun(false)
        }, 1000);
        return () => {
            clearTimeout(timeoutId)
        }
    }, [triedToRun])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setWasClicked(false)
            setCouldYouRun(false)
        }, 1000);
        return () => {
            clearTimeout(timeoutId)
        }
    },[wasClicked])


    // handleCatch function gets three random intergers
    // pokeball the integer for how likly to catch pokemon
    // chanceToCatch which is an integer for how likly to catch pokemon
    // chance of escape is  an integer for the likelyhood of the pokemon escaping if pokemon cant escape user has another shot of catching it
    // otherwise pokemon will disappear and another one will load
    // if pokeball is greater than or equal to than chanceToCatch then the pokemon is caught

    function handleCatch() {
        const chanceToCatch = getRandomInteger(0, 100)
        const pokeball = getRandomInteger(0, 100)



        if (pokeball >= chanceToCatch) {
            return onCatch(randomPokemon)
        } else {
            const chanceOfEscape = getRandomInteger(0, 5)
            if (chanceOfEscape >= 1) {
                setPokemonIndex(getRandomInteger(0, uncaughtPokemon.length - 1))
                setPokemonRan(true)
                setShowHome(false)
            } else {
                setTriedToRun(true)
            }

        }
    }

    function onCatch(randomPokemon) {
        randomPokemon.caught = true
        setPokemonCaught(true)
        setShowHome(false)

        fetch(`http://localhost:3000/pokemon/${randomPokemon.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                caught: true
            })
        })
            .then((data) => data.json())
            .then((newPokemon) => handleUpdatePokemon(newPokemon))
    }

    // when clicking the run away button gives the user to run
    // gets random integer from 0-8 and if its greater than or equal to 7 they load the next pokemon
    function handleRun() {
        const chanceToRunAway = getRandomInteger(0, 8)
        setWasClicked(true)
        if (chanceToRunAway >= 4) {
            setPokemonIndex(getRandomInteger(0, uncaughtPokemon.length - 1))
            setCouldYouRun(true)
        }
    }

    // in the JSX bellow the default values for the conditionals are as follows
    // showHome = true
    // pokemoncaught = false
    // pokemonRan = false
    // triedToRun =  false
    // depending on the results of handleCatch these boolean values will change but the useEffect functions above will reset to these default boolean values
    
    if(!randomPokemon) {
        return(
            <p>loading....</p>
        )
    }

    return (
        <div>
            <div>
            {showHome ? (
                // <div>
                //     <h2>{`Woah a wild ${randomPokemon.name} appeared!`}</h2>
                //     <p>{randomPokemon.name}</p>
                //     <p>hp: {randomPokemon.hp}</p>
                //     <img src={randomPokemon.sprites.front} alt={""} />
                //     <br />
                //     <button className={css.catchit} onClick={handleCatch}>Catch It!</button>
                //     <br />
                //     <button className={css.runaway}onClick={handleRun}>Run Away!</button>
                //     <div>
                //         { wasClicked ?
                //             <div>
                //                 {couldYouRun ? <p>You Ran Away!</p> : <p>You couldn't escape!</p>}
                //             </div>
                //             : null
                //         }
                //     </div>
                // </div>
                <div>
                    <button onClick={() => {navigate("/WildEncounter")}}> Find Wild Pokemon </button>
                    <br/>
                    <button onClick={() => {navigate("/Bag")}}> Bag </button>
                </div>
                
            ) : null}
            <div>
                {pokemonCaught ? (
                    <h1>You caught the Pokemon!</h1>
                ) : null}
            </div>
            <div>
                {pokemonRan ? (
                    <h1>The wild Pokemon ran away!</h1>
                ) : null}
            </div>
            <div>
                {triedToRun ? (
                    <h3>Pokemon tried to run! but couldn't escape!</h3>
                ) : null}
            </div>
            </div>
        </div>
    )
}

export default WildPokemon