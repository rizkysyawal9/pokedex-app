import React from 'react'
import Card from 'components/common/Card'
import { Link } from 'react-router-dom'
import pokeball from 'assets/img/pokeball.png'
import { useHistory } from 'react-router-dom'
import { PrimaryButton, Flex, FullPage } from 'assets/cssComponent/global'

export default function PokemonList({ pokemons }) {
  const { push } = useHistory()
  if (pokemons.length > 0) {
    return (
      <div>
        <Flex>
          {pokemons.map((pokemon, index) => (
            <div key={index}>
              <Link
                to={{
                  pathname: 'my-pokemon',
                  state: pokemon,
                }}
                className="links"
              >
                <Card
                  id={pokemon.name}
                  title={pokemon.name}
                  image={pokemon.sprite}
                  isMyPokemon={true}
                />
              </Link>
            </div>
          ))}
        </Flex>
      </div>
    )
  } else {
    return (
      <FullPage>
        <img src={pokeball} alt="pokeball" style={{ maxWidth: '200px' }} />
        <p>Anda belum memiliki pokemon</p>
        <PrimaryButton onClick={() => push('/')}>Kembali</PrimaryButton>
      </FullPage>
    )
  }
}
