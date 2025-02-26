import React from 'react';
import './FooterBigs.css';

const FooterBig = ({ data }) => {
	return (
		<footer className='footer-big'>
			<div className='footer-container'>
				{Object.entries(data.categories).map(([category, items], index) => (
					<div key={index} className='footer-category'>
						<h3>{category}</h3>
						<ul>
							{items.map((item, idx) => (
								<li key={idx}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
};

export default FooterBig;
