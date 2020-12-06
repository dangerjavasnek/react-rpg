/** @module sprites */
import mapSprites from './map';
import player1 from './player/player1';

const sprites = {
    player1,
    ...mapSprites,
};

export default sprites;
