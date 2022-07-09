// components
import { Navbar } from "../components/Navbar";
import { DrinkHeader } from "../components/DrinkHeader";
import { Footer } from "../components/Footer";
import { DrinkContent } from "../components/DrinkContent";

// hooks
import useSearch from "../hooks/useSearch";

// useParams
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  // Fetching drink using "id" from useSearch hook
  const { drinks, error, pending } = useSearch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  return (
    <div>
      <Navbar />
      <DrinkHeader drinks={drinks} error={error} pending={pending} />
      <DrinkContent drinks={drinks} error={error} pending={pending} />
      <Footer />
    </div>
  );
};
export default Details;
