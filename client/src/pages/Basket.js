import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import { Context } from "..";
import { Counter } from "../components/Counter";
import { clearBasket, deleteItemBasket, fetchBasket } from "../http/deviceAPI";

export const Basket = () => {
	const { user } = useContext(Context);
	const { item } = useContext(Context);
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetchBasket(user.ID).then((data) => {
			setItems(data);
			setCount(data.length);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count, total]);

	useEffect(() => {
		getTotalPrice();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items]);

	const deleteItem = (id) => {
		deleteItemBasket(user.ID, id);
		setCount(Math.random());
	};

	const getTotalPrice = () => {
		const total = items.reduce((a, b) => {
			return a + b.price;
		}, 0);

		setTotal(total);
	};

	const buyConfirm = () => {
		item.setSumOfDay(total);
		localStorage.setItem("Sum", total);

		clearBasket(user.ID);
	};
	console.log(item.Sum);

	return (
		<Container>
			{items.length ? (
				<Container>
					{items.map((item) => (
						<div key={item.id}>
							<Row className='d-flex align-items-center mt-3'>
								<Col md={2} className='m-3'>
									<Image
										width={150}
										height={150}
										src={process.env.REACT_APP_API_URL + item.img}
										alt='png'></Image>
								</Col>
								<Col className='m-3 ' md={7}>
									<Row className='m-2'> Name: {item.name}</Row>
									<Row className='m-2'> Price: {item.price}</Row>
								</Col>
								<Counter size={1}></Counter>
								<Col className=' d-flex align-items-center m-3' md={1}>
									<Button
										onClick={() => {
											deleteItem(item.id);
										}}
										variant='danger'>
										Delete
									</Button>
								</Col>
							</Row>
							<hr></hr>
						</div>
					))}
					<Container className='d-flex justify-content-end align-items-center'>
						<Col>Total price: {total}</Col>
						<Button className=' m-3' onClick={buyConfirm}>
							Buy
						</Button>
					</Container>
				</Container>
			) : (
				<Container>
					<Col>
						{" "}
						<p
							className='d-flex justify-content-center align-items-center'
							style={{
								height: 600,
								backgroundSize: "cover",
								fontSize: 50,
							}}>
							Basket is empty
						</p>
					</Col>
				</Container>
			)}
		</Container>
	);
};
