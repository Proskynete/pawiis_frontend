/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getAllPetAction } from '../../actions';

const Pets = (props) => {
	const { pets, getAllPetMethod } = props;

	useEffect(() => {
		if (_.isEmpty(pets)) {
			getAllPetMethod();
		}
	}, [pets]);

	return (
		<Card className='my-pet'>
			<Card.Body className='my-pet__inner'>
				<Row>
					<Col xs={12} md={6}>
						<p className='my-pet__inner__title'>Peludito(a)s</p>
						{pets.map((pet) => {
							return (
								<Card key={pet._id}>
									<Card.Body>
										<Card.Title>Paciente: {pet.name}</Card.Title>
										<Button variant='outline-info'>
											<Link
												to={{
													pathname: '/paciente',
													owner_id: pet.owner,
												}}
											>
												Ir
											</Link>
										</Button>
									</Card.Body>
								</Card>
							);
						})}
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

Pets.propTypes = {
	pets: PropTypes.array.isRequired,
	getAllPetMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		pets: state.pet.all_pets,
	}),
	(dispatch) => ({
		getAllPetMethod: getAllPetAction(dispatch),
	}),
)(memo(Pets));
