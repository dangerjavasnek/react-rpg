/** @module components/Map */
import React from 'react';

const Sprite = (props) => {
    const {
        id,
        x,
        y,
        height,
        width,
        img,
        posX,
        posY,
        flip,
    } = props;
    const style = {};
    if (y !== undefined) style.bottom = `${y}px`;
    if (x !== undefined) style.left = `${x}px`;
    if (height) style.height = `${height}px`;
    if (width) style.width = `${width}px`;
    if (img) style.backgroundImage = `url(${img})`;
    if (posX !== undefined && posY !== undefined) style.backgroundPosition = `${posX}px ${posY}px`;
    if (flip) style.transform = 'scaleX(-1)';
    return (
        <div
            id={id}
            style={style}
        />
    );
}

export default Sprite;
