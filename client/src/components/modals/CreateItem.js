import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { Context } from "../../index";
import { createDevice, deleteDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide, type }) => {
	const { item } = useContext(Context);
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [file, setFile] = useState(null);
	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetchTypes().then((data) => item.setTypes(data));
		fetchBrands().then((data) => {
			item.setBrands(data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const addInfo = () => {
		setInfo([...info, { title: "", description: "", number: Date.now() }]);
	};
	const removeInfo = (number) => {
		setInfo(info.filter((i) => i.number !== number));
	};
	const changeInfo = (key, value, number) => {
		setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
	};

	const selectFile = (e) => {
		setFile(e.target.files[0]);
	};

	const addDevice = () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("price", `${price}`);
		formData.append("img", file);
		formData.append("brandId", item.SelectedBrand.id);
		formData.append("typeId", item.SelectedType.id);
		formData.append("info", JSON.stringify(info));
		createDevice(formData).then((data) => onHide());
	};

	const deleteItem = () => {
		deleteDevice(value).then((data) => {
			setValue("");
			onHide();
		});
	};

	const [value, setValue] = useState("");

	if (type === "delete") {
		return (
			<Modal show={show} onHide={onHide} centered>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>Delete Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Control value={value} onChange={(e) => setValue(e.target.value)} placeholder={"item name "} />
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='outline-danger' onClick={onHide}>
						Close
					</Button>
					<Button variant='outline-success' onClick={deleteItem}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Add Item</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>{item.SelectedType.name || "Choose Type"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{item.Types.map((type) => (
								<Dropdown.Item onClick={() => item.setSelectedType(type)} key={type.id}>
									{type.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>{item.SelectedBrand.name || "Choose Brand"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{item.Brands.map((brand) => (
								<Dropdown.Item onClick={() => item.setSelectedBrand(brand)} key={brand.id}>
									{brand.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control value={name} onChange={(e) => setName(e.target.value)} className='mt-3' placeholder='Enater Name' />
					<Form.Control
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
						className='mt-3'
						placeholder='Enter Price'
						type='number'
					/>
					<Form.Control className='mt-3' type='file' onChange={selectFile} />
					<hr />
					<Button variant={"outline-dark"} onClick={addInfo}>
						Add new Item
					</Button>
					{info.map((i) => (
						<Row className='mt-4' key={i.number}>
							<Col md={4}>
								<Form.Control
									value={i.title}
									onChange={(e) => changeInfo("title", e.target.value, i.number)}
									placeholder='Enter name'
								/>
							</Col>
							<Col md={4}>
								<Form.Control
									value={i.description}
									onChange={(e) => changeInfo("description", e.target.value, i.number)}
									placeholder='Enter description'
								/>
							</Col>
							<Col md={4}>
								<Button onClick={() => removeInfo(i.number)} variant={"outline-danger"}>
									Delete
								</Button>
							</Col>
						</Row>
					))}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Close
				</Button>
				<Button variant='outline-success' onClick={addDevice}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
});

export default CreateDevice;
