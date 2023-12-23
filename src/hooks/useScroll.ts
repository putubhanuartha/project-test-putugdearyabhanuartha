import { useEffect, useRef, useState } from 'react';
import { ScrollDirection } from '../enums';

const useScroll = () => {
	const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
		ScrollDirection.neutral
	);
	const [isHeaderAtTop, setIsHeaderAtTop] = useState(window.scrollY === 0);
	const scrollPos = useRef(0);
	useEffect(() => {
		const scrollFc = () => {
			const scrollPosition = window.scrollY;
			setIsHeaderAtTop(scrollPosition === 0);
			const currentScrollPos = window.pageYOffset;
			if (currentScrollPos > scrollPos.current) {
				setScrollDirection(ScrollDirection.down);
			} else if (currentScrollPos < scrollPos.current) {
				setScrollDirection(ScrollDirection.up);
			}
			scrollPos.current = currentScrollPos;
		};
		window.addEventListener('scroll', scrollFc);
		return () => {
			removeEventListener('scroll', scrollFc);
		};
	}, []);

	return { scrollDirection, isHeaderAtTop };
};

export default useScroll;
