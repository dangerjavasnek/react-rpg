/** @module components/Map */
import React from 'react';
import { observer } from 'mobx-react';
import State from '../../state';
import Sprites from '../../assets/sprites';
import Sprite from './Sprite';
import './style.css';

const Map = () => {
    const { height, width, tiles } = State.map;
    const handleKeyPress = (e) => {
        switch (e.keyCode) {
            case 65:
            case 37:
                if (!State.player.sprite.animating) {
                    State.player.sprite.animate('walkingSide');
                }
                State.player.move('left');
                break;
            case 87:
            case 38:
                if (!State.player.sprite.animating) {
                    State.player.sprite.animate('walkingBack');
                }
                State.player.move('up');
                break;
            case 68:
            case 39:
                if (!State.player.sprite.animating) {
                    State.player.sprite.animate('walkingSide');
                }
                State.player.move('right');
                break;
            case 83:
            case 40:
                if (!State.player.sprite.animating) {
                    State.player.sprite.animate('walkingFront');
                }
                State.player.move('down');
                break;
            default:
                break;
        }
    }
    const handleKeyLift = () => {
        State.player.sprite.animate('stop');
    };
    return (
        <div
            id="map"
            style={{
                height: `${height}px`,
                width: `${width}px`,
            }}
            tabIndex="0"
            onKeyDown={handleKeyPress}
            onKeyUp={handleKeyLift}
        >
            <Sprite
                id="player"
                x={State.player.x}
                y={State.player.y}
                height={State.player.height}
                width={State.player.width}
                img={State.player.sprite && State.player.sprite.img}
                posX={State.player.sprite && State.player.sprite.posX}
                posY={State.player.sprite && State.player.sprite.posY}
                flip={State.player.sprite && State.player.sprite.flip}
            />
            {tiles.map((tile) => (
                <div
                    className="map-tile"
                    key={tile.id}
                    style={{
                        height: `${tile.height}px`,
                        width: `${tile.width}px`,
                        left: `${tile.x}px`,
                        bottom: `${tile.y}px`,
                        zIndex: tile.z,
                        backgroundColor: tile.background,
                        backgroundImage: `url(${Sprites[tile.sprite]})`,
                        backgroundRepeat: 'repeat',
                    }}
                />
            ))}
        </div>
    );
};

export default observer(Map);
