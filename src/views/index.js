import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loader } from '../components/loader';
import routes from '../routes/routes';

const AdminLayout = Loadable({
	loader: () => import('../views/layout'),
	loading: Loader,
});

const LoginView = Loadable({
	loader: () => import('./login'),
	loading: Loader,
});

const menu = routes.map((route, index) => {
	return route.component ? (
		<Route
			key={index}
			path={route.path}
			exact={route.exact}
			name={route.name}
			render={(props) => <route.component {...props} />}
		/>
	) : null;
});

const App = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<Suspense fallback={<Loader text='Cargando...' />}>
			<Switch>
				{menu}
				{user && user.role ? (
					<Route path='/' component={() => <AdminLayout role={user.role} />} />
				) : (
					<Route path='/login' component={LoginView} />
				)}
				<Redirect to='/login' />
			</Switch>
		</Suspense>
	);
};

export default App;
