import { lazy } from 'react';

const homeView = lazy(() => import('../views/veterinarian/home'));
const petView = lazy(() => import('../components/my-pet'));

export const veterinarianRoutes = [
	{
		path: '/dashboard',
		exact: true,
		name: 'Inicio',
		component: homeView,
	},
	{
		path: '/paciente',
		exact: true,
		name: 'paciente',
		component: petView,
	},
];
