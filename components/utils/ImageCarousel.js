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
import { carouselImages } from '../../data/data';

const ImageCarousel = ({}) => {
	

	const images = carouselImages
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
		<div className='flex flex-col place-items-center  gap-8  m-4 h-full my-16'>
			<motion.div
				className=' '
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: .3, duration: 1.1 }}
			>
				<div className="grid place-items-center shadow-xl">
				<Image src={images[imageIndex].src} alt='' priority={true} width={600} height={ 400}  /></div>
			</motion.div>
			<div className='w-full'>
				<ToggleIndex prevImage={prevImage} nextImage={nextImage} />
			</div>
		</div>
	);
};

export default ImageCarousel;

const ToggleIndex = ({ prevImage, nextImage }) => {
	return (
		<div className=' text-4xl text-orange flex justify-center space-x-16 w-full h-full'>
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
