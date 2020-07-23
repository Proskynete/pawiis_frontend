import { lazy } from 'react';

const homeView = lazy(() => import('../views/veterinarian/home'));

export const veterinarianRoutes = [
	{
		path: '/dashboard',
		exact: true,
		name: 'Inicio',
		component: homeView,
	},
];
