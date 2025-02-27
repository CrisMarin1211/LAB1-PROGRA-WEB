import React from 'react';
import './GifSection3s.css';

const GifSection3 = ({ data }) => {
	return (
		<div className='gif-section3'>
			<img src={data.gif1} className='card-video1' alt='GIF animado' />
			<img src={data.gif2} className='video2' alt='GIF animado' />
		</div>
	);
};

export default GifSection3;
