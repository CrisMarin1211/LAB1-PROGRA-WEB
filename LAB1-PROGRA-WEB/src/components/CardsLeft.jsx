import React from 'react';
import './CardsLefts.css';

const CardsLeft = ({ data }) => {
	return (
		<div className='cards-lefts'>
			<video src={data.videobackground} className='card-video' autoPlay loop muted></video>
			<div className='card-content'>
				<h3 className='card-title'>{data.title}</h3>
				<p className='card-description'>{data.description}</p>
			</div>
		</div>
	);
};

export default CardsLeft;
