import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { roleRoutes } from '../../config/config-roles-per-role';
import { useHistory } from 'react-router-dom';
import TopNavigation from '../../components/navbar';
import ModalCreateInfoPet from '../../components/modal';
import { Row, Col, Button } from 'react-bootstrap';
import { logoutAction } from '../../actions';
import './index.scss';

const AdminLayout = (props) => {
	const { role, logoutMethod } = props;
	const history = useHistory();

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
				<Row className='justify-content-md-center'>
					<Col xs md={{ span: 3 }}>
						<Button
							variant='outline-danger'
							onClick={() => {
								logoutMethod();
								history.go();
							}}
						>
							cerrar sesión
						</Button>
					</Col>
				</Row>
				<ModalCreateInfoPet />
				<Switch>
					{menu}
					<Redirect from='/' to='/dashboard' />
				</Switch>
			</section>
		</Suspense>
	);
};

AdminLayout.propTypes = {
	user: PropTypes.shape({}).isRequired,
	logoutMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		user: state.login.user,
	}),
	(dispatch) => ({
		logoutMethod: logoutAction(dispatch),
	}),
)(AdminLayout);
