/** @module components/Input */
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Input = (props) => (
    <InputGroup id={props.id}>
        <InputGroup.Prepend>
            <InputGroup.Text>
                {props.label}
            </InputGroup.Text>
            <FormControl
                type={props.type}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </InputGroup.Prepend>
    </InputGroup>
);

export default Input;
