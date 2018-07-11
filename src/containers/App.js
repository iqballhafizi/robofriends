import React, {Component} from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox'

class App extends Component  {
	constructor(){
		super();
		this.state = {
			robotElement: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json())
		.then (user => this.setState({robotElement: user}));
	}

	render(){
		const {robotElement, searchfield} = this.state;
		const filteredRobots = robotElement.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		if(!robots.length){
			return <h1> Loading </h1>
		}
		else {
			return (
				<div className='tc'>
					<h1> Robo Friends </h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList robots = {filteredRobots} />
					</Scroll>
				</div>
			
			);
		}

	}
}


export default App;