import React from 'react';
import './CardRights.css';

const CardRights = ({ data }) => {
	return (
		<div className='cards-rights'>
			<div className='card-contentrig'>
				<h3 className='card-titlerig'>{data.title}</h3>
				<p className='card-descriptionrig'>{data.description}</p>
			</div>
			<video src={data.videobackground} className='card-videorig' autoPlay loop muted></video>
		</div>
	);
};

export default CardRights;
