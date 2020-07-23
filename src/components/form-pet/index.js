import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Loader } from '../loader';
import { createNewPetAction } from '../../actions';
import './index.scss';

const FormPet = (props) => {
	const { show, classes } = props;
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
		console.log(petInfo);
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
								<Col xs md={6}>
									<Form.Control
										type='text'
										name='name'
										placeholder='Mi peluditx se llama...'
										autoComplete='off'
										onChange={handleChangeInputs}
									/>
								</Col>
								<Col xs={6} md={2}>
									<Form.Control
										type='text'
										name='age'
										placeholder='Tiene x años'
										autoComplete='off'
										onChange={handleChangeInputs}
									/>
								</Col>
								<Col xs={6} md={2}>
									<Form.Control
										name='sex'
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

								<Col xs={12} md={2}>
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

export default FormPet;
