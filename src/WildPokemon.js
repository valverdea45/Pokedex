import React, { useState, useEffect } from "react";

function WildPokemon({ allPokemon, uncaughtPokemon, setAllPokemon }) {

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
    const [showGame, setShowGame] = useState(true)
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
            setShowGame(true)
        }, 1700)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [showGame])

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

        console.log("was it caught?", pokeball >= chanceToCatch)


        if (pokeball >= chanceToCatch) {
            return onCatch(randomPokemon)
        } else {
            const chanceOfEscape = getRandomInteger(0, 5)
            console.log("chance to run away", chanceOfEscape)
            if (chanceOfEscape >= 1) {
                setPokemonIndex(getRandomInteger(0, uncaughtPokemon.length - 1))
                setPokemonRan(true)
                setShowGame(false)
                console.log("the Pokemon escaped!")
            } else {
                setTriedToRun(true)
                console.log("The Pokemon could not escape!")
            }

        }
    }

    function onCatch(randomPokemon) {
        randomPokemon.caught = true
        setPokemonCaught(true)
        setShowGame(false)

        fetch(`http://localhost:4000/pokemon/${randomPokemon.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                caught: true
            })
        })
            .then((data) => data.json())
            .then((newPokemon) => handleNewPokemon(newPokemon))
    }

    function handleNewPokemon(newPokemon) {
        const newArrayOfUpdatedPokemon = allPokemon.filter((individualPokemon) => {
            if (individualPokemon.id === newPokemon.id) {
                return newPokemon
            } else {
                return individualPokemon
            }
        })
        setAllPokemon(newArrayOfUpdatedPokemon)
    }
    // when clicking the run away button gives the user to run
    // gets random integer from 0-8 and if its greater than or equal to 7 they load the next pokemon
    function handleRun() {
        const chanceToRunAway = getRandomInteger(0, 8)
        setWasClicked(true)
        console.log("could you run?", chanceToRunAway >= 7)
        if (chanceToRunAway >= 4) {
            setPokemonIndex(getRandomInteger(0, uncaughtPokemon.length - 1))
            setCouldYouRun(true)
        }
    }

    // in the JSX bellow the default values for the conditionals are as follows
    // showGame = true
    // pokemoncaught = false
    // pokemonRan = false
    // triedToRun =  false
    // depending on the results of handleCatch these boolean values will change but the useEffect functions above will reset to these default boolean values

    return (
        <div>
            {showGame ? (
                <div>
                    <h2>{`Woah a wild ${randomPokemon.name} appeared!`}</h2>
                    <p>{randomPokemon.name}</p>
                    <p>hp: {randomPokemon.hp}</p>
                    <img src={randomPokemon.sprites.front} alt={""} />
                    <br />
                    <button onClick={handleCatch}>Catch It!</button>
                    <br />
                    <button onClick={handleRun}>Run Away!</button>
                    <div>
                        { wasClicked ?
                            <div>
                                {couldYouRun ? <p>You Ran Away!</p> : <p>You couldn't run!</p>}
                            </div>
                            : null
                        }
                    </div>
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
    )
}

export default WildPokemon