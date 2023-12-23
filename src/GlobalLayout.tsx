import { Outlet } from 'react-router-dom';
import Header from './components/header';

const GlobalLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default GlobalLayout;
