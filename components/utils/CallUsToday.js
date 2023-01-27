import ButtonLink from './ButtonLink';

const CallUsToday = () => {
	return (
		<div className='h-[40vh] lg:h-[70vh] grid place-items-center bg-gradient-to-b from-orange/80 via-orange to-orange/60'>
			<div className='grid gap-2 place-items-center text-center'>
				<span className='text-4xl lg:text-7xl font-bold tracking-wider text-white grid '>
					Call Us Today
				</span>
				<span className='text-xl lg:text-4xl text-light1 pt-2'>
					WHEN WATER TROUBLES ARISE,{' '}
					<span className='font-bold text-white'> CALL THE GOOD GUYS. </span>
				</span>
			
				<div className='py-5'>
					<ButtonLink title='Call Now: 952-239-7200' color='orange' />
				</div>
			</div>
		</div>
	);
};

export default CallUsToday;
