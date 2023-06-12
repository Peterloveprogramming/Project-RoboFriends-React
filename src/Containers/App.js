import React, {Component} from 'react';
import CardList from '../Componenets/CardList';
import {robots} from '../Componenets/robots';
import SearchBox from '../Componenets/SearchBox'
import './App.css';
import Scroll from '../Componenets/Scroll';
import ErrorBoundry from '../Componenets/ErrorBoundry';

class App extends Component {
	constructor (){
		super()
		this.state ={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount(){
		this.setState({robots:robots})
	}

	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value})
	}

	render () {
		const {robots, searchfield} = this.state
		const filterRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
	return (
		<div className ="tc">
			<h1 className ="f1">Robofriends</h1>

				<SearchBox searchChange ={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots = {filterRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
		)
	}
}

export default App;
