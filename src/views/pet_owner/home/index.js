import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyPet from '../../../components/my_pet';

const Home = () => {
	return (
		<Container>
			<Row>
				<Col>
					<MyPet />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
