import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

export const TypeBar = observer(() => {
	const { item } = useContext(Context);
	const [selected, setSelected] = useState(true);

	return (
		<ListGroup>
			{item.Types.map((type) => (
				<ListGroup.Item
					style={{ cursor: "pointer" }}
					active={type.id === item.SelectedType.id}
					onClick={() => {
						item.setSelectedType(type);
						if (selected) {
							item.setSelectedType(type);
							setSelected(!selected);
						} else {
							item.setSelectedType({});
							setSelected(!selected);
						}
					}}
					key={type.id}>
					{type.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
});
