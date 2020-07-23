import React, { useState, memo } from 'react';
import { Button } from 'react-bootstrap';
import FormCreateNewPet from './form-create-new-pet';

const FormPet = () => {
	const [showCollapse, setShowCollapse] = useState(false);

	return (
		<section className='my-pet__inner__content'>
			Aún no has ingresado la información de tu peludito o peludita...
			<div className='my-pet__inner__content__button'>
				<Button
					variant='outline-info'
					onClick={() => setShowCollapse(!showCollapse)}
				>
					Regístralo
				</Button>
				<FormCreateNewPet
					show={showCollapse}
					classes='my-pet__inner__content__form'
				/>
			</div>
		</section>
	);
};

export default memo(FormPet);
