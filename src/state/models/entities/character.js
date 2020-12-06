/** @module state/models/entities/Character */
import { observable, action, makeObservable } from 'mobx';
import Sprite from './sprite';

class Character {
    name = '';
    x = 0;
    y = 0;
    speed = 2;
    height = 48;
    width = 48;
    sprite = null;

    constructor(rootStore, charInfo) {
        this.rootStore = rootStore;
        if (charInfo) this.init(charInfo);
        makeObservable(this, {
            name: observable,
            x: observable,
            y: observable,
            speed: observable,
            height: observable,
            width: observable,
            sprite: observable,
            init: action,
            move: action,
            setName: action,
            setSpeed: action,
            setX: action,
            setY: action,
            setXY: action,
            setSprite: action,
        });
    }

    init = (charInfo) => {
        this.setName(charInfo.name);
        this.setSpeed(charInfo.speed);
        this.height = charInfo.height;
        this.width = charInfo.width;
        this.setSprite(charInfo.spriteKey);
    }

    setSprite = (spriteKey) => {
        this.sprite = new Sprite(this.rootStore, spriteKey);
    }

    setName = (name) => {
        this.name = name;
    }

    setSpeed = (speed) => {
        this.speed = speed;
    }

    move = (direction, speed = this.speed) => {
        /** player box */
        if (!this.sprite.animating) {
            if (this.sprite.imgs) {
                switch(direction) {
                    case 'right':
                    case 'left':
                        this.sprite.setImg(this.sprite.imgs.side);
                        break;
                    case 'up':
                        this.sprite.setImg(this.sprite.imgs.back);
                        break;
                    case 'down':
                        this.sprite.setImg(this.sprite.imgs.front);
                        break;
                    default:
                        break;
                }
            }
        }
        let lowerX = this.x;
        let upperX = this.x + this.width;
        let lowerY = this.y;
        let upperY = this.y + this.height;
        switch (direction) {
            case 'left':
                /** if moving left, subtract speed from x values */
                this.sprite.setFlip(true);
                lowerX -= speed;
                upperX -= speed;
                break;
            case 'right':
                /** if moving right, add speed to x values */
                this.sprite.setFlip(false);
                lowerX += speed;
                upperX += speed;
                break;
            case 'up':
                /** if moving up, add speed to y values */
                lowerY += speed;
                upperY += speed;
                break;
            case 'down':
                /** if moving down, subtract speed from y values */
                lowerY -= speed;
                upperY -= speed;
                break;
            default:
                break;
        }
        /** check for collisions and map boundaries */
        if (this.canMoveTo(lowerX, upperX, lowerY, upperY)) this.setXY(lowerX, lowerY);
        else if (speed > 1) {
            this.move(direction, speed - 1);
        }
    }

    setX = (x) => {
        this.x = x;
    }

    setY = (y) => {
        this.y = y;
    }

    setXY = (x, y) => {
        this.setX(x);
        this.setY(y);
    }

    canMoveTo = (lx, ux, ly, uy) => {
        const xBound = this.rootStore.map.width;
        const yBound = this.rootStore.map.height;
        /** confirm that targeted move does not exceed map boundaries */
        if (lx < 0 || ly < 0 || ux > xBound || uy > yBound) return false;
        /** confirm that targeted move does not conflict with unwalkable map tile */
        const conflictingMapTiles = this.rootStore.map.tiles.filter((t) => t.conflictsWith(lx, ux, ly, uy));
        if (conflictingMapTiles.filter((t) => !t.walkable).length) return false;
        /** return true if there are no conflicts in the way */
        return true;
    }
}

export default Character;
