import React from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Button } from "react-bootstrap";

const SuccessModal = ({ show, onHide }) => {
	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Save Income</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Col>Successe Saved</Col>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default SuccessModal;
