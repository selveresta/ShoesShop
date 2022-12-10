import { makeAutoObservable } from "mobx";

export default class UserStore {
	constructor() {
		this._isAuth = false;
		this._user = {};
		this._role = "";
		this._id = 0;
		makeAutoObservable(this);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}

	setUser(user) {
		this._user = user;
	}

	setRole(role) {
		this._role = role;
	}

	setId(id) {
		this._id = id;
	}

	get IsAuth() {
		return this._isAuth;
	}

	get User() {
		return this._user;
	}
	get Role() {
		return this._role;
	}

	get ID() {
		return this._id;
	}
}
