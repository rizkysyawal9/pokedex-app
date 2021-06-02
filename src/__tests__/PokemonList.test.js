import React from 'react'
import PokemonList from 'components/pages/PokemonList'
import PokemonContext from 'context/pokemon/pokemonContext'
import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

beforeEach(() => {
  jest.resetAllMocks()
})
afterEach(cleanup)

function mockFunction() {
  const original = jest.requireActual('react-router-dom')
  return {
    ...original,
    useLocation: jest.fn().mockReturnValue({
      pathname: '/another-route',
      search: '',
      hash: '',
      state: null,
      key: '',
    }),
  }
}
jest.mock('react-router-dom', () => mockFunction())

function renderPokemonList(contextValue) {
  return render(
    <PokemonContext.Provider value={contextValue}>
      <Router>
        <PokemonList pokemons={contextValue.pokemons} />
      </Router>
    </PokemonContext.Provider>
  )
}

describe('PokemonList', () => {
  it('should render component with a list of pokemons', () => {
    const contextValue = {
      pokemons: [
        {
          id: 1,
          name: 'Bulbasaur',
          sprite: '#',
        },
      ],
      getOwnedNumberOfPokemon: jest.fn(),
    }
    renderPokemonList(contextValue)
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
  })
  it('should render the number of owned pokemon', () => {
    const contextValue = {
      pokemons: [
        {
          id: 1,
          name: 'Bulbasaur',
          sprite: '#',
        },
      ],
      getOwnedNumberOfPokemon() {
        return this.pokemons.filter((pokemon) => {
          return pokemon.id === 1
        }).length
      },
    }
    renderPokemonList(contextValue)
    expect(screen.getByTestId('owned').textContent).toEqual('Owned: 1')
  })
})
