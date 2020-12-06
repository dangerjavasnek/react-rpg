/** @module components/DebugPanel */
import React from 'react';
import Player from './Player';
import Map from './Map';

const DebugPanel = () => (
    <div id="debug-panel">
        <Player />
        <Map />
    </div>
);

export default DebugPanel;
