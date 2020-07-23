import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyPet from '../../../components/my-pet';

const Home = () => {
	return (
		<Container>
			<Row>
				<Col xs>
					<MyPet />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
