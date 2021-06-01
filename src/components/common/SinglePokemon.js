import React, { useContext } from 'react'
import {
  PrimaryButton,
  Title,
  Badge,
  FlexGroup,
  CardGroup,
  FlexItem,
  TextCenter,
  DangerButton,
} from 'assets/cssComponent/global'
import PokemonContext from 'context/pokemon/pokemonContext'

export default function SinglePokemon({ data, isMyPokemon }) {
  const { name, types, sprite, height, weight, stats } = data
  const pokemonContext = useContext(PokemonContext)
  return (
    <div>
      <Title>{name}</Title>
      <FlexGroup>
        {types.map((item, index) => (
          <Badge type="true" key={index}>
            {item.type.name}
          </Badge>
        ))}
      </FlexGroup>
      <TextCenter>
        <img src={sprite} alt="im" style={{ maxWidth: '200px' }} />
      </TextCenter>
      <FlexGroup centered>
        <Badge width="50%">
          Height: <br></br> {height / 10} m
        </Badge>
        <Badge width="50%" last>
          Weight: <br></br>
          {weight / 10} kg
        </Badge>
      </FlexGroup>
      <CardGroup bgColor="#f5f5f5">
        <h3 className="title">Base Stats</h3>
        <FlexGroup wrap="true">
          {stats.map((item, index) => (
            <FlexItem width="50%" capitalize key={index}>
              {item.stat.name}: <br></br> {item.base_stat}
            </FlexItem>
          ))}
        </FlexGroup>
      </CardGroup>
      <br></br>
      {isMyPokemon ? (
        <DangerButton
          w100
          onClick={async () => await pokemonContext.releasePokemon(name)}
        >
          Lepaskan Pokemon
        </DangerButton>
      ) : (
        <PrimaryButton
          w100
          onClick={async () => await pokemonContext.catchPokemon()}
        >
          Tangkap Pokemon
        </PrimaryButton>
      )}
    </div>
  )
}
