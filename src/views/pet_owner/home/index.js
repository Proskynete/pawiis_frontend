import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<h1>Mi mascota</h1>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
