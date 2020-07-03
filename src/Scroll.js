import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{ overflow: 'scroll', 
						border: '1px solid black',
						height: '800px',
						margin: '20px 0 0 0' }}>
			{props.children}
		</div>
	);
}

export default Scroll;