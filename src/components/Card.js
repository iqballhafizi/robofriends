import React from 'react';

const Card = ({id,name,email}) => {
	
	return(
	<div className=' tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2'>
		<img alt='Robotos' src={`https://robohash.org/${id}`} />
		<div>
			<h2> {name}</h2>
			<p>{email}</p>
		</div>
	</div>
	);
	
}

export default Card