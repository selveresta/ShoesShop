import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";
import { deleteBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide, type }) => {
	const [value, setValue] = useState("");

	const addBrand = () => {
		createBrand({ name: value }).then((data) => {
			setValue("");
			onHide();
		});
	};

	const deleteOneBrand = () => {
		deleteBrand(value).then((data) => {
			setValue("");
			onHide();
		});
	};
	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				{type === "add" ? (
					<Modal.Title id='contained-modal-title-vcenter'>Add Brand</Modal.Title>
				) : (
					<Modal.Title id='contained-modal-title-vcenter'>Delete Brand</Modal.Title>
				)}
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Brand name"} />
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Close
				</Button>
				<Button variant='outline-success' onClick={type === "add" ? addBrand : deleteOneBrand}>
					{type === "add" ? "Add" : "Delete"}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateBrand;
