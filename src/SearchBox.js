import React from 'react';

const SeachBox = ({searchField, searchChange}) => {
	return (
		<input type='seach' 
		placeholder='Search Robot' 
		onChange={searchChange}/>
	);
}

export default SeachBox;