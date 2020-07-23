import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModalAction } from '../../actions';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalCreateInfoPet = (props) => {
	const { show, hideModalMethod } = props;
	const [info, setInfo] = useState({});

	const handleChangeInputs = (e) => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		});
	};

	const handleSaveInformation = () => {
		console.log(info);
		hideModalMethod();
	};

	return (
		<Modal show={show} onHide={hideModalMethod}>
			<Modal.Header closeButton>
				<Modal.Title>Agregar nueva información</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='formGroupEmail'>
						<Form.Label>Tipo de información</Form.Label>
						<Form.Control
							name='action_type'
							as='select'
							className='mr-sm-2'
							onChange={handleChangeInputs}
						>
							<option value='0'>Seleccione una opción</option>
							<option value='vaccine'>Vacuna</option>
							<option value='disease'>Enfermedad</option>
							<option value='remedy'>Remedio</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='formGroupPassword'>
						<Form.Label>Descripción</Form.Label>
						<Form.Control
							as='textarea'
							name='description'
							placeholder='Información complementaria...'
							onChange={handleChangeInputs}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={hideModalMethod}>
					Cerrar
				</Button>
				<Button variant='primary' onClick={handleSaveInformation}>
					Guardar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

ModalCreateInfoPet.propTypes = {
	show: PropTypes.bool.isRequired,
	hideModalMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		show: state.modal.show,
	}),
	(dispatch) => ({
		hideModalMethod: hideModalAction(dispatch),
	}),
)(memo(ModalCreateInfoPet));
