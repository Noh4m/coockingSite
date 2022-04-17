import React from 'react';
import './Compenents-Style/Hero.css'
import Button from "./button";
import ButtonBgWhite from "./ButtonBgWhite";
import ImgAndDateCreationPost from "./ImgAndDateCreationPost";

function Hero() {
    return (
        <div className="heroContainer">
            <div className="heroCardFloatLeft"></div>
            <div className="heroCard">
                <ButtonBgWhite name="Hot Recipes" icon="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-scroll-fairytale-wanicon-flat-wanicon.png"/>
                <h1>Spicy delicious chicken wings</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div>
                    <Button name="30 Minutes" icon="https://img.icons8.com/ios-glyphs/344/restaurant.png" />
                    <Button name="Chicken" icon="https://img.icons8.com/ios-glyphs/344/sport-stopwatch.png"/>
                </div>
                    <ImgAndDateCreationPost name="Emily-Rose Beach" date="15 March 2022" img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>

            </div>
            <div className="heroCardFloatRight"></div>
        </div>
    );
}

export default Hero;