import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {
                id: 1,
                name: 'Сартфоны',
            },
            {
                id: 2,
                name: 'Холодильники',
            },
        ];
        this._brands = [
            {
                id: 1,
                name: 'Samsung',
            },
            {
                id: 2,
                name: 'Apple',
            },
        ];
        this._devices = [
            {
                id: 1,
                name: 'Samsung',
                pice: 5000,
                rating: 5,
                img: 'https://unsplash.com/photos/person-holding-black-android-smartphone-wK-elt11pF0',
            },
            {
                id: 1,
                name: 'Samsung',
                pice: 5000,
                rating: 5,
                img: 'https://unsplash.com/photos/person-holding-black-android-smartphone-wK-elt11pF0',
            },
            {
                id: 1,
                name: 'Samsung',
                pice: 5000,
                rating: 5,
                img: 'https://unsplash.com/photos/person-holding-black-android-smartphone-wK-elt11pF0',
            },
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
}
