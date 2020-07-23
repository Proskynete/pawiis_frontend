/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card } from 'react-bootstrap';
import { getPetAction } from '../../actions';
import { Loader } from '../loader';
import './index.scss';

const FormPet = lazy(() => import('../form-pet'));

const MyPet = (props) => {
	const { pet, getPetMethod } = props;

	useEffect(() => {
		if (_.isEmpty(pet)) {
			getPetMethod();
		}
	}, [pet]);

	return (
		<Card className='my-pet'>
			<Card.Body className='my-pet__inner'>
				<p className='my-pet__inner__title'>Mi Peludito</p>
				<Suspense fallback={<Loader text='Buscando información...' />}>
					{_.isEmpty(pet) ? <FormPet /> : null}
				</Suspense>
			</Card.Body>
		</Card>
	);
};

MyPet.propTypes = {
	pet: PropTypes.shape({}).isRequired,
	getPetMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		pet: state.pet.pet,
	}),
	(dispatch) => ({
		getPetMethod: getPetAction(dispatch),
	}),
)(memo(MyPet));
