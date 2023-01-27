import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({children}) => {
	return (
		<div className="flex flex-col h-full bg-light text-dark ">
			<Navbar />
            <main className='min-h-screen flex-grow '>{children}</main>
            <Footer />
		</div>
	);
};

export default MainLayout;