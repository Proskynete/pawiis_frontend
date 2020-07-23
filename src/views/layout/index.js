import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { roleRoutes } from '../../config/config-roles-per-role';

const AdminLayout = (props) => {
	const { role } = props;

	const menu = roleRoutes[role].map((route, index) => {
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

	return (
		<Suspense fallback={'Cargando...'}>
			<Switch>
				{menu}
				<Redirect from='/' to='/dashboard' />
			</Switch>
		</Suspense>
	);
};

export default AdminLayout;
