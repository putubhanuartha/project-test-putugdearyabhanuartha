import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useSidebarStateStore } from './store';
import { useEffect } from 'react';

const GlobalLayout = () => {
	const smallDevice = useMediaQuery('only screen and (max-width: 640px)');
	const sidebarQuery = useSidebarStateStore();
	useEffect(() => {
		if (!smallDevice) {
			sidebarQuery.setIsSidebarActive(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [smallDevice]);
	return (
		<>
			{sidebarQuery.isSidebarActive && (
				<div className="bg-black z-[99] opacity-25 fixed top-0 left-0 right-0 bottom-0"></div>
			)}
			<Sidebar />
			<Header />
			<Outlet />
		</>
	);
};

export default GlobalLayout;
