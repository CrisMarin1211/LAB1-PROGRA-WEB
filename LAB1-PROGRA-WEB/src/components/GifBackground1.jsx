import React from 'react';
import './GifBackground1s.css';

const GifBackground1 = ({ data }) => {
	return (
		<div className='gif-background1'>
			<img src={data.videobackground} className='card-video' alt='GIF animado' />
		</div>
	);
};

export default GifBackground1;
