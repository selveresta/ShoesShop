import React, { useEffect, useState } from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { ITEM_ROUTE } from "../utils/consts";
import { fetchOneRating } from "../http/deviceAPI";

export const OneItem = ({ item }) => {
	const navigate = useNavigate();
	const [rate, setRate] = useState(0);

	useEffect(() => {
		fetchOneRating(item.id)
			.then((data) => {
				setRate(getRate(data));
			})
			.catch((error) => {
				setRate(0);
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getRate = (rate) => {
		return Math.round(rate.reduce((a, b) => a + b.rate, 0) / rate.length);
	};

	return (
		<Col
			md={3}
			className='mt-3'
			onClick={() => {
				navigate(ITEM_ROUTE + "/" + item.id);
			}}>
			<Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
				<Image width={150} height={150} src={process.env.REACT_APP_API_URL + item.img} alt='png'></Image>
				<div className='text-black-50 mt-1 d-flex justify-content-between align-items-center '>
					<div>Name</div>
					<div className='d-flex align-items-center'>
						<div>{rate}</div>
						<Image width={20} height={20} src={star}></Image>
					</div>
				</div>
				<div>{item.name}</div>
			</Card>
		</Col>
	);
};
