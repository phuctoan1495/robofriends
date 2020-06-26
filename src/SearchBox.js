import React from 'react';

const SeachBox = ({ searchChange }) => {
	return (
		<input type='search' 
		placeholder='Search Robots' 
		onChange={searchChange}
		/>
	);
}

export default SeachBox;