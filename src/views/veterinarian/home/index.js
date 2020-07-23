import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pets from '../../../components/pets';

const Home = () => {
	return (
		<Container>
			<Row>
				<Col xs>
					<Pets />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
