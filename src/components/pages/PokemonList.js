import React from 'react'

import Card from 'components/common/Card'
import { Link } from 'react-router-dom'
import { Flex } from 'assets/cssComponent/global'
import LoadingScreen from 'components/common/LoadingScreen'

export default function PokemonList({ pokemons, loading }) {
  if (loading) {
    return <LoadingScreen />
  } else {
    return (
      <Flex>
        {pokemons.map((pokemon, index) => (
          <div key={index}>
            <Link
              to={{
                pathname: `/pokemon/${pokemon.id}`,
              }}
            >
              <Card
                id={pokemon.id}
                pokeId={pokemon.id}
                title={pokemon.name}
                image={pokemon.sprite}
              />
            </Link>
          </div>
        ))}
      </Flex>
    )
  }
}
