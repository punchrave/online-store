import { makeAutoObservable } from "mobx"

export default class DeviceStore {
	constructor() {
		this._types=[
			{id:1, name:'Fridge'},
			{id:2, name:'Phone'}
		]
		this._brands=[
			{id:1, name:'Samsung'},
			{id:2, name:'Apple'}
		]
		this._devices=[
			{id:1, name:'Samsung Galaxy S23', price:100000, rating:5, img:'https://via.placeholder.com/150'},
			{id:2, name:'Apple iPhone 15', price:100000, rating:5, img:'https://via.placeholder.com/150'},
			{id:3, name:'Samsung Galaxy S23', price:100000, rating:5, img:'https://via.placeholder.com/150'},
			{id:4, name:'Apple iPhone 15', price:100000, rating:5, img:'https://via.placeholder.com/150'}
		]


		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}
	setBrands(brands) {
		this._brands = brands
	}
	setDevices(devices) {
		this._devices = devices
	}

	get types() {
		return this._types
	}
	get brands() {
		return this._brands
	}
	get devices() {
		return this._devices
	}
	
}