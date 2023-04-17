import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { createType, deleteType } from "../../http/deviceAPI";

const CreateType = ({ show, onHide, type }) => {
	const [value, setValue] = useState("");

	const addType = () => {
		createType({ name: value }).then((data) => {
			setValue("");
			onHide();
		});
	};

	const deleteOneType = () => {
		deleteType(value).then((data) => {
			setValue("");
			onHide();
		});
	};

	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				{type === "add" ? (
					<Modal.Title id='contained-modal-title-vcenter'>Add Type</Modal.Title>
				) : (
					<Modal.Title id='contained-modal-title-vcenter'>Delete Type</Modal.Title>
				)}
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Type name"} />
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Close
				</Button>
				<Button variant='outline-success' onClick={type === "add" ? addType : deleteOneType}>
					{type === "add" ? "Add" : "Delete"}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateType;
