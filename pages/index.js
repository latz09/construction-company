import LandingHero from '../components/landing/LandingHero';
import CardLayout from '../components/utils/Card';
import { BsHandThumbsUp } from 'react-icons/bs';
import { openingCards, reasons, services } from '../data/data';
import WhyUs from '../components/whyUs/WhyUs';
import ServicesCard from '../components/cards/ServicesLayout';
import CallUsToday from '../components/utils/CallUsToday';

export default function Home() {

	return (
		<div className='grid  gap-16'>
			<LandingHero />
			<CardLayout data={openingCards} />
			<WhyUs data={reasons} />
			<ServicesCard data={services}/>
			<CallUsToday />
		</div>
	);
}
