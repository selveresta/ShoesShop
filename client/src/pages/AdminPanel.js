import React, { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Context } from "..";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateItem";
import CreateType from "../components/modals/CreateType";
import SuccessModal from "../components/modals/SuccessModal";

import { SaveIncome } from "../http/deviceAPI";

export const AdminPanel = () => {
	const { item } = useContext(Context);

	const [brandVisible, setBrandVisible] = useState(false);
	const [typeVisible, setTypeVisible] = useState(false);
	const [deviceVisible, setDeviceVisible] = useState(false);
	const [successVisible, setSuccessVisible] = useState(false);

	const [type, setType] = useState("");
	return (
		<Container className='d-flex flex-column'>
			<Button
				variant={"outline-dark"}
				className='mt-4 p-2'
				onClick={() => {
					setType("add");
					setTypeVisible(true);
				}}
			>
				Add Type
			</Button>
			<Button
				variant={"outline-dark"}
				className='mt-4 p-2'
				onClick={() => {
					setType("add");

					setBrandVisible(true);
				}}
			>
				Add Brand
			</Button>
			<Button
				variant={"outline-dark"}
				className='mt-4 p-2'
				onClick={() => {
					setType("add");

					setDeviceVisible(true);
				}}
			>
				Add Item
			</Button>
			<br></br>
			<br></br>

			<Button
				variant={"outline-dark"}
				className='mt-4 p-2'
				onClick={() => {
					setType("delete");

					setTypeVisible(true);
				}}
			>
				Delete Type
			</Button>
			<Button
				variant={"outline-dark"}
				className='mt-4 p-2'
				onClick={() => {
					setType("delete");

					setBrandVisible(true);
				}}
			>
				Delete Brand
			</Button>
			<Button
				variant={"outline-dark"}
				className='mt-4 p-2'
				onClick={() => {
					setType("delete");

					setDeviceVisible(true);
				}}
			>
				Delete Item
			</Button>

			<br></br>
			<br></br>
			<Button
				variant={"outline-dark"}
				className='mt-4 p-2'
				onClick={() => {
					setSuccessVisible(true);

					SaveIncome(parseInt(localStorage.getItem("Sum")));
					localStorage.setItem("Sum", 0);
					item.setSumOfDay(0);
				}}
			>
				Save income of day
			</Button>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} type={type}></CreateBrand>
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)} type={type}></CreateType>
			<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} type={type}></CreateDevice>
			<SuccessModal show={successVisible} onHide={() => setSuccessVisible(false)} type={type}></SuccessModal>
		</Container>
	);
};
