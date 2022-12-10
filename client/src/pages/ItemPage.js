import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Image, Row, Form, Card, Button } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from "react-router-dom";
import { createBasketItem, createRating, fetchOneDevice, fetchOneRating } from "../http/deviceAPI";
import { Context } from "..";

export const ItemPage = () => {
	const { user } = useContext(Context);

	const [newRate, setNewRate] = useState(1);

	const [item, setItem] = useState({ info: [] });
	const [rate, setRate] = useState(0);
	const { id } = useParams();
	useEffect(() => {
		fetchOneDevice(id).then((data) => {
			setItem(data);
			fetchOneRating(data.id)
				.then((data) => {
					setRate(data);
					setRate(getRate(data));
				})
				.catch((error) => {
					setRate(0);
				});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getRate = (rate) => {
		return rate.reduce((a, b) => a + b.rate, 0) / rate.length;
	};

	const addToBasket = () => {
		console.log(user.ID, item.id);
		createBasketItem(user.ID, item.id);
	};

	const confirmRating = () => {
		if (!user._isAuth) {
			return;
		}
		const Rating = {
			rate: parseInt(newRate),
			itemId: item.id,
			userId: user.ID,
		};
		createRating(Rating)
			.then((data) => {})
			.catch((error) => {
				alert("Rating have already confirm");
			});
	};

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image src={process.env.REACT_APP_API_URL + item.img} width={300} height={300}></Image>
				</Col>
				<Col md={4}>
					<Form className='d-flex flex-column align-items-center'>
						<h2>{item.name}</h2>
						<div
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: 250,
								height: 240,
								backgroundSize: "cover",
								fontSize: 64,
							}}
							className='d-flex align-items-center justify-content-center  '>
							{Math.round(rate)}
						</div>
						<Row className='d-flex align-items-center'>
							<Col className='m-2'>
								<Form.Select
									onChange={(e) => {
										setNewRate(e.target.value);
									}}>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</Form.Select>
							</Col>
							<Col className='m-2 '>
								<Button onClick={confirmRating}>Confirm</Button>
							</Col>
						</Row>
					</Form>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{
							width: 300,
							height: 300,
							fontSize: 32,
							border: "5px solid lightgray",
						}}>
						<h3>{item.price}</h3>
						{user._isAuth ? (
							<Button variant={"outline-dark"} onClick={addToBasket}>
								{" "}
								Add to Backet
							</Button>
						) : (
							<Button variant={"outline-dark"} disabled onClick={addToBasket}>
								{" "}
								Add to Backet
							</Button>
						)}
					</Card>
				</Col>
			</Row>
			<Row>
				<Row className='d-flex flex-column m-3'>
					<h1>Характеристики</h1>
					{item.info.map((info, index) => (
						<Row
							key={info.id}
							style={{ background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10 }}>
							{info.title}: {info.description}
						</Row>
					))}
				</Row>
			</Row>
		</Container>
	);
};
