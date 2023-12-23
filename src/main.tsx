import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalLayout from './GlobalLayout.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// implement lazy loading here
import Ideas from './pages/ideas/ideas.tsx';
import Work from './pages/work.tsx';
import Services from './pages/services.tsx';
import Contact from './pages/contact.tsx';
import Careers from './pages/careers.tsx';
import About from './pages/about.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter([
	{
		path: '/',
		element: <GlobalLayout />,
		children: [
			{
				path: '',
				element: <App />,
			},
			{
				path: '/ideas',
				element: <Ideas />,
			},
			{
				path: '/work',
				element: <Work />,
			},
			{
				path: '/services',
				element: <Services />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/careers',
				element: <Careers />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
