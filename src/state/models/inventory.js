/** @module state/models/inventory */
import { action, makeObservable, observable } from 'mobx';
import Item from './entities/item';
import Pet from './entities/pet';

class Inventory {
    items = [];
    pets = [];

    constructor(rootStore, items, pets) {
        this.rootStore = rootStore;
        if (items) this.initItems(items);
        if (pets) this.initPets(pets);
        makeObservable(this, {
            items: observable,
            initItems: action,
            initPets: action,
            setItems: action,
            setPets: action,
            removeItem: action,
            addItem: action,
            removePet: action,
            addPet: action,
        });
    }

    initItems = (items) => {
        if (items.length) this.setItems(items);
    }

    initPets = (pets) => {
        if (pets.length) this.setPets(pets);
    }

    setItems = (items) => {
        this.items = items.map((item) => new Item(this.rootStore, item));
    }

    setPets = (pets) => {
        this.pets = pets.map((pet) => new Pet(this.rootStore, pet));
    }

    removeItem = (itemId) => {
        this.items = this.items.filter((item) => item.id !== itemId);
    }

    removePet = (petid) => {
        this.pets = this.pets.filter((pet) => pet.id !== petid);
    }

    addItem = (item) => {
        this.items.push(new Item(this.rootStore, item));
    }

    addPet = (pet) => {
        this.pets.push(new Pet(this.rootStore, pet));
    }
}

export default Inventory;
