/** @module components/DebugPanel/Player */
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Button, Card } from 'react-bootstrap';
import State from '../../state';
import Input from '../Input';

const Player = () => {
    const [expand, setExpand] = useState(false);
    const {
        name,
        setName,
        x,
        setX,
        y,
        setY,
        speed,
        setSpeed,
    } = State.player;
    return (
        <Card id="debug-player">
            <Card.Header>
                <h3>
                    Player
                    <Button
                        className="float-right"
                        onClick={() => setExpand(!expand)}
                    >
                        {expand ? 'hide' : 'show'}
                    </Button>
                </h3>
            </Card.Header>
            {expand && (
                <Card.Body>
                    <Input
                        label="name"
                        id="debug-player-name"
                        value={name}
                        onChange={setName}
                        type="text"
                    />
                    <Input
                        label="x"
                        id="debug-player-x"
                        value={x}
                        onChange={setX}
                        type="number"
                    />
                    <Input
                        label="y"
                        id="debug-player-y"
                        value={y}
                        onChange={setY}
                        type="number"
                    />
                    <Input
                        label="speed"
                        id="debug-player-speed"
                        value={speed}
                        onChange={setSpeed}
                        type="number"
                    />
                </Card.Body>
            )}
        </Card>
    );
};

export default observer(Player);
