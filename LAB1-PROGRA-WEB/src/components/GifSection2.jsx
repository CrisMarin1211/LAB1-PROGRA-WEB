import React from 'react';
import './GifSection2s.css';

const GifSection2 = ({ data }) => {
	return (
		<div className='gif-section2'>
			<img src={data.gif11} className='card-video11' alt='GIF animado' />
			<img src={data.gif22} className='card-video2' alt='GIF animado' />
		</div>
	);
};

export default GifSection2;
