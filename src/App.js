import React from 'react'
import './App.css'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import PokemonList from './containers/PokemonList'
import Pokemon from './containers/Pokemon'

function App() {
	return (
		<>
			<nav>
				<NavLink to={'/'}>Search</NavLink>
			</nav>
			<Switch>
				<Route exact path={'/'} component={PokemonList} />
				<Route path={'/pokemon/:pokemon'} component={Pokemon} />
				<Redirect to={'/'} />
			</Switch>
		</>
	)
}

export default App
