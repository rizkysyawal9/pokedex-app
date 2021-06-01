/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import PokemonDetail from 'components/pages/PokemonDetail.js'
import PokemonList from 'components/pages/PokemonList.js'
import PokemonStorage from 'components/pages/PokemonStorage.js'
import Navbar from 'components/common/Navbar.js'
import { useEffect, useContext, useState } from 'react'
import PokemonContext from 'context/pokemon/pokemonContext'
import MyPokemon from 'components/pages/MyPokemon'
import NotFound from 'components/pages/NotFound'
import Modal from 'components/common/Modal'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Content } from 'assets/cssComponent/global'
import 'assets/css/transition.css'
import React from 'react'

function App() {
  const pokemonContext = useContext(PokemonContext)
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    pokemonContext.getMyPokemons().then(() => {
      pokemonContext.getPokemons().then(() => {
        setLoading(false)
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let location = useLocation()
  const nodeRef = React.useRef(null)
  return (
    <div className="App">
      <Modal />
      <Navbar />
      <Content>
        <TransitionGroup>
          <CSSTransition
            timeout={250}
            classNames="page"
            key={location.key}
            unmountOnExit
          >
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() => (
                  <PokemonList
                    pokemons={pokemonContext.pokemons}
                    loading={isLoading}
                  />
                )}
              />
              <Route
                exact
                path="/pokemon/:id"
                render={(props) => <PokemonDetail {...props} />}
              />
              <Route
                path="/bill-pc"
                render={() => (
                  <PokemonStorage pokemons={pokemonContext.myPokemons} />
                )}
              />
              <Route path="/my-pokemon" render={() => <MyPokemon />} />
              <Route path="*" render={() => <NotFound />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </div>
  )
}

export default App
