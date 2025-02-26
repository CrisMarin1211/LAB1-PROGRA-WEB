import React from 'react';
import './Cards.css';

const Card = ({ data }) => {
	return (
		<div className='card'>
			<video src={data.videobackground} className='card-video' autoPlay loop muted></video>
			<h3 className='card-title'>{data.title}</h3>
			<p className='card-description'>{data.description}</p>
			<button className='card-button'>Upload Emoji</button>
		</div>
	);
};

export default Card;
