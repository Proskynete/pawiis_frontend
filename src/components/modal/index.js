import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModalAction, createNewLogAction } from '../../actions';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalCreateInfoPet = (props) => {
	const { show, pet_data, hideModalMethod, createNewLogMethod } = props;
	const [info, setInfo] = useState({});

	const handleChangeInputs = (e) => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		});
	};

	const handleSaveInformation = () => {
		createNewLogMethod({ ...info, ...pet_data });
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
	pet_data: PropTypes.shape({}).isRequired,
	hideModalMethod: PropTypes.func.isRequired,
	createNewLogMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		show: state.modal.show,
		pet_data: state.modal.pet_data,
	}),
	(dispatch) => ({
		hideModalMethod: hideModalAction(dispatch),
		createNewLogMethod: createNewLogAction(dispatch),
	}),
)(memo(ModalCreateInfoPet));
