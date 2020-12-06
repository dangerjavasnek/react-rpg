/** @module state/map */
import { action, makeObservable, observable } from 'mobx';
import CONFIG from '../config/config.json';
import Maps from '../assets/maps';
import MapTile from './models/entities/mapTile';

class Map {
    name = '';
    id = '';
    height = CONFIG.map.height;
    width = CONFIG.map.width;
    tiles = [];

    constructor(rootStore, map) {
        this.rootStore = rootStore;
        if (map) this.init(map);
        makeObservable(this, {
            height: observable,
            width: observable,
            name: observable,
            id: observable,
            tiles: observable,
            init: action,
            setName: action,
            setId: action,
            setHeight: action,
            setWidth: action,
            setDimensions: action,
            setTiles: action,
        });
    }

    init = (mapKey) => {
        this.rootStore.activeScripts.reset();
        const map = Maps[mapKey];
        if (map) {
            this.setName(map.name);
            this.setId(map.id);
            this.setTiles(map.tiles);
            if (map.scripts && map.scripts.length) {
                map.scripts.forEach((scriptKey) => {
                    this.rootStore.activeScripts.addScript(scriptKey);
                });
            }
        }
    }

    setName = (name) => {
        this.name = name;
    }

    setId = (id) => {
        this.id = id;
    }

    setHeight = (height) => {
        this.height = height;
    }

    setWidth = (width) => {
        this.width = width;
    }

    setDimensions = (width, height) => {
        this.setHeight(height);
        this.setWidth(width);
    }

    setTiles = (tiles) => {
        this.tiles = tiles.map((tile) => new MapTile(this.rootStore, tile));
    }
}

export default Map;
