import { useState } from 'react';
import { pageData } from './Data/data.js';
import CardContainer from './components/CardContainer.jsx';
import Container from './components/Container.jsx';
import DiscordHeader from './components/DiscordHeader.jsx';
import FooterBig from './components/FooterBig.jsx';
import FooterMini from './components/FooterMini.jsx';
import GifBackground1 from './components/GifBackground1.jsx';
import GifSection2 from './components/GifSection2.jsx';
import GifSection3 from './components/GifSection3.jsx';
import ScrollingBanner from './components/scrollingBanner.jsx';
import Header from './components/Header.jsx';
import './App.css';

function App() {
	return (
		<div>
			<DiscordHeader data={pageData.discordHeader} />

			<Header data={pageData.Header} />

			<GifBackground1 data={pageData.gifvar1} />

			<CardContainer
				data={pageData.CardsRight}
				data2={pageData.CardsLeft}
				data3={pageData.gifvar2}
				data4={pageData.scrollingBannerData}
			/>

			{/* <ScrollingBanner data={pageData.scrollingBannerData} /> */}

			{/* <GifSection2 data={pageData.gifvar2} /> */}

			<FooterMini data={pageData.FooterMini} />

			<GifSection3 data={pageData.gifvar3} />

			{/* <SocialNetworks data={pageData.socialNetworks} /> */}

			<FooterBig data={pageData.FooterBig} data2={pageData.socialNetworks} />

			<Container data={pageData.container} />
		</div>
	);
}

// function App() {
// 	return (
// 		<>
// 			<div className='componentss'>
// 				<Card data={pageData.CardsSection}> </Card>
// 				{/* <Container />
// 				<DiscordHeader />
// 				<FooterBig />
// 				<FooterMini />
// 				<GifBackground1 />
// 				<GifSection2 />
// 				<Header />
// 				<SocialNetworks /> */}
// 			</div>
// 		</>
// 	);
// }

export default App;
