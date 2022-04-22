import "./CardRecipe.css"
import Button from "../button";

function CardRecipe(props) {
    return (
        <div className="CardRecipe">
            <div className="CardRecipeContainer">
                <div className="zoom">
                    <img className="CardRecipeImg" alt={props.recipe}
                         src={props.img}/>
                </div>
                <h3>{props.recipe}</h3>
                <div className="CardRecipeButton">
                    <Button name={props.timeCooking} icon="https://img.icons8.com/ios-glyphs/344/restaurant.png"/>
                    <Button name={props.categories} icon="https://img.icons8.com/ios-glyphs/344/sport-stopwatch.png"/>
                </div>
            </div>
        </div>
    );
}

export default CardRecipe;