import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

const ModalCreateInfoPet = (props) => {
	const { show } = props;

	return (
		<Modal show={show} onHide={() => {}}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={() => {}}>
					Cerrar
				</Button>
				<Button variant='primary' onClick={() => {}}>
					Guardar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

ModalCreateInfoPet.propTypes = {
	show: PropTypes.bool.isRequired,
};

export default connect(
	(state) => ({
		show: state.modal.show,
	}),
	(dispatch) => ({ dispatch }),
)(memo(ModalCreateInfoPet));
