import React from 'react';
import "./Compenents-Style/ButtonBgWhite.css"
function ButtonBgWhite(props) {
    return (
        <button className="ButtonBgWhite"><img alt={props.name} src={props.icon}/>{props.name}</button>
    );
}

export default ButtonBgWhite;