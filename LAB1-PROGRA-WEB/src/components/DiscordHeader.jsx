import React from 'react';
import './DiscordHeaders.css';

const DiscordHeaders = ({ data }) => {
	return (
		<div className='discordheaders'>
			<img src={data.logo} alt='Discord Logo' className='discord-logo' />

			<nav className='discord-nav'>
				<ul>
					{data.navigation.map((item, index) => (
						<li key={index}>{item.name}</li>
					))}
				</ul>
			</nav>

			<div className='button-discordheaders'>
				<button>{data.button[0].name}</button>
			</div>
		</div>
	);
};

export default DiscordHeaders;
