import { awards } from '../../data/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Awards = () => {
	return (
		<div className="max-w-5xl mx-auto w-full mt-24 grid gap-4 text-4xl lg:text-6xl text-orange text-center">
            <div>Serving the Twin Cities <span className="text-dark/70"> since 1983, </span></div>
            <div className="text-xl lg:text-3xl text-orange/80 lg:w-2/3 mx-4 lg:mx-auto">Stumpy's Home Services has built a reputation as your go to team for your home improvement needs.</div>
			<div className='grid grid-cols-2 place-items-center gap-8 lg:gap-16 lg:flex lg:items-center lg:justify-around  my-8 lg:my-16'>
				{awards.map((award, index) => (
					<motion.div
						key={index}
						className='p-4 lg:p-0'
						initial={{ y: -3 }}
						animate={{ y: 3 }}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Image src={award.image} alt={award.title} />
					</motion.div>
				))}
			</div>
            
		</div>
	);
};

export default Awards;
