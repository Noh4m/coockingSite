import React from 'react';
import TitleAndSubTitle from "./TitleAndSubTitle";
import CardRecipe from "./Card/CardRecipe";

function RecipesOfTheDay(props) {
    return (
        <div>
            <TitleAndSubTitle title="Simple and tasty recipes"
                              subTitle="Lorem ipsum dolor sit amet, consectetuipisicing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"/>

            <CardRecipe recipe="Big and Juicy Wagyu Beef Cheeseburger"/>

        </div>
    );
}

export default RecipesOfTheDay;