import NavBar from "./Components/NavBar";
import "./reset.css"
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import RecipesOfTheDay from "./Components/RecipesOfTheDay";
function App() {
    return (
        <>
            <NavBar/>
            <Hero/>
            <Categories />
            <RecipesOfTheDay />
        </>
    );
}

export default App;
