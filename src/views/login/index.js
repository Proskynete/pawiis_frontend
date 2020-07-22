import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Loader } from '../../components/loader';
import { signInAction } from '../../actions';
import './index.scss';

const LoginView = (props) => {
	const { signInMethod } = props;

	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const [button, setButton] = useState(false);

	const handleChangeInput = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		setButton(true);
		signInMethod(credentials);
	};

	return (
		<div className='screen'>
			<Container fluid className='login'>
				<Row className='justify-content-md-center'>
					<Col xs md={{ span: 3 }}>
						<Card>
							<Card.Body>
								<div className='login__title'>
									<h1 className='login__title__text'>Veterinaria Dog Lovers</h1>
								</div>
								<Form className='login__form'>
									<Form.Group controlId='email'>
										<Form.Control
											type='email'
											name='email'
											placeholder='Correo electrónico'
											onChange={handleChangeInput}
										/>
									</Form.Group>

									<Form.Group controlId='password'>
										<Form.Control
											type='password'
											name='password'
											placeholder='*********'
											onChange={handleChangeInput}
										/>
									</Form.Group>

									<Button
										variant='outline-info'
										disabled={button}
										block
										onClick={handleSubmit}
									>
										{button ? (
											<Loader text={'Verificando...'} />
										) : (
											'Iniciar sesión'
										)}
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

LoginView.propTypes = {
	signInMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => state,
	(dispatch) => ({
		signInMethod: signInAction(dispatch),
	}),
)(LoginView);
