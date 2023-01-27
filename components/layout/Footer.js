import { MdPhoneEnabled, MdEmail } from 'react-icons/md';

const Footer = () => {
	return (
		<div className='bg-gradient-to-b from-white via-white to-orange/20 py-12'>
			<div className='max-w-[90rem] mx-auto  '>
				<div className='grid gap-16 xl:grid-cols-3 place-items-center xl:gap-4'>
					<Logo />
					<div className='xl:col-span-2 flex  w-full justify-evenly items-center'>
						<Services />
						<Navigate />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

const Logo = () => {
	return (
		<div className=' grid gap-6 lg:gap-4 place-items-center '>
			<div className='text-4xl lg:text-6xl font-semibold text-orange tracking-wider text-center'>
				Stumpy's Deck <span className='text-dark/70 italic'> Renewal, Inc</span>
			</div>
			<Contact />
		</div>
	);
};

const Contact = () => {
	return (
		<div className='grid gap-2 lg:gap-2 text-lg md:text-xl'>
			<div className='grid place-items-center lg:flex items-center gap-2 lg:gap-4 '>
				<div>
					<MdPhoneEnabled />
				</div>
				<span>651-208-2371</span>
			</div>
			<div className='grid place-items-center lg:flex items-center gap-2 lg:gap-4'>
				<div>
					<MdEmail />
				</div>
				<span className='flex items-center'>
					stumpysrequest
					<span className='text-orange text-xl md:text-2xl font-bold'>@</span>
					gmail.com
				</span>
			</div>
		</div>
	);
};

const Navigate = () => {
	const navs = ['Home', 'About', 'Contact'];
	return (
		<div className='grid gap-4 lg:gap-8'>
			<span className='font-bold text-xl md:text-2xl text-orange'>
				Navigate
			</span>
			<div className='grid gap-4 text-base md:text-lg md:tracking-wide place-items-end'>
				{navs.map((nav, index) => (
					<div key={index}>
						<span>{nav}</span>
					</div>
				))}
			</div>
		</div>
	);
};

const Services = () => {
	const services = [
		'Deck Building',
		'Deck Repair and Staining',
		'Fence Installation and Repair',
		'Interior/Exterior Painting',
		'Tile Installation and Repair',
		'Sheet Rock Installation and Repair',
	];
	return (
		<div className='grid gap-4 lg:gap-8'>
			<span className='font-bold text-xl md:text-2xl text-orange'>
				Services
			</span>
			<div className='grid gap-4 md:text-lg md:tracking-wide'>
				{services.map((service, index) => (
					<div key={index}>
						<span className="border-b border-orange pb-1 hover:scale-110 hover:border-dark/100 transition duration-700 cursor-pointer">{service}</span>
					</div>
				))}
			</div>
		</div>
	);
};
