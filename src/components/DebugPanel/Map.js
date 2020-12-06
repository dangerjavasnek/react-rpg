/** @module components/DebugPanel/Map */
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Button, Card } from 'react-bootstrap';
import State from '../../state';
import Input from '../Input';

const Map = () => {
    const [expand, setExpand] = useState(false);
    const {
        height,
        width,
        name,
        id,
        setId,
        setName,
        setHeight,
        setWidth,
    } = State.map;
    return (
        <Card id="debug-map">
            <Card.Header>
                <h3>
                    Map
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
                        label="height"
                        id="debug-map-height"
                        value={height}
                        onChange={setHeight}
                        type="number"
                    />
                    <Input
                        label="width"
                        id="debug-map-width"
                        value={width}
                        onChange={setWidth}
                        type="number"
                    />
                    <Input
                        label="name"
                        id="debug-map-name"
                        value={name}
                        onChange={setName}
                        type="text"
                    />
                    <Input
                        label="id"
                        id="debug-map-id"
                        value={id}
                        onChange={setId}
                        type="text"
                    />
                </Card.Body>
            )}
        </Card>
    );
};

export default observer(Map);
