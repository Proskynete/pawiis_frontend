import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const TopNavigation = () => {
	return (
		<Navbar expand='lg' variant='light' bg='light'>
			<Container className='d-flex justify-content-center'>
				<Navbar.Brand href='/dashboard'>Veterinaria Dog Lover</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default TopNavigation;
