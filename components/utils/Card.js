import { BsHandThumbsUpFill } from 'react-icons/bs';
import { MdAddBusiness } from 'react-icons/md';
import { FaSmileBeam } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CardLayout = ({ data }) => {
	return (
		<div className='grid  lg:grid-cols-3 gap-16 max-w-7xl xl:mx-auto place-items-center mx-8'>
			{data.map((item, index) => (
				<motion.div
					key={index}
					className={`h-full w-full shadow-lg py-8 px-8 lg:px-16  text-white rounded-md bg-orange `}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 * index }}
				>
					<Card
						imageType={item.imageType}
						title={item.title}
						description={item.description}
					/>
				</motion.div>
			))}
		</div>
	);
};

export default CardLayout;

const Card = ({ imageType, title, description }) => {
	return (
		<div className='flex flex-col gap-8 items-center  h-full text-center hover:scale-110  transition duration-700'>
			<div className='p-4'>
				<ImageToUse image={imageType} />
			</div>

			<div className='grid gap-4'>
				<span className='text-2xl text-white font-bold'>{title}</span>
				<span className="text-lg">{description}</span>
			</div>
		</div>
	);
};

const ImageToUse = ({ image }) => {
	return (
		<>
			<motion.div
				className='text-6xl  '
				initial={{ scale: 0.93 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror' }}
			>
				{image === 'thumbs-up' && <BsHandThumbsUpFill />}
				{image === 'business' && <MdAddBusiness />}
				{image === 'smile' && <FaSmileBeam />}
			</motion.div>
		</>
	);
};
