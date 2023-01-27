import Link from 'next/link';

const ButtonLink = ({title, color}) => {
	return (
		<>
			<Link href='/'>
				<div className={` bg-orange px-4 py-3 uppercase hover:scale-110 transition duration-700 font-semibold text-lg lg:text-xl rounded shadow-lg tracking-wider ${color === 'orange' ? 'bg-orange text-light1 hover:bg-orange/70 ' : 'bg-white text-orange'}`}>{title}</div>
			</Link>
		</>
	);
};

export default ButtonLink;

// bg-orange 
// hover:bg-orange/70
// text-light1 
// hover:text-dark