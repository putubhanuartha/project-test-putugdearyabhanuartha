import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/ideas');
		}, 700);
	}, [navigate]);
	return (
		<div className="pt-20 min-h-[50vh] flex">
			<div className="m-auto flex flex-col gap-y-2">
				<h2 className="text-center text-3xl font-semibold">
					Welcome to Homepage
				</h2>
				<p className="text-center text-xl">This is dummy page only</p>
				<p className="text-center animate-bounce text-lg">Redirecting ...</p>
			</div>
		</div>
	);
}

export default App;
