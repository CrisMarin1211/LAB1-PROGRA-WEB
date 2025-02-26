import React from 'react';
import './SocialNetworks1.css';

const SocialNetworks = ({ data }) => {
	return (
		<div className='social-networks'>
			<img src={data.twitterImg} alt='Twitter' />
			<img src={data.intagramImg} alt='Instagram' />
			<img src={data.facebookImg} alt='Facebook' />
			<img src={data.youtubeImg} alt='YouTube' />
			<img src={data.tiktokImg} alt='TikTok' />
		</div>
	);
};

export default SocialNetworks;
