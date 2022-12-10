import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TypeBar } from "../components/TypeBar";
import { BrandBar } from "../components/BrandBar";
import { ItemList } from "../components/ItemList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";

export const Shop = observer(() => {
	const { item } = useContext(Context);

	useEffect(() => {
		fetchTypes().then((data) => item.setTypes(data));
		fetchBrands().then((data) => item.setBrands(data));
		fetchDevices(null, null, item.page, item.limit).then((data) => {
			item.setItems(data.rows);
			item.setTotalCount(data.count);
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		fetchDevices(item.SelectedType.id, item.SelectedBrand.id, item.page, item.limit).then((data) => {
			item.setItems(data.rows);
			item.setTotalCount(data.count);
		});
	}, [item.page, item.SelectedType, item.SelectedBrand, item]);

	return (
		<Container>
			<Row className='mt-2'>
				<Col md={3}>
					<TypeBar></TypeBar>
				</Col>
				<Col md={9}>
					<BrandBar></BrandBar>
					<ItemList></ItemList>
					<Pages></Pages>
				</Col>
			</Row>
		</Container>
	);
});
