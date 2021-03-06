import React, { useContext, useReducer } from 'react'
import Dexie from 'dexie'
import axios from 'axios'
import { GET_POKEMON, SEARCH_POKEMON, MY_POKEMONS } from '../types'
import PokemonReducer from './pokemonReducer'
import PokemonContext from './pokemonContext'
import ActionContext from '../action/actionContext'
import { useHistory } from 'react-router-dom'

//important links
const pokeApi = 'https://pokeapi.co/api/v2/pokemon/'
export const pokeImageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'

const PokemonState = (props) => {
  const history = useHistory()
  const { setModal } = useContext(ActionContext)
  const initialState = {
    pokemons: [],
    pokemon: {},
    myPokemons: [],
  }

  //state of application
  const [state, dispatch] = useReducer(PokemonReducer, initialState)

  //function to get pokemon
  const getPokemons = async (limit) => {
    try {
      const pokemons = await axios.get(pokeApi + '?limit=' + limit)
      let payload = pokemons.data.results.map((pokemon) => {
        let pokemonId = getPokemonId(pokemon.url)
        let pokemonImage = getPokemonImage(pokemon.url)
        return {
          id: pokemonId,
          name: pokemon.name,
          sprite: pokemonImage,
        }
      })
      dispatch({
        type: GET_POKEMON,
        payload: payload,
      })
    } catch (err) {
      console.log(err)
    }
  }

  //get the id of the pokemo
  const getPokemonId = (pokemonUrl) => {
    let pokeUrl = pokemonUrl.match(/pokemon\/[0-9]+/)
    let pokeId = pokeUrl[0].split('/')[1]
    return parseInt(pokeId)
  }
  //get pokemon image
  const getPokemonImage = (pokemonUrl) => {
    let pokeId = getPokemonId(pokemonUrl)
    let imageUrl = `${pokeImageUrl}/${pokeId}.png`
    return imageUrl
  }
  //function to get pokemon by id
  const getPokemonById = async (id) => {
    try {
      const pokemon = await axios.get(pokeApi + id)
      let payload = {
        ...pokemon.data,
        sprite: `${pokeImageUrl}/${id}.png`,
      }
      dispatch({
        type: SEARCH_POKEMON,
        payload: payload,
      })
    } catch (err) {
      setModal(true, 'redirect', 'Oops...', err.message)
    }
  }

  //function to get my pokemons
  const getMyPokemons = async () => {
    let myPokemons = await db.pokemons.toArray()
    dispatch({
      type: MY_POKEMONS,
      payload: myPokemons,
    })
  }

  //function to catch a pokemon
  const catchPokemon = async () => {
    return new Promise((resolve) => {
      setModal(true, 'loading', '', 'Sedang menangkap pokemon...')
      setTimeout(function () {
        let successRate = Math.random()
        if (successRate > 0.5) {
          // savePokemon()
          setModal(
            true,
            'confirmation',
            'Yuhu!',
            'Berhasil Menangkap Pokemon! Berikan nama pokemonmu'
          )
        } else {
          setModal(true, 'failed', 'Yahh...', 'Gagal Menangkap Pokemon...')
          // setModal(true, 'failed', 'Gagal Menangkap Pokemon...')
        }
        resolve(successRate)
      }, 2000)
    })
  }

  //Set indexed DB, check if pokemon idb is created or not
  const db = new Dexie('myPokemons')
  db.version(2).stores({
    pokemons: 'name, id, types, height, weight, stats, sprite',
  })

  db.open().catch((err) => {
    console.log(err.stack || err)
  })

  //save pokemon to index db
  const savePokemon = async (name) => {
    setModal(true, 'loading', '', 'Sedang menyimpan Pokemon...')
    let nickname = name.toLowerCase()
    let pokemon = {
      name: nickname,
      id: state.pokemon.id,
      height: state.pokemon.height,
      weight: state.pokemon.weight,
      stats: state.pokemon.stats,
      types: state.pokemon.types,
      sprite: state.pokemon.sprite,
    }
    db.pokemons
      .where('name')
      .equals(nickname)
      .first()
      .then((result) => {
        if (result === undefined) {
          db.pokemons.add(pokemon).then(async () => {
            setModal(true, 'success', 'Yuhu!', 'Berhasil Menyimpan Pokemon!')
          })
        } else {
          setModal(
            true,
            'confirmation',
            'Hmmm...',
            `Anda sudah memberikan nama "${nickname}..."`
          )
        }
      })
      .then(() => {
        getMyPokemons()
      })
  }

  //release pokemon from index db
  const releasePokemon = async (name) => {
    db.pokemons
      .where('name')
      .equals(name)
      .delete()
      .then(() => {
        setModal(true, 'success', 'Bye Bye!', `${name} berhasil dilepaskan`)
        getMyPokemons()
        history.push('/bill-pc')
      })
      .catch((err) => {
        setModal(true, 'success', 'Hmmm...', 'Oops terjadi kesalahan')
      })
  }

  const getOwnedNumberOfPokemon = (id) => {
    return state.myPokemons.filter((pokemon) => {
      return pokemon.id === id
    }).length
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        pokemon: state.pokemon,
        modal: state.modal,
        myPokemons: state.myPokemons,
        getPokemons,
        getPokemonById,
        catchPokemon,
        getMyPokemons,
        savePokemon,
        releasePokemon,
        getOwnedNumberOfPokemon,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  )
}
export default PokemonState
