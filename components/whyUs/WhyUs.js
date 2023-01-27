import { FaTape } from 'react-icons/fa';
import { GiSpikedFence, GiFloorPolisher, GiStickFrame } from 'react-icons/gi';
import { IoIosConstruct } from 'react-icons/io';
import { RxFrame } from 'react-icons/rx';
import { AiFillFormatPainter } from 'react-icons/ai';
import { motion } from 'framer-motion';

const WhyUs = ({ data, images }) => {
	return (
		<div className=' grid gap-8 lg:gap-16 max-w-7xl mx-auto my-24 xl:pb-16 xl:border-b-2 xl:border-orange/40'>
			<h1 className='text-center text-3xl xl:text-6xl tracking-widest font-semibold text-orange uppercase opacity-80 f'>
				Our Range of Services
			</h1>

			<div className='  grid md:grid-cols-2 gap-24 mx-2  '>
				{data.map((reasons, index) => (
					<div key={index}>
						<Reasons
							title={reasons.title}
							description={reasons.description}
							imageType={reasons.imageType}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhyUs;

function Reasons({ title, description, imageType }) {
	return (
		<div className='grid  gap-8 place-items-center'>
			<div className=''>
				<ImageToUse image={imageType} />
			</div>
			<motion.div
				className='grid gap-8 tracking-wide'
				initial={{ opacity: 0.7, scale: 0.85 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.1, duration: 1.1 }}
			>
				<span className='text-2xl text-center  font-bold text-dark border-y-2 border-orange/40 py-2'>
					{title}
				</span>

				<motion.div
					className='text-lg opacity-80  text-justify   text-dark mx-4 lg:mx-2'
					initial={{ opacity: 0.7, scale: 0.85 }}
					whileInView={{ opacity: 1, scale: 1.02 }}
					transition={{ delay: .7, duration: 1.1 }}
				>
					{description}
				</motion.div>
				<span className=' place-self-center px-6 py-3 rounded bg-light1 text-orange font-bold shadow-md border-opacity-60 border border-orange tracking-wider hover:scale-105 hover:shadow-lg transition duration-700 cursor-pointer'>
					learn more
				</span>
			</motion.div>
		</div>
	);
}

const ImageToUse = ({ image }) => {
	return (
		<motion.div
			className='text-4xl xl:text-6xl text-light1 border border-orange/20 bg-orange p-4 rounded-full shadow-lg  '
			initial={{ scale: 0.93 }}
			animate={{ scale: 1 }}
			transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror' }}
		>
			{image === 'building' && <IoIosConstruct />}
			{image === 'repair' && <FaTape />}
			{image === 'fence' && <GiSpikedFence />}
			{image === 'paint' && <AiFillFormatPainter />}
			{image === 'tile' && <GiFloorPolisher />}
			{image === 'sheet-rock' && <GiStickFrame />}
		</motion.div>
	);
};
