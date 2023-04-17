import { $authHost, $host } from "./index";

export const createType = async (type) => {
	const { data } = await $authHost.post("api/type", type);
	return data;
};

export const deleteType = async (type) => {
	const { data } = await $authHost.delete("api/type", { params: { name: type } });
	return data;
};

export const fetchTypes = async () => {
	const { data } = await $host.get("api/type");
	return data;
};

export const createBrand = async (brand) => {
	const { data } = await $authHost.post("api/brand", brand);
	return data;
};

export const deleteBrand = async (brand) => {
	const { data } = await $authHost.delete("api/brand", { params: { name: brand } });
	return data;
};

export const fetchBrands = async () => {
	const { data } = await $host.get("api/brand");
	return data;
};

export const fetchBrand = async (id) => {
	const { data } = await $host.get("api/brand" + id);
	return data;
};

export const fetchType = async (id) => {
	const { data } = await $host.get("api/type" + id);
	return data;
};

export const createDevice = async (device) => {
	const { data } = await $authHost.post("api/item/", device);
	return data;
};

export const deleteDevice = async (device) => {
	const { data } = await $authHost.delete("api/item/", { params: { name: device } });
	return data;
};

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
	const { data } = await $host.get("api/item", {
		params: {
			typeId,
			brandId,
			limit,
			page,
		},
	});
	return data;
};

export const SaveIncome = async (sum) => {
	const { data } = await $authHost.post("api/daySale", { sum });
	return data;
};

export const fetchOneDevice = async (id) => {
	const { data } = await $host.get("api/item/" + id);

	return data;
};

export const fetchOneRating = async (id) => {
	const { data } = await $host.get("api/rating/" + id);

	return data;
};

export const createRating = async (rating) => {
	const { data } = await $host.post("api/rating/", rating);

	return data;
};

export const createBasketItem = async (userId, itemId) => {
	const { data } = await $host.post("api/basket/", { userId, itemId });

	return data;
};

export const fetchBasket = async (userId) => {
	const { data } = await $host.get("api/basket/", {
		params: {
			userId,
		},
	});
	return data;
};

export const deleteItemBasket = async (userId, itemId) => {
	const { data } = await $host.post("api/basket/delete", { userId, itemId });
	return data;
};

export const clearBasket = async (userId) => {
	const { data } = await $host.post("api/basket/clear", { userId });
	return data;
};
