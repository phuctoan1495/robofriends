import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	};

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
		// const filterRobot = this.state.robots.filter(robots =>{
		// 	return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		// });
		// console.log(event.target.value);
	};

	render () {
		const filterRobot = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		if (this.state.robots.length === 0){
			return <h1 className="tc">Loading</h1>
		}else{
			return (
				<div className="tc">
					<h1>RoboFriends</h1>
					<SearchBox searchChange={ this.onSearchChange }/>
					<Scroll>
				 		<CardList robots={filterRobot} />
				 	</Scroll>
				</div>
			);
		}
	};
}

export default App;