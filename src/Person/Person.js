import React from 'react';

const person = (props) => {
    return <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
}

export default person;