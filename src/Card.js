import React from 'react';

const Card = (props) =>{
	return(
		<div className ='bg-light-green dib br3 ma2 pa3 grow' >
			<img alt='anh' src= {'https://robohash.org/'+ props.id + '?200x200'} />
			<div className='tc'>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;