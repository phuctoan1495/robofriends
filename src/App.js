import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchField: ''
		};
	};

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
		
		// console.log(filterRobot);
	};

	render () {
		const filterRobot = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox seachChange={this.state.searchField, this.onSearchChange}/>
				<CardList robots={filterRobot} />
			</div>
		);
	};
}

export default App;