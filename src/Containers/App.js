import React, {useState,useEffect} from 'react';
import CardList from '../Componenets/CardList';
import {robotsList} from '../Componenets/robots';
import SearchBox from '../Componenets/SearchBox'
import './App.css';
import Scroll from '../Componenets/Scroll';
import ErrorBoundry from '../Componenets/ErrorBoundry';

function App() {
/*	constructor (){
		super()
		this.state ={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount(){
		this.setState({robots:robots})
	}*/

	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

 useEffect(() => {
    setRobots(robotsList)
   
  },[]);

console.log(robots,searchfield)
/*	const {robots, searchfield} = this.state*/
	const filterRobots = robots.filter(robot=>{
	return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
	return (
		<div className ="tc">
			<h1 className ="f1">Robofriends</h1>

				<SearchBox searchChange ={onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots = {filterRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
		)
	
}

export default App;
