import { GET_POKEMON, MY_POKEMONS, SEARCH_POKEMON } from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      }
    case SEARCH_POKEMON:
      console.log(action.payload)
      return {
        ...state,
        pokemon: action.payload,
      }
    case MY_POKEMONS:
      console.log(action.payload)
      return {
        ...state,
        myPokemons: action.payload,
      }

    default:
      return {
        ...state,
      }
  }
}
