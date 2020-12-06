/** @module state/activeScripts */
import { action, makeObservable, observable } from 'mobx';
import Scripts from '../assets/scripts';

class ActiveScripts {
    scripts = {};

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.startUpdateTimer();
        makeObservable(this, {
            scripts: observable,
            addScript: action,
            removeScript: action,
            update: action,
            reset: action,
        });
    }

    startUpdateTimer = () => {
        const update = this.update;
        setInterval(() => update(), 200);
    };

    addScript = (scriptKey) => {
        console.log('add script', scriptKey);
        this.scripts[scriptKey] = new Scripts[scriptKey](this.rootStore);
    }

    removeScript = (scriptKey) => {
        delete this.scripts[scriptKey];
    }

    update = () => {
        for (let script in this.scripts) {
            if (this.scripts[script].update) this.scripts[script].update();
        }
    }

    reset = () => {
        this.scripts = {};
    }
}

export default ActiveScripts;
