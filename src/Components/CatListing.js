import CategoriesButton from "./CategoriesButton";
import {data} from "../Data/Data"


export default function CatListing(props) {
    return (
        <div className="CatListing">
            {data.slice(0,6).map((data) => (
                <CategoriesButton
                key={data.id}
                name={data.name}
                img={data.img}
                gradient={data.gradient}
                />
            ))}
        </div>
    );
}



