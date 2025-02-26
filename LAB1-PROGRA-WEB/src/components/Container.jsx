import React from 'react';
import './Containers.css';

const Container = ({ data }) => {
	return (
		<div className='container'>
			<img src={data.logo} alt='Discord Logo' />

			<div className='button-container'>
				<button>{data.button[0].name}</button>
			</div>
		</div>
	);
};

export default Container;
