import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Banner = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});
	const translateY = useTransform(scrollYProgress, [0, 0.7], [0, -100]);
	const translateTextH = useTransform(scrollYProgress, [0, 0.7], [0, -100]);
	const translateTextP = useTransform(scrollYProgress, [0, 0.7], [0, 100]);
	return (
		<section
			ref={ref}
			className="h-[70vh] relative overflow-hidden"
		>
			<div className="relative w-full">
				<motion.img
					style={{ y: translateY }}
					src="/img/banner.jpg"
					alt="banner image"
					className="w-full object-cover h-screen"
				/>
				<div className="bg-black absolute w-screen z-20 h-[70vh] top-0 opacity-40"></div>
			</div>
			<div className="flex flex-col text-white items-center absolute z-30 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
				<motion.h1 style={{x : translateTextH}} className="text-center font-semibold text-4xl">Ideas</motion.h1>
				<motion.p style={{x : translateTextP}} className="text-center text-lg">Where all our great things begins</motion.p>
			</div>
			<div
				style={{
					position: 'absolute',
					top: 1,
					width: '100%',
					height: '70vh',
					borderBottom: '70vh solid white',
					borderLeft: '250vw solid transparent',
					zIndex: 40,
				}}
			></div>
		</section>
	);
};

export default Banner;
