/** @module state/player */
import { action, makeObservable, observable } from 'mobx';
import Character from './models/entities/character';
import Inventory from './models/inventory';

class Player extends Character {
    inventory = null;

    constructor(rootStore, playerInfo) {
        super(rootStore, playerInfo);
        makeObservable(this, {
            inventory: observable,
            initInventory: action,
        });
    }

    initInventory = (items) => {
        this.inventory = new Inventory(this.rootStore, items);
    }
}

export default Player;
