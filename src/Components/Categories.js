import React from 'react';
import "./Compenents-Style/Categories.css"
import CatListing from "./CatListing";


function Categories(props) {

    return (
        <div className="categoriesContainer">
            <div className="categoriesContent">
                <h1>Categories</h1>
                <button>View All Categories</button>
            </div>
            <CatListing/>
        </div>

    );
}

export default Categories;