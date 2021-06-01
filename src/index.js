import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PokemonState from 'context/pokemon/pokemonState'
import ActionState from 'context/action/actionState'
import ScrollToTop from 'components/common/ScrollToTop'
// import
const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ScrollToTop />
      <ActionState>
        <PokemonState>
          <App />
        </PokemonState>
      </ActionState>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
