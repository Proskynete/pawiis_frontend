/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getPetAction, showModalAction } from '../../actions';
import { Loader } from '../loader';
import './index.scss';

const FormPet = lazy(() => import('../form-pet'));
const InfoPet = lazy(() => import('../pet-info'));
const PetInformation = lazy(() => import('../pet-information'));

const MyPet = (props) => {
	const { pet, getPetMethod, showModalMethod } = props;

	useEffect(() => {
		if (_.isEmpty(pet)) {
			getPetMethod();
		}
	}, [pet]);

	return (
		<Card className='my-pet'>
			<Card.Body className='my-pet__inner'>
				<Row>
					<Col xs={12} md={6}>
						<p className='my-pet__inner__title'>Mi Peludito(a)</p>
						<Suspense fallback={<Loader text='Buscando información...' />}>
							{_.isEmpty(pet) ? <FormPet /> : <InfoPet {...pet} />}
						</Suspense>
						<Button
							variant='outline-info'
							onClick={() => {
								showModalMethod({ id_pet: pet._id, id_owner: pet.owner });
							}}
						>
							Agregar nueva información
						</Button>
					</Col>
					<Col xs={12} md={6}>
						<p className='my-pet__inner__title'>Información</p>
						<Suspense fallback={<Loader text='Buscando información...' />}>
							{!_.isEmpty(pet) ? (
								<PetInformation information={pet.information} name={pet.name} />
							) : null}
						</Suspense>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

MyPet.propTypes = {
	pet: PropTypes.shape({}).isRequired,
	getPetMethod: PropTypes.func.isRequired,
	showModalMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		pet: state.pet.pet,
	}),
	(dispatch) => ({
		getPetMethod: getPetAction(dispatch),
		showModalMethod: showModalAction(dispatch),
	}),
)(memo(MyPet));
