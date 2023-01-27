import LandingHero from '../components/landing/LandingHero';
import CardLayout from '../components/utils/Card';
import { BsHandThumbsUp } from 'react-icons/bs';
import { openingCards, reasons, services } from '../data/data';
import WhyUs from '../components/whyUs/WhyUs';

import CallUsToday from '../components/utils/CallUsToday';
import Awards from '../components/awards/Awards';
import ImageCarousel from '../components/utils/ImageCarousel';
import CarouselContainer from '../components/layout/Carousel';

export default function Home() {

	return (
		<div className='grid  gap-16'>
			<LandingHero />
			<CardLayout data={openingCards} />
			<Awards />
			<WhyUs data={reasons} />
			<CallUsToday />
		<ImageCarousel />
		</div>
	);
}
