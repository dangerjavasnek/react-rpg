/** @module state/models/entities/item */
import { action, makeObservable, observable } from 'mobx';

class Item {
    id = '';
    name = '';
    description = '';
    quantity = 0;

    constructor(rootStore, item) {
        this.rootStore = rootStore;
        if (item) this.init(item);
        makeObservable(this, {
            id: observable,
            name: observable,
            description: observable,
            quantity: observable,
            init: action,
            setId: action,
            setName: action,
            setDescription: action,
            setQuantity: action,
            subtractFromQuantity: action,
            addToQuantity: action,
        });
    }

    init = (item) => {
        if (item.id) this.setId(item.id);
        if (item.name) this.setName(item.name);
        if (item.description) this.setDescription(item.description);
        if (item.quantity) this.setQuantity(item.quantity);
    }

    setId = (id) => {
        this.id = id;
    }

    setName = (name) => {
        this.name = name;
    }

    setDescription = (description) => {
        this.description = description;
    }

    setQuantity = (quantity) => {
        this.quantity = quantity;
    }

    subtractFromQuantity = (amount) => {
        this.setQuantity(this.quantity - amount);
    }

    addToQuantity = (amount) => {
        this.setQuantity(this.quantity + amount);
    }
}

export default Item;
