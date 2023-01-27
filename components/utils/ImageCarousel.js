import Image from 'next/image';
import image1 from '../../public/images/why-us-carousel/c1.jpg';
import image3 from '../../public/images/why-us-carousel/c3.jpg';
import image4 from '../../public/images/why-us-carousel/c4.jpg';
import image5 from '../../public/images/why-us-carousel/c5.jpg';
import image6 from '../../public/images/why-us-carousel/c6.jpg';
import image7 from '../../public/images/why-us-carousel/c7.jpg';
import image9 from '../../public/images/why-us-carousel/c9.jpg';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ImageCarousel = ({}) => {
	const images = [image1, image3, image4, image5, image6, image7, image9];

	const [imageIndex, setImageIndex] = useState(0);
	const prevImage = () => {
		imageIndex === 0
			? setImageIndex(images.length - 1)
			: setImageIndex(imageIndex - 1);
	};

	const nextImage = () => {
		imageIndex + 1 === images.length
			? setImageIndex(0)
			: setImageIndex(imageIndex + 1);
	};

	return (
		<div className='flex flex-col p-12 m-8 lg:m-0 gap-8  h-full '>
			<motion.div
				className='  shadow-lg'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: .3, duration: 1.1 }}
			>
				<Image src={images[imageIndex]} alt='' priority={true}/>
			</motion.div>
			<div className=''>
				<ToggleIndex prevImage={prevImage} nextImage={nextImage} />
			</div>
		</div>
	);
};

export default ImageCarousel;

const ToggleIndex = ({ prevImage, nextImage }) => {
	return (
		<div className=' text-4xl text-orange flex justify-evenly w-full h-full'>
			<button
				className='hover:scale-110 transition duration-700'
				onClick={prevImage}
			>
				<AiOutlineArrowLeft />
			</button>
			<button
				className='hover:scale-110  transition duration-700'
				onClick={nextImage}
			>
				<AiOutlineArrowRight />
			</button>
		</div>
	);
};
