const Banner = () => {
	return (
		<section className="min-h-[70vh] relative overflow-hidden">
			<img
				src="/img/banner.jpg"
				alt="banner image"
				className="w-full object-cover h-[70vh] object-top"
			/>
			<div
				style={{
					position: 'absolute',
					top: 1,
					width: '100%',
					height: '70vh',
					borderBottom: '70vh solid white',
					borderLeft: '250vw solid transparent',
				}}
			></div>
		</section>
	);
};

export default Banner;
