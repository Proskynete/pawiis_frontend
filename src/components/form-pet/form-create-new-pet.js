import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Loader } from '../loader';
import { createNewPetAction } from '../../actions';
import './index.scss';

const FormCreateNewPet = (props) => {
	const { show, classes, createNewPetMethod } = props;
	const [petInfo, setPetInfo] = useState({});
	const [button, setButton] = useState(false);

	const handleChangeInputs = (e) => {
		setPetInfo({
			...petInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmitPet = () => {
		setButton(true);
		createNewPetMethod(petInfo);
	};

	return (
		<Row className={`${classes} form-pet`}>
			<Col className='form-pet__inner'>
				<Card className={`collapse  ${show ? 'show' : ''}`}>
					<Card.Body className='form-pet__inner__container'>
						<p className='form-pet__inner__container__title'>
							Agregar nuevo peluditx
						</p>
						<Form>
							<Form.Row>
								<Col
									xs={12}
									md={6}
									className='form-pet__inner__container__input-group'
								>
									<Form.Control
										type='text'
										name='name'
										placeholder='Mi peluditx se llama...'
										autoComplete='off'
										onChange={handleChangeInputs}
									/>
								</Col>
								<Col
									xs={12}
									md={2}
									className='form-pet__inner__container__input-group'
								>
									<Form.Control
										type='text'
										name='age'
										placeholder='Tiene x años'
										autoComplete='off'
										onChange={handleChangeInputs}
									/>
								</Col>
								<Col
									xs={12}
									md={2}
									className='form-pet__inner__container__input-group'
								>
									<Form.Control
										name='gender'
										as='select'
										className='mr-sm-2'
										custom
										onChange={handleChangeInputs}
									>
										<option value='0'>Es...</option>
										<option value='male'>Peludito</option>
										<option value='female'>Peludita</option>
									</Form.Control>
								</Col>

								<Col
									xs={12}
									md={2}
									className='form-pet__inner__container__button'
								>
									<Button
										block
										variant='outline-secondary'
										onClick={handleSubmitPet}
									>
										{button ? <Loader text={'Guardando...'} /> : 'Registrar'}
									</Button>
								</Col>
							</Form.Row>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

FormCreateNewPet.propTypes = {
	createNewPetMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({ state }),
	(dispatch) => ({
		createNewPetMethod: createNewPetAction(dispatch),
	}),
)(memo(FormCreateNewPet));
