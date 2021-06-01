import React, { useEffect, useContext } from 'react'
import PokemonContext from 'context/pokemon/pokemonContext'
import SinglePokemon from 'components/common/SinglePokemon'
import LoadingScreen from 'components/common/LoadingScreen'

export default function PokemonDetail(props) {
  const { match } = props
  const { params } = match
  const { id } = params

  const pokemonContext = useContext(PokemonContext)

  useEffect(() => {
    pokemonContext.getPokemonById(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { name, sprite } = pokemonContext.pokemon
  if (name != null && sprite != null) {
    return <SinglePokemon data={pokemonContext.pokemon} />
  } else {
    return <LoadingScreen />
  }
}
