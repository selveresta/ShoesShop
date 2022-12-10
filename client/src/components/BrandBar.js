import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Context } from "..";

export const BrandBar = observer(() => {
	const { item } = useContext(Context);

	const [selected, setSelected] = useState(true);

	return (
		<Form className='d-flex'>
			{item.Brands.map((brand) => (
				<Card
					style={{ cursor: "pointer" }}
					key={brand.id}
					className='p-3 m-2'
					onClick={() => {
						if (selected) {
							item.setSelectedBrand(brand);
							setSelected(!selected);
						} else {
							item.setSelectedBrand({});
							setSelected(!selected);
						}
					}}
					border={brand.id === item.SelectedBrand.id ? "danger" : "light"}>
					{brand.name}
				</Card>
			))}
		</Form>
	);
});
