import React from 'react'
import PokemonDetail from 'components/pages/PokemonDetail'
import PokemonContext from 'context/pokemon/pokemonContext'
import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

beforeEach(() => {
  jest.resetAllMocks()
})
afterEach(cleanup)

function renderPokemonList(contextValue) {
  return render(
    <PokemonContext.Provider value={contextValue}>
      <PokemonDetail
        match={{ params: { id: 1 }, isExact: true, path: '', url: '' }}
      />
    </PokemonContext.Provider>
  )
}

describe('PokemonList', () => {
  it('should render with a loading screen', () => {
    const contextValue = {
      pokemon: {},
      getPokemonById: jest.fn(),
    }
    renderPokemonList(contextValue)
    expect(screen.getByText('Sedang Mengambil Data...')).toBeInTheDocument()
  })
  it('should render with a single pokemon state', () => {
    const contextValue = {
      pokemon: {
        name: 'Bulbasaur',
        types: [{ type: { name: 'poison' } }, { type: { name: 'grass' } }],
        sprite: 'https://image.com',
        height: 10,
        weight: 20,
        stats: [
          { stat: { name: 'hp' }, base_stat: 100 },
          { stat: { name: 'atk' }, base_stat: 100 },
        ],
      },
      getPokemonById: jest.fn(),
    }
    renderPokemonList(contextValue)
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
  })
})
