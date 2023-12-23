import { Link, useLocation } from 'react-router-dom';
import { ROUTES_NAV } from '../contants';
import { IoCloseSharp } from 'react-icons/io5';
import { useSidebarStateStore } from '../store';

const Sidebar = () => {
	const location = useLocation();
	const locationRef = location.pathname.replace('/', '');
	const sidebarState = useSidebarStateStore();

	return (
		<div
			className={`h-screen top-0 py-5 px-3 fixed bottom-0 right-0 z-[999] w-full max-w-48 bg-white transition-all duration-300 ${
				sidebarState.isSidebarActive ? 'translate-x-0' : 'translate-x-96'
			}`}
		>
			<button
				onClick={() =>
					sidebarState.setIsSidebarActive(!sidebarState.isSidebarActive)
				}
				className="w-fit ml-auto  block mb-4"
			>
				<IoCloseSharp size={40} />
			</button>
			<ul className="flex flex-col text-black items-center gap-y-5">
				{ROUTES_NAV.map((el) => {
					return (
						<li
							key={el}
							className="overflow-hidden flex flex-col items-center w-fit"
						>
							<Link
								to={el}
								className="capitalize text-center font-semibold text-lg"
							>
								{el}
							</Link>
							<div
								className={`h-1 bg-orange-600 transition-all duration-300 w-full  ${
									el === locationRef ? 'translate-x-0' : '-translate-x-28'
								}`}
							></div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
