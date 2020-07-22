import { lazy } from 'react';

const LoginView = lazy(() => import('../views/login'));

export const routes = [
	{
		path: '/login',
		name: 'login',
		exact: true,
		component: LoginView,
	},
];
