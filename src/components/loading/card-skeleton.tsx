const CardSkeleton = () => {
	return (
		<div className="grid xl:grid-cols-4 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto grid-cols-1">
			<div className="w-56 px-4 py-5 h-72 shadow-xl bg-white rounded-md">
				<div className="bg-gray-200 animate-pulse w-full h-[50%]"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[20%] mt-3"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[10%] mt-2"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[5%] mt-2"></div>
			</div>
			<div className="w-56 px-4 py-5 h-72 shadow-xl bg-white rounded-md">
				<div className="bg-gray-200 animate-pulse w-full h-[50%]"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[20%] mt-3"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[10%] mt-2"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[5%] mt-2"></div>
			</div>
			<div className="w-56 px-4 py-5 h-72 shadow-xl bg-white rounded-md">
				<div className="bg-gray-200 animate-pulse w-full h-[50%]"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[20%] mt-3"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[10%] mt-2"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[5%] mt-2"></div>
			</div>
			<div className="w-56 px-4 py-5 h-72 shadow-xl bg-white rounded-md">
				<div className="bg-gray-200 animate-pulse w-full h-[50%]"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[20%] mt-3"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[10%] mt-2"></div>
				<div className="bg-gray-200 animate-pulse w-full h-[5%] mt-2"></div>
			</div>
		</div>
	);
};

export default CardSkeleton;
