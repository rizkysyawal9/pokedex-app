import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import SinglePokemon from 'components/common/SinglePokemon'

beforeEach(() => {
  jest.resetAllMocks()
})
afterEach(cleanup)

function renderPokemonList(data, isMyPokemon) {
  return render(<SinglePokemon data={data} isMyPokemon={isMyPokemon} />)
}

const dataPokemon = {
  name: 'Bulbasaur',
  types: [{ type: { name: 'poison' } }, { type: { name: 'grass' } }],
  sprite: 'https://image.com',
  height: 10,
  weight: 20,
  stats: [
    { stat: { name: 'hp' }, base_stat: 100 },
    { stat: { name: 'atk' }, base_stat: 100 },
  ],
}
describe('Single Pokemon', () => {
  it('should render a pokemon', () => {
    renderPokemonList(dataPokemon)
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
  })
  it('should render a catch button when prop MyPokemon is false', () => {
    renderPokemonList(dataPokemon, false)
    expect(screen.getByText('Tangkap Pokemon')).toBeInTheDocument()
  })
  it('should render a release button when prop MyPokemon is true', () => {
    renderPokemonList(dataPokemon, true)
    expect(screen.getByText('Lepaskan Pokemon')).toBeInTheDocument()
  })
})
