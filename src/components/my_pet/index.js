import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import FormPet from '../form-pet';
import './index.scss';

const MyPet = () => {
	const [showCollapse, setShowCollapse] = useState(false);

	return (
		<Card className='my-pet'>
			<Card.Body className='my-pet__inner'>
				<p className='my-pet__inner__title'>Mi Peludito</p>
				<section className='my-pet__inner__content'>
					Aún no has ingresado la información de tu peludito o peludita...
					<div className='my-pet__inner__content__button'>
						<Button
							variant='outline-info'
							onClick={() => setShowCollapse(!showCollapse)}
						>
							Regístralo
						</Button>
						<FormPet
							show={showCollapse}
							classes='my-pet__inner__content__form'
						/>
					</div>
				</section>
			</Card.Body>
		</Card>
	);
};

export default MyPet;