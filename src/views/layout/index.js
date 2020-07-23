import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { roleRoutes } from '../../config/config-roles-per-role';
import TopNavigation from '../../components/navbar';
import './index.scss';

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
			<TopNavigation />
			<section className='app_container'>
				<Switch>
					{menu}
					<Redirect from='/' to='/dashboard' />
				</Switch>
			</section>
		</Suspense>
	);
};

export default AdminLayout;
