import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalCreateInfoPet = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Cerrar
				</Button>
				<Button variant='primary' onClick={handleClose}>
					Guardar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalCreateInfoPet;
