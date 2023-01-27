import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
	return (
		<nav className='  bg-gradient-to-b from-orange via-orange/80 to-orange/60 py-8'>
			<div className='flex items-center justify-between max-w-7xl lg:mx-auto mx-4'>
				<Logo />

				<span className="hidden lg:block">
					<NavLinks />
				</span>
				<span className="lg:hidden hover:scale-110 transition duration-700 cursor-pointer hover:text-orange">
					<TiThMenu className='text-4xl text-white' />
				</span>
			</div>
		</nav>
	);
};

export default Navbar;

const Logo = () => {
	return (
		<div>
			<h1 className=' sm:mx-2 text-3xl font-semibold tracking-widest uppercase text-light1'>
				Stumpy's Deck  
			</h1>
		</div>
	);
};

const NavLinks = () => {
	const navlinks = ['Services', 'About', 'Contact'];
	return (
		<div className='flex items-center gap-8 text-3xl text-white'>
			{navlinks.map((navlink, index) => (
				<div key={index}>
					<span>{navlink}</span>
				</div>
			))}
		</div>
	);
};
