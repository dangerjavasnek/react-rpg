/** @module state/models/entities/mapTile */
import { action, makeObservable, observable } from 'mobx';

class MapTile {
    id = '';
    sprite = null;
    walkable = false;
    background = '';
    height = 0;
    width = 0;
    z = 0;
    x = 0;
    y = 0;

    constructor(rootStore, tile) {
        this.rootStore = rootStore;
        if (tile) this.init(tile);
        makeObservable(this, {
            id: observable,
            sprite: observable,
            walkable: observable,
            height: observable,
            background: observable,
            width: observable,
            z: observable,
            x: observable,
            y: observable,
            init: action,
            setId: action,
            setBackground: action,
            setX: action,
            setY: action,
            setZ: action,
            setWalkable: action,
            setSprite: action,
            setHeight: action,
            setWidth: action,
        });
    }

    init = (tile) => {
        this.setId(tile.id);
        this.setX(tile.x);
        this.setY(tile.y);
        this.setZ(tile.z);
        this.setWalkable(tile.walkable);
        this.setSprite(tile.sprite);
        this.setHeight(tile.height);
        this.setWidth(tile.width);
        this.setBackground(tile.background);
    }

    setId = (id) => {
        this.id = id;
    }

    setBackground = (background) => {
        this.background = background;
    }

    setX = (x) => {
        this.x = x;
    }

    setY = (y) => {
        this.y = y;
    }

    setZ = (z) => {
        this.z = z;
    }

    setWalkable = (walkable) => {
        this.walkable = walkable;
    }

    setSprite = (sprite) => {
        this.sprite = sprite;
    }

    setHeight = (height) => {
        this.height = height;
    }

    setWidth = (width) => {
        this.width = width;
    }

    conflictsWith = (lx, ux, ly, uy) => {
        const xBound = this.x + this.width;
        const yBound = this.y + this.height;
        const lowerIsBetweenXs = lx >= this.x && lx <= xBound;
        const lowerIsBetweenYs = ly >= this.y && ly <= yBound;
        const upperIsBetweenXs = ux >= this.x && ux <= xBound;
        const upperIsBetweenYs = uy >= this.y && uy <= yBound;
        const xConflicts = lowerIsBetweenXs || upperIsBetweenXs;
        const yConflicts = lowerIsBetweenYs || upperIsBetweenYs;
        if (xConflicts && yConflicts) return true;
        return false;
    }
}

export default MapTile;
