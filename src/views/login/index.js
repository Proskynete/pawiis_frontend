import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './index.scss';

const LoginView = () => {
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
											type='password'
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
										{button ? 'Verificando...' : 'Iniciar sesión'}
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

export default LoginView;
