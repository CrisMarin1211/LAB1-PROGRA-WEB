import React from 'react';
import './FooterMinis.css';

const FooterMini = ({ data }) => {
	return (
		<footer className='footer-mini'>
			<div className='footer-container'>
				<h2>{data.title}</h2>
				<h2>{data.text1}</h2>
				<div className='button-container'>
					<button>{data.button[0].name}</button>
				</div>
			</div>
		</footer>
	);
};

export default FooterMini;
