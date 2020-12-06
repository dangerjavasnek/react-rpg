/** @module state/models/entities/sprite */
import { action, makeObservable, observable } from 'mobx';
import Sprites from '../../../assets/sprites';

class Sprite {
    id = '';
    img = null;
    imgs = {};
    posX = 0;
    posY = 0;
    height = 0;
    width = 0;
    animations = {};
    animatingFn = null;
    animating = false;
    flip = false;

    constructor(rootStore, sprite) {
        this.rootStore = rootStore;
        if (sprite) this.init(sprite);
        makeObservable(this, {
            id: observable,
            img: observable,
            imgs: observable,
            posX: observable,
            posY: observable,
            height: observable,
            width: observable,
            animations: observable,
            animating: observable,
            flip: observable,
            init: action,
            setImg: action,
            animate: action,
            changePos: action,
            setFlip: action,
        });
    }

    init = (spriteKey) => {
        const sprite = Sprites[spriteKey];
        if (sprite) {
            this.id = sprite.id;
            if (typeof sprite.img === 'object') {
                this.imgs = sprite.img;
                this.img = sprite.img.front;
            }
            else this.img = sprite.img;
            this.height = sprite.height;
            this.width = sprite.width;
            this.animations = sprite.animations;
        }
    }

    setImg = (img) => {
        this.img = img;
    }

    animate = (animKey) => {
        if (this.animations[animKey]) {
            const anim = this.animations[animKey];
            const frames = Object.keys(anim.frames).map((key) => anim.frames[key].frame);
            let i = 0;
            const boundThis = this;
            this.animating = true;
            this.animatingFn = setInterval(() => {
                boundThis.changePos(frames[i].x, frames[i].y);
                console.log(i, `x: ${frames[i].x}, y: ${frames[i].y}`);
                if (i + 1 > frames.length - 1) i = 0;
                else i += 1;
            }, 100);
        } else {
            this.posX = 0;
            this.posY = 0;
            this.animating = false;
            clearInterval(this.animatingFn);
        }
    }

    changePos = (x, y) => {
        this.posX = x;
        this.posY = y;
    }

    setFlip = (flip) => {
        this.flip = flip;
    }

}

export default Sprite;
