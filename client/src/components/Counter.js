import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

export const Counter = (size) => {
	const [count, setCount] = useState(1);

	const decrem = () => {
		if (count - 1 < 0) {
			return;
		}
		setCount(count - 1);
	};

	const increm = () => {
		setCount(count + 1);
	};

	return (
		<Col md={size} className='m-4 align-items-center'>
			<Row>
				<Button onClick={decrem}> - </Button>
			</Row>
			<Row className='mt-2'>
				<p className='text-center' style={{ textAlign: "center" }}>
					{count}
				</p>
			</Row>
			<Row className=' mb-4'>
				<Button onClick={increm}> + </Button>
			</Row>
		</Col>
	);
};
