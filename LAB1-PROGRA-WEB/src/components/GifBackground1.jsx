import React from 'react';
import './GifBackground1s.css';

const GifBackground1 = ({ data }) => {
	return (
		<div className='gif-background1'>
			<img src={data.gifbackground} className='card-gif' alt='GIF animado' />
		</div>
	);
};

export default GifBackground1;
