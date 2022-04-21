import "./CardRecipe.css"
function CardRecipe(props) {
    return (
        <div className="CardRecipe">
            {props.children}
        </div>
    );
}

export default CardRecipe;