/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalLayout from './GlobalLayout.tsx';
import { lazy } from 'react';
import './index.css';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// implement lazy loading here
const Ideas = lazy(() => import('./pages/ideas/ideas.tsx'));
const Work = lazy(() => import('./pages/work.tsx'));
const Services = lazy(() => import('./pages/services.tsx'));
const Contact = lazy(() => import('./pages/contact.tsx'));
const Careers = lazy(() => import('./pages/careers.tsx'));
const About = lazy(() => import('./pages/about.tsx'));

import { QueryClient, QueryClientProvider } from 'react-query';
import AsyncLoading from './components/loading/async-loading.tsx';

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
				element: (
					<Suspense fallback={<AsyncLoading />}>
						<Ideas />
					</Suspense>
				),
			},
			{
				path: '/work',
				element: (
					<Suspense fallback={<AsyncLoading />}>
						<Work />
					</Suspense>
				),
			},
			{
				path: '/services',
				element: (
					<Suspense fallback={<AsyncLoading />}>
						<Services />
					</Suspense>
				),
			},
			{
				path: '/contact',
				element: (
					<Suspense fallback={<AsyncLoading />}>
						<Contact />
					</Suspense>
				),
			},
			{
				path: '/careers',
				element: (
					<Suspense fallback={<AsyncLoading />}>
						<Careers />
					</Suspense>
				),
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={<AsyncLoading />}>
						<About />
					</Suspense>
				),
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
