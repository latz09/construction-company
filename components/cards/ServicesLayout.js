import { MdPlumbing } from 'react-icons/md';
import { FaSink } from 'react-icons/fa';
import { GiWaterDrop, GiBathtub, GiPlunger } from 'react-icons/gi';
import { IoIosConstruct } from 'react-icons/io';
import { motion } from 'framer-motion';
import ButtonLink from '../utils/ButtonLink';

const ServicesLayout = ({ data }) => {
	return (
		<div className='grid place-items-center gap-12 md:gap-16'>
			<span className='text-center text-3xl lg:text-6xl text-dark/70 font-bold'>
				Services
			</span>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-16'>
				{data.map((service, index) => (
					<motion.div
						key={service.id}
						className=' h-full w-full p-8 shadow-lg shadow-light2/60 bg-light1 rounded'
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.64, delay: 0.15 * index }}
					>
						<ServiceCard title={service.title} imageToUse={service.imageType} />
					</motion.div>
				))}
			</div>
			<motion.div
				className=''
				initial={{ opacity: 0.8, scale: 0.97 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.1, repeat: Infinity, repeatType: 'mirror' }}
			>
				<ButtonLink title='Explore all of our services' color='orange' />
			</motion.div>
		</div>
	);
};

export default ServicesLayout;

const ServiceCard = ({ title, imageToUse }) => {
	console.log(imageToUse);
	return (
		// <div>test</div>
		<div className='flex flex-col place-items-center  h-full gap-6 '>
			<ImageToUse image={imageToUse} />
			<div className='text-2xl lg:text-3xl font-bold text-orange text-center'>
				{title}
			</div>
		</div>
	);
};

const ImageToUse = ({ image }) => {
	return (
		<>
			<motion.div
				className='text-7xl lg:text-8xl text-dark/80 '
				initial={{ scale: 0.93 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror' }}
			>
				{image === 'plunger' && <GiPlunger />}
				{image === 'sink' && <FaSink />}
				{image === 'wrench' && <MdPlumbing />}
				{image === 'construction' && <IoIosConstruct />}
				{image === 'bathtub' && <GiBathtub />}
				{image === 'water-drop' && <GiWaterDrop />}
			</motion.div>
		</>
	);
};
