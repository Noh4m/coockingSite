import React from 'react';
import "./Compenents-Style/RecipesOfTheDay.css"
function TitleAndSubTitle(props) {
    return (
        <div className="TitleAndSubTitle">
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
        </div>
    );
}

export default TitleAndSubTitle;