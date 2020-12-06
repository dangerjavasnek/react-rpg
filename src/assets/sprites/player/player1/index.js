/** @module assets/sprites/player/player1 */
/** back sprite sheet */
import backImg from './back.png';
/** front sprite sheet */
import frontImg from './front.png';
/** side sprite sheet */
import sideImg from './side.png';
/** back walking animation json */
import walkingBack from './back.json';
/** front walking animation json */
import walkingFront from './front.json';
/** side walking animation json */
import walkingSide from './side.json';

/**
* sprite animation metadata in 'PixiJS Movie' format,
* exported from https://www.piskelapp.com/ as PixiJS Movie export
*/

const player1 = {
    id: 'player1',
    img: {
        front: frontImg,
        back: backImg,
        side: sideImg,
    },
    height: 35,
    width: 24,
    animations: {
        walkingBack,
        walkingFront,
        walkingSide,
    },
};

export default player1;
