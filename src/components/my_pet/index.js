import React, { useState, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, Button } from 'react-bootstrap';
import FormPet from '../form-pet';
import { getPetAction } from '../../actions';
import './index.scss';

const MyPet = (props) => {
	const { pet, getPetMethod } = props;

	const [showCollapse, setShowCollapse] = useState(false);

	useEffect(() => {
		if (_.isEmpty(pet)) {
			getPetMethod();
		}
	}, [pet]);

	return (
		<Card className='my-pet'>
			<Card.Body className='my-pet__inner'>
				<p className='my-pet__inner__title'>Mi Peludito</p>
				{_.isEmpty(pet) ? (
					<section className='my-pet__inner__content'>
						Aún no has ingresado la información de tu peludito o peludita...
						<div className='my-pet__inner__content__button'>
							<Button
								variant='outline-info'
								onClick={() => setShowCollapse(!showCollapse)}
							>
								Regístralo
							</Button>
							<FormPet
								show={showCollapse}
								classes='my-pet__inner__content__form'
							/>
						</div>
					</section>
				) : null}
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
