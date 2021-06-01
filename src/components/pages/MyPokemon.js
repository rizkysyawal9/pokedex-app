import React from 'react'
import { useLocation } from 'react-router-dom'
import SinglePokemon from 'components/common/SinglePokemon'

export default function MyPokemon() {
  const { state } = useLocation()
  return <SinglePokemon data={state} isMyPokemon={true} />
}
