import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import { OneItem } from "./OneItem";

export const ItemList = observer(() => {
	const { item } = useContext(Context);
	return (
		<Row className='d-flex'>
			{item.Items.map((item) => (
				<OneItem item={item} key={item.id}></OneItem>
			))}
		</Row>
	);
});
