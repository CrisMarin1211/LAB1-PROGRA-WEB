import React from 'react';
import './FooterBigs.css';
import SocialNetworks from './SocialNetworks';

const FooterBig = ({ data, data2 }) => {
	return (
		<footer className='footer-big'>
			<div className='footer-container'>
				{/* LOGO Y IDIOMA */}
				<div className='footer-left'>
					<img src={data.logoimg} alt='Discord Logo' />
					<div className='language-selector'>
						<select>
							<option>English</option>
							<option>Español</option>
							<option>Français</option>
						</select>
					</div>
					<SocialNetworks data={data2} />
				</div>
				{/* CATEGORÍAS */}
				<div className='footer-links'>
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
			</div>
		</footer>
	);
};

export default FooterBig;
