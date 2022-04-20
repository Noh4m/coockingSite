import React from 'react';
import "./Compenents-Style/CategoriesButton.css"

function CategoriesButton(props) {
    return (
        <div className="test" style={{background: `${props.gradient}`}} >
            <a href="#foo" key={props.id}>
                <img alt={props.name} src={props.img}/>
                {props.name}
            </a>
        </div>
    );
}

export default CategoriesButton;