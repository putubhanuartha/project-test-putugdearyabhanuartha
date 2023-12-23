import { Link, useLocation } from 'react-router-dom';
import useScroll from '../hooks/useScroll';
import { ScrollDirection } from '../enums';
import { Spin as Hamburger } from 'hamburger-react';
import { ROUTES_NAV } from '../contants';
import { useSidebarStateStore } from '../store';

const Header = () => {
	const location = useLocation();
	const locationRef = location.pathname.replace('/', '');
	const { isHeaderAtTop, scrollDirection } = useScroll();
	const sidebarState = useSidebarStateStore();
	return (
		<header
			className={`flex ${
				isHeaderAtTop ? 'opacity-100' : 'opacity-80'
			} fixed left-0 right-0 top-0 z-50 items-center h-20 bg-orange-500 transition-all duration-500 ${
				scrollDirection === ScrollDirection.down
					? '-translate-y-36'
					: 'translate-y-0'
			}`}
		>
			<div className="container mx-auto flex justify-between items-center">
				<Link to={'/'}>
					<img
						className="h-12 w-auto"
						src="/logo.png"
						alt="logo"
					/>
				</Link>
				<ul className="hidden sm:flex gap-x-3 text-white">
					{ROUTES_NAV.map((el) => {
						return (
							<li
								key={el}
								className="overflow-hidden"
							>
								<Link
									to={el}
									className="capitalize"
								>
									{el}
								</Link>
								<div
									className={`h-1 mt-1 bg-white transition-all duration-300 ${
										el === locationRef ? 'translate-x-0' : '-translate-x-28'
									}`}
								></div>
							</li>
						);
					})}
				</ul>
				<span className="sm:hidden">
					<Hamburger
						toggled={sidebarState.isSidebarActive}
						onToggle={sidebarState.setIsSidebarActive}
						color="white"
					/>
				</span>
			</div>
		</header>
	);
};

export default Header;
