/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Loader } from '../../components/loader';
import { signInAction } from '../../actions';
import './index.scss';

const LoginView = (props) => {
	const { user, signInMethod } = props;
	const [button, setButton] = useState(false);
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const history = useHistory();

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

	useEffect(() => {
		const role = localStorage.getItem('role');

		if (role) {
			history.go();
		}
	}, [user]);

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
	user: PropTypes.shape({}).isRequired,
	signInMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		user: state.login.user,
	}),
	(dispatch) => ({
		signInMethod: signInAction(dispatch),
	}),
)(memo(LoginView));
