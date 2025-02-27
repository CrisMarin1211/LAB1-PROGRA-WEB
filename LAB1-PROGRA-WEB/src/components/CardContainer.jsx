import React from 'react';
import CardRights from './CardRight';
import './CardRights.css';
import CardsLeft from './CardsLeft';
import './CardsLefts.css';
import './CardContainers.css';
import './GifSection2s.css';

import ScrollingBanner from './scrollingBanner';
import './ScrollingBanners.css';
import GifSection2 from './GifSection2';

const CardContainer = ({ data, data2, data3, data4 }) => {
	return (
		<div className='cards-container'>
			<CardsLeft data={data2.card1} />
			<CardRights data={data.card2} />
			<CardsLeft data={data2.card3} />

			<div>
				<ScrollingBanner data={data4} />
			</div>

			<CardRights data={data.card4} />
			<div>
				<GifSection2 data={data3} />
			</div>
			<CardsLeft data={data2.card5} />

			<CardRights data={data.card6} />
		</div>
	);
};

export default CardContainer;
