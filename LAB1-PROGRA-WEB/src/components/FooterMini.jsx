import React from 'react';
import './FooterMinis.css';

const FooterMini = ({ data }) => {
	return (
		<footer className='footer-mini'>
			<div className='footer-containermini'>
				<h2 className='footer-title'>{data.title}</h2>
				<h2 className='footer-subtitle'>{data.text1}</h2>
				<div className='button-container'>
					<button className='download-button'>
						<span className='download-icon'>⬇</span> {data.button[0].name}
					</button>
				</div>
			</div>
		</footer>
	);
};

export default FooterMini;
