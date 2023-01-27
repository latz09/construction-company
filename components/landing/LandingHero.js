import Image from 'next/image';
import logo from '../../public/images/logo.png';
import ButtonLink from '../utils/ButtonLink';
import { motion } from 'framer-motion';

const LandingHero = () => {
	return (
		<div className=' max-w-7xl mx-auto grid gap-8 lg:gap-0 lg:grid-cols-3 place-items-center py-8 lg:py-32'>
			<motion.div
				className='px-8'
				initial={{ scale: 1, opacity: 1 }}
				animate={{ scale: .93, opacity: 0.5 }}
				transition={{ duration: 1.9, delay: 1.4 }}
			>
				<Image src={logo} alt='Good Guys Plumbing' />
			</motion.div>
			<div className='lg:col-span-2 grid gap-8 place-items-center w-full'>
				<LandingLogo />
				<div className='flex w-3/4 justify-evenly '>
					<ButtonLink title='services' color='orange' />
					<RandomButton />
				</div>
			</div>
		</div>
	);
};

export default LandingHero;

const LandingLogo = () => {
	return (
		<motion.div
			className='grid gap-2 place-items-center'
			initial={{ scale: .93, opacity: .5 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 1.9, delay: 0.7 }}
		>
			<div className='text-4xl lg:text-6xl font-semibold text-orange tracking-wider text-center'>
				Stumpy's Deck <span className='text-dark/70 italic'> Renewal, Inc.</span>
			</div>
			<span className='place-self-end text-center mx-4 text-xl lg:text-3xl text-dark/70'>
				{' '}
				The Twin Cities most respected decking company for 
				<span className='font-bold text-orange'> over two decades.</span>
			</span>
		</motion.div>
	);
};


const RandomButton = () => {
	return (
		<div className="bg-dark/70 px-4 py-3 uppercase hover:scale-110 transition duration-700 font-semibold text-lg lg:text-xl  text-white shadow-lg tracking-wider cursor-pointer">Contact</div>
	)
}