import React, { memo } from 'react';
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import './index.scss';

const PetInfo = (props) => {
	const { image, name, age, sex } = props;

	const handleShowName = () =>
		sex === 'male' ? `El es ${name}` : `Ella es ${name}`;

	const handleShowAge = () => {
		if (age <= 1) return `Es un cacharro`;
		else if (age > 1 <= 3) return 'Es un adolecente';
		else if (age > 3 <= 9) return 'Es un adulto';
		else return 'Es un adulto mayor';
	};

	const handleShowGender = () => {
		const tranformGender = {
			female: 'Femenino',
			male: 'Masculino',
		};

		return `Su genero es ${tranformGender[sex]}`;
	};

	return (
		<Container>
			<Row>
				<Col xs={12} md={5}>
					<div className='media'>
						<Row>
							<Col>
								<Card className='mb-2'>
									<Card.Body>
										<Row>
											<Col xs={12} md={4}>
												<Image
													src={image}
													className='mx-auto d-block'
													alt={`Foto de ${name}`}
													style={{ maxWidth: '80%' }}
												/>
											</Col>
											<Col xs={12} md={7}>
												<Card.Title>{handleShowName()}</Card.Title>
												<Card.Text style={{ marginBottom: '0' }}>
													{handleShowAge()}
												</Card.Text>
												<Card.Text>{handleShowGender()}</Card.Text>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default memo(PetInfo);
