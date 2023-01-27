import ReviewItem from './ReviewItem';
import { motion } from 'framer-motion';

const Reviews = ({ reviews }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.8, duration: 1 }}
			className='max-w-7xl mx-auto grid lg:grid-cols-3 gap-4  my-12'
		>
			{reviews.map((review) => (
				<div
					key={review.name}
					
				>
					<ReviewItem name={review.name} review={review.review} />
				</div>
			))}
		</motion.div>
	);
};

export default Reviews;

import StarGeneratior from '../utils/StarGenerator';

const ReviewItem = ({ name, review }) => {
	return (
		<div className='grid gap-2 tracking-wider p-8'>
			<span className="text-xl md:text-3xl font-bold text-gray-600 ">{name}</span>
			<span>
				<StarGeneratior />
			</span>
			<span className="text-lg text-gray-800 text-justify mt-3">{review}</span>
		</div>
	);
};

