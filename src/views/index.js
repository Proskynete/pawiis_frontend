import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../routes';

const mainRoutes = routes.map((route) => (
	<Route
		key={route.name}
		exact={route.exact}
		path={route.path}
		component={(props) => <route.component {...props} />}
	/>
));

const Presenter = () => {
	return (
		<Suspense fallback={'Cargando...'}>
			<Switch>{mainRoutes}</Switch>
		</Suspense>
	);
};

export default Presenter;
