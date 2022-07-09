// imports
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactImageAppear from 'react-image-appear';

// hooks
import useSearch from "../hooks/useSearch";

export const CardContainer = () => {
  // Search input reference
  const searchRef = useRef();

  // states
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  // fetching Drinks using Search hook
  const { drinks, error, pending } = useSearch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
  );
  
  // handle Search Query
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchRef.current.value);
  };

  return (
    // Card Container Wrapper
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      {/* Search Container */}
      <div className="w-full mb-10 md:mx-auto sm:text-center md:mb-12">

        {/* Heading */}
        <h2 className="max-w-lg mb-6 md:mb-16 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Drinks</span>
          </span>{" "}
          / Cocktails
        </h2>

        {/* Search Form */}
        <form
          className="flex flex-col items-center w-full mb-4 lg:mb-16 md:flex-row md:justify-start"
          onSubmit={handleSearch}
        >
          <input
            placeholder="Eg: Mojito"
            required=""
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={searchRef}
            className="flex-grow w-full max-w-xl h-12 px-4 mb-3 transition duration-200 text-deep-purple-accent-400 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-deep-purple-acccent-400"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-deep-purple-acccent-400 focus:outline-none md:mr-10"
          >
            Search
          </button>

          <select
            className="w-auto p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-deep-purple-accent-400 ml-auto my-5"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Shake">Shake</option>
            <option value="Cocoa">Cocoa</option>
            <option value="Shot">Shot</option>
            <option value="Homemade Liqueur">Homemade Liqueur</option>
            <option value="Beer">Beer</option>
            <option value="Soft Drink">Soft Drink</option>
            <option value="Other/Unknown">Other / Unknown</option>
            <option value="Coffee / Tea">Coffee / Tea</option>
            <option value="Punch / Party Drink">Punch / Party Drink</option>
          </select>
        </form>
      </div>

      {/* Cards Container */}
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">

        {/* Error if available */}
        {error && <div>Error: Something Went Wrong!</div>}

        {/* Pending if available */}
        {pending && <div>Loading...</div>}

        {/* Drinks */}
        {drinks &&
          drinks
            .filter((drink) => drink.strCategory.includes(category))
            .map((drink) => (
              <Link
                to={`drink/${drink.idDrink}`}
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                key={drink.idDrink}
              >
                <div className="flex flex-col h-full">
                  <ReactImageAppear
                    src={drink.strDrinkThumb}
                    className="object-cover w-full h-48"
                    alt={drink.strDrink}
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        {`${drink.strDrink} - ${drink.strCategory}`}
                      </h6>
                      <p className="text-sm text-gray-900 text-left">
                        {`${drink.strInstructions.slice(0, 50)}...`}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

            ))}
      </div>
    </div>
  );
};
