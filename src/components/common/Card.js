import React, { useContext, useState, useEffect } from 'react'
import { CardGroup } from 'assets/cssComponent/global'
import PokemonContext from 'context/pokemon/pokemonContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Card({ pokeId, title, image, isMyPokemon }) {
  const pokemonContext = useContext(PokemonContext)
  const [owned, setOwned] = useState(0)
  useEffect(() => {
    if (!isMyPokemon) {
      let number = pokemonContext.getOwnedNumberOfPokemon(pokeId)
      setOwned(number)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <CardGroup primary>
      <LazyLoadImage
        src={image}
        alt="pokemon"
        blur
        height="200px"
        width="200px"
      ></LazyLoadImage>
      <h3 className="title">{title}</h3>
      {!isMyPokemon ? <div>Owned: {owned}</div> : ''}
    </CardGroup>
  )
}
