import { makeAutoObservable } from "mobx";

export default class ItemStore {
	constructor() {
		this._types = [];
		this._brands = [];

		this._sumOfDay = 0;

		this._items = [];

		this._selectedType = {};
		this._selectedBrand = {};

		this._page = 1;
		this._totalCount = 0;
		this._limit = 9;
		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}

	setBrands(brands) {
		this._brands = brands;
	}

	setItems(items) {
		this._items = items;
	}

	setPage(page) {
		this._page = page;
	}
	setTotalCount(count) {
		this._totalCount = count;
	}

	setSumOfDay(count) {
		this._sumOfDay = count;
	}

	get totalCount() {
		return this._totalCount;
	}
	get page() {
		return this._page;
	}
	get limit() {
		return this._limit;
	}

	get Sum() {
		return this._sumOfDay;
	}

	setSelectedType(type) {
		this.setPage(1);
		this._selectedType = type;
	}

	setSelectedBrand(brand) {
		this.setPage(1);
		this._selectedBrand = brand;
	}

	get Types() {
		return this._types;
	}

	get Brands() {
		return this._brands;
	}

	get Items() {
		return this._items;
	}

	get SelectedType() {
		return this._selectedType;
	}

	get SelectedBrand() {
		return this._selectedBrand;
	}
}
