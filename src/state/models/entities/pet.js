/** @module state/models/entities/pet */
import { action, makeObservable, observable } from 'mobx';

class Pet {
    name = '';
    type = '';
    id = '';
    sprite = null;
    active = false;
    experience = 0;
    level = 0;

    constructor(rootStore, pet) {
        this.rootStore = rootStore;
        if (pet) this.init(pet);
        makeObservable(this, {
            name: observable,
            type: observable,
            id: observable,
            sprite: observable,
            active: observable,
            experience: observable,
            level: observable,
            init: action,
            setName: action,
            setType: action,
            setId: action,
            setSprite: action,
            setActive: action,
            setExperience: action,
            setLevel: action,
        });
    }

    init = (pet) => {
        if (pet.name) this.setName(pet.name);
        if (pet.type) this.setType(pet.type);
        if (pet.id) this.setId(pet.id);
        if (pet.sprite) this.setSprite(pet.sprite);
        if (pet.active) this.setActive(pet.active);
        if (pet.experience) this.setExperience(pet.experience);
        if (pet.level) this.setLevel(pet.level);
    }

    setName = (name) => {
        this.name = name;
    }

    setType = (type) => {
        this.type = type;
    }

    setId = (id) => {
        this.id = id;
    }

    setSprite = (sprite) => {
        this.sprite = sprite;
    }

    setActive = (active) => {
        this.active = active;
    }

    setExperience = (experience) => {
        this.experience = experience;
    }

    setLevel = (level) => {
        this.level = level;
    }
}

export default Pet;
