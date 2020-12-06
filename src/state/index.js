/** @module state */
import Map from './map';
import Player from './player';
import ActiveScripts from './activeScripts';

const player = {
    "spriteKey": "player1",
    "height": 35,
    "width": 24,
    "speed": 2,
};

class RootStore {
    constructor() {
        this.map = new Map(this);
        this.player = new Player(this, player);
        this.activeScripts = new ActiveScripts(this);
    }
}

const State = new RootStore();

export default State;
