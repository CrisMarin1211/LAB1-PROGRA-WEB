import { useState } from 'react';
import { pageData } from './Data/data.js';
import Card from './components/Card.jsx';
import Container from './components/Container.jsx';
import DiscordHeader from './components/DiscordHeader.jsx';
import FooterBig from './components/FooterBig.jsx';
import FooterMini from './components/FooterMini.jsx';
// import GifBackground1 from './components/GifBackground1.jsx';
// import GifSection2 from './components/GifSection2.jsx';
import Header from './components/Header.jsx';
import SocialNetworks from './components/SocialNetworks.jsx';
import './App.css';

function App() {
	const [cards, setCards] = useState(pageData.CardsSection.CardsInfo);

	return (
		<div>
			<DiscordHeader data={pageData.discordHeader} />

			<Header data={pageData.Header} />

			{/* <GifBackground1 data={pageData.gifvar1} /> */}

			{cards.map((card, index) => (
				<Card key={index} data={card} />
			))}

			{/* <GifSection2 data={pageData.gifvar2} /> */}

			<FooterMini data={pageData.FooterMini} />

			<SocialNetworks data={pageData.socialNetworks} />

			<FooterBig data={pageData.FooterBig} />

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
