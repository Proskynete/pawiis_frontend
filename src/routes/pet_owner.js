import { lazy } from 'react';

const homeView = lazy(() => import('../views/pet_owner/home'));

export const petOwnerRoutes = [
	{
		path: '/dashboard',
		exact: true,
		name: 'Inicio',
		component: homeView,
	},
];
