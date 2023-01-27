import Image from 'next/image';
import { carouselImages } from '../../data/data';

// const CarouselContainer = () => {
// 	return (
// 		<div className=' flex overflow-hidden overflow-x-scroll h-[50vh] '>
// 			{carouselImages.map((image, index) => (
// 				<div key={index} className="w-screen">
// 					<CarouselItem image={image.src} alt='' />
// 				</div>
// 			))}
// 		</div>
// 	);
// };

const CarouselItem = ({ image, alt }) => {
	return (
		<div className='flex justify-center items-center'>
			<Image src={image} alt={alt} width={1200} height={2100} />
		</div>
	);
};

// create a carousel of images that slides to the right

const CarouselContainer = () => {
	return (
		<div className='flex overflow-scroll place-items-center h-[50vh] max-w-5xl mx-auto'>
			{carouselImages.map((image, index) => (
				<div key={index} className=''>
					<CarouselItem image={image.src} alt='' />
				</div>
			))}
		</div>
	);
};
export default CarouselContainer;
