import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, Button } from 'react-bootstrap';
import FormPet from '../form-pet';
import './index.scss';

const MyPet = (props) => {
	const { petInfo } = props;
	const [showCollapse, setShowCollapse] = useState(false);

	return (
		<Card className='my-pet'>
			<Card.Body className='my-pet__inner'>
				<p className='my-pet__inner__title'>Mi Peludito</p>
				{_.isEmpty(petInfo) ? (
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
	petInfo: PropTypes.shape({}).isRequired,
};

export default connect((state) => ({
	petInfo: state.pet.pet,
}))(memo(MyPet));
