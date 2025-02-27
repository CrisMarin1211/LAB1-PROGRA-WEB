import React from 'react';
import './ScrollingBanners.css';

const ScrollingBanner = ({ data }) => {
	return (
		<div className='scrolling-banners' style={{ backgroundImage: `url(${data.imgbackgraund})` }}>
			<div className='scrolling-wrapper'>
				<div className='scrolling-content'>
					{[data.text1, data.text2, data.text3, data.text4].map((text, index) => (
						<div key={index} className='scrolling-item'>
							<span>{text}</span>
							<img src={data.logoimg} alt='Logo' className='logo' />
						</div>
					))}
					{/* Duplicamos el contenido para la animación infinita */}
					{[data.text1, data.text2, data.text3, data.text4].map((text, index) => (
						<div key={`dup-${index}`} className='scrolling-item'>
							<span>{text}</span>
							<img src={data.logoimg} alt='Logo' className='logo' />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ScrollingBanner;
