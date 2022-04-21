import "./CardRecipe.css"
import Button from "../button";

function CardRecipe(props) {
    return (
        <div className="CardRecipe">
            <div className="CardRecipeContainer">
                <div className="zoom">
                    <img className="CardRecipeImg" alt={props.recipe}
                         src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                </div>
                <h3>{props.recipe}</h3>
                <div className="CardRecipeButton">
                    <Button name="30 Minutes" icon="https://img.icons8.com/ios-glyphs/344/restaurant.png"/>
                    <Button name="Chicken" icon="https://img.icons8.com/ios-glyphs/344/sport-stopwatch.png"/>
                </div>
            </div>
        </div>
    );
}

export default CardRecipe;