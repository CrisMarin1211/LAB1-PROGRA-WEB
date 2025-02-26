import React from 'react';
import './GifSection2s.css';

const GifSection2 = ({ data }) => {
	return (
		<div className='gif-section2'>
			<img src={data.videobackground} className='gif-section' alt='GIF animado' />
		</div>
	);
};

export default GifSection2;
