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
	return (
		<Container className='d-flex flex-column'>
			<Button variant={"outline-dark"} className='mt-4 p-2' onClick={() => setTypeVisible(true)}>
				Add Type
			</Button>
			<Button variant={"outline-dark"} className='mt-4 p-2' onClick={() => setBrandVisible(true)}>
				Add Brand
			</Button>
			<Button variant={"outline-dark"} className='mt-4 p-2' onClick={() => setDeviceVisible(true)}>
				Add Item
			</Button>
			<Button
				variant={"outline-dark"}
				className='mt-4 p-2'
				onClick={() => {
					setSuccessVisible(true);

					SaveIncome(parseInt(localStorage.getItem("Sum")));
					localStorage.setItem("Sum", 0);
					item.setSumOfDay(0);
				}}>
				Save income of day
			</Button>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}></CreateBrand>
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)}></CreateType>
			<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}></CreateDevice>
			<SuccessModal show={successVisible} onHide={() => setSuccessVisible(false)}></SuccessModal>
		</Container>
	);
};
