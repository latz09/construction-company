import MainLayout from '../components/layout/MainLayout';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	const pageAnimateVariable = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 0.8,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.3 } },
	};
	return (
		<MainLayout>
			<AnimatePresence mode='wait'>
				<motion.div
					key={router.route}
					variants={pageAnimateVariable}
					initial='hidden'
					animate='visible'
					exit='exit'
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</MainLayout>
	);
}

export default MyApp;
