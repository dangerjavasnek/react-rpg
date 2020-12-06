import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Map from './components/Map';
import DebugPanel from './components/DebugPanel';
import State from './state';

const App = () => {
    useEffect(() => {
        State.map.init('town');
    }, []);
    return (
        <div className="App">
            <Row className="m-1">
                <Col>
                    <Map />
                </Col>
            </Row>
        </div>
    );
};

export default App;
