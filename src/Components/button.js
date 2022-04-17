import React from 'react';
import "./Compenents-Style/Button.css"
function Button(props) {
    return (
        <button><img alt={props.name} src={props.icon}/>{props.name}</button>
    );
}

export default Button;