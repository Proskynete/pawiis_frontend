import { lazy } from 'react';

const LoginView = lazy(() => import('../views/login'));

const route = [
	{
		path: '/auth/signin',
		exact: true,
		name: 'Iniciar sesión',
		component: LoginView,
	},
];

export default route;
