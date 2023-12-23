import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="pt-20 min-h-[50vh] flex">
			<div className="m-auto flex flex-col gap-y-2">
				<h2 className="text-center text-3xl font-semibold">
					Welcome to Homepage
				</h2>
				<p className="text-center text-xl">This is dummy page only</p>
				<Link
					className="text-center bg-orange-500 text-white hover:bg-orange-600 px-2 py-1 w-fit rounded-lg mx-auto block"
					to={'/ideas'}
				>
					Go to ideas page
				</Link>
			</div>
		</div>
	);
}

export default App;
