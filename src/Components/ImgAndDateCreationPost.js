import React from 'react';
import "./Compenents-Style/ImgAndDateCreationPost.css"

function ImgAndDateCreationPost(props) {
    return (
        <div className="ImgAndDateCreationPost">
            <img alt={props.name} src={props.img}/>
            <div className="ImgAndDateCreationPostContent">
                <p>{props.name}</p>
                <p>{props.date}</p>
            </div>
        </div>
    );
}

export default ImgAndDateCreationPost;