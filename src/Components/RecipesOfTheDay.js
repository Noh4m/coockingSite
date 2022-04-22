import React from 'react';
import TitleAndSubTitle from "./TitleAndSubTitle";
import CardRecipe from "./Card/CardRecipe";
import {data} from "../Data/DataRecipes"

function RecipesOfTheDay(props) {
    return (
        <div>
            <TitleAndSubTitle title="Simple and tasty recipes"
                              subTitle="Lorem ipsum dolor sit amet, consectetuipisicing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"/>
            <div className="cardRecipes">
                {data.slice(0, 9).map((data) =>(
                    <CardRecipe key={data.id} recipe={data.nameRecipe} img={data.img}  categories={data.categories} timeCooking={data.timeCooking}/>
                ))}
            </div>


        </div>
    );
}

export default RecipesOfTheDay;