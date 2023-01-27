import { FaFaucet, FaRegClipboard } from 'react-icons/fa';
import { AiFillTool } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ImageCarousel from '../utils/ImageCarousel';

import Image from 'next/image';

const WhyUs = ({ data, images }) => {
	return (
		<div className="bg-orange/">
			<div className=' grid gap-8 max-w-7xl mx-auto mt-16 xl:pb-16 xl:border-b-2 xl:border-orange/40'>
				<h1 className='text-center text-3xl xl:text-6xl tracking-widest font-semibold text-orange uppercase opacity-80 font-seri'>
					Why the Good Guys
				</h1>

				<div className='grid xl:grid-cols-7 gap-8'>
					<div className='xl:col-span-5 p-2 lg:p-8 grid gap-12 '>
						{data.map((reasons, index) => (
							<Reasons
								title={reasons.title}
								description={reasons.description}
								imageType={reasons.imageType}
							/>
						))}
					</div>
					<div className='xl:col-span-2  place-self-center  w-full grid place-items-center h-full'>
						<ImageCarousel />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;

function Reasons({ title, description, imageType }) {
	return (
		<div className='grid xl:grid-cols-12 gap-2 place-items-center'>
			<div className='xl:col-span-1 pb-2 xl:pb-0	'>
				<ImageToUse image={imageType} />
			</div>
			<motion.div
				className='xl:col-span-11 grid gap-4 tracking-wide lg:w-5/6 '
				initial={{ opacity: 0.7, scale: 0.85 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.1, duration: 1.1 }}
			>
				<span className='text-2xl text-center  font-bold text-dark border-y-2 border-orange/40 py-2'>
					{title}
				</span>

				<span className='text-lg opacity-80  text-justify   text-dark px-2'>
					{description}
				</span>
			</motion.div>
		</div>
	);
}

const ImageToUse = ({ image }) => {
	return (
		<>
			<motion.div
				className='text-4xl xl:text-6xl text-light1 border border-orange/20 bg-orange p-4 rounded-full shadow-lg  '
				initial={{ scale: 0.93 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror' }}
			>
				{image === 'faucet' && <FaFaucet />}
				{image === 'maintenance' && <AiFillTool />}
				{image === 'renovations' && <FaRegClipboard />}
			</motion.div>
		</>
	);
};
