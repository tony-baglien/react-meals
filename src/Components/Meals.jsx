import MealItem from "./MealItem.jsx";
import useHttp from "../Hooks/useHttp.js";
import Error from "./Error.jsx";


const requestConfig = {};

const Meals = () => {
  console.log(import.meta.env)

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(import.meta.env.VITE_API_MEALS_URL,requestConfig,[]);
  
  if (isLoading) {
    return <p className="center">Fetching meals...</p>
  }

  if (error) {
    return <Error title="failed to fetch meals" message={error} />
  }
  return (
    <ul id="meals">
      {loadedMeals.map((item) => {
        return <MealItem key={item.id} meal={item} />;
      })}
    </ul>
  );
};
export default Meals;
