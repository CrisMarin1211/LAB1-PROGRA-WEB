import React from 'react';
import './Headers.css';

const Header = ({ data }) => {
	return (
		<div className='header'>
			<img src={data.img} alt='Header Image' className='header-img' />
			<h3 className='header-title'>{data.title}</h3>
			<p className='header-description'>{data.description}</p>
			<div className='header-buttons'>
				<button>{data.buttons[0].name}</button>
				<button>{data.buttons[1].name}</button>
			</div>
		</div>
	);
};

export default Header;
