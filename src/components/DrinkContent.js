// imports
import { Link } from "react-router-dom";

export const DrinkContent = ({ drinks, error, pending }) => {
  return (
    // Content Wrapper
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      {/* Error if available */}
      {error && <div>Error: Something Went Wrong!</div>}

      {/* Pending if available */}
      {pending && <div>Loading...</div>}

      {/* Drink */}
      {drinks &&
        drinks.map((drink) => (
          <div key={drink.idDrink}>

            {/* is Alcoholic */}
            <div className="mb-10 border-t border-b divide-y">
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <p className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Alcoholic
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <p className="text-gray-700">
                    {drink.strAlcoholic ? drink.strAlcoholic : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="mb-10 border-t border-b divide-y">
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <p className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Category
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <p className="text-gray-700">
                    {drink.strCategory ? drink.strCategory : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Glass type */}
            <div className="mb-10 border-t border-b divide-y">
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <p className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Glass
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <p className="text-gray-700">
                    {drink.strGlass ? drink.strGlass : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-10 border-t border-b divide-y">
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <p className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Ingredients
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <p className="text-gray-700">
                    {drink.strIngredient1 ? `• ${drink.strIngredient1}` : "N/A"}
                    {drink.strIngredient2 && ` • ${drink.strIngredient2}`}
                    {drink.strIngredient3 && ` • ${drink.strIngredient3}`}
                    {drink.strIngredient4 && ` • ${drink.strIngredient4}`}
                    {drink.strIngredient5 && ` • ${drink.strIngredient5}`}
                    {drink.strIngredient6 && ` • ${drink.strIngredient6}`}
                    {drink.strIngredient7 && ` • ${drink.strIngredient7}`}
                    {drink.strIngredient8 && ` • ${drink.strIngredient8}`}
                    {drink.strIngredient9 && ` • ${drink.strIngredient9}`}
                    {drink.strIngredient10 && ` • ${drink.strIngredient10}`}
                    {drink.strIngredient11 && ` • ${drink.strIngredient11}`}
                    {drink.strIngredient12 && ` • ${drink.strIngredient12}`}
                    {drink.strIngredient13 && ` • ${drink.strIngredient13}`}
                    {drink.strIngredient14 && ` • ${drink.strIngredient14}`}
                    {drink.strIngredient15 && ` • ${drink.strIngredient15}`}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="mb-10 border-t border-b divide-y">
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <p className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Instructions
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <p className="text-gray-700">
                    {drink.strInstructions ? drink.strInstructions : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Measure */}
            <div className="mb-10 border-t border-b divide-y">
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <p className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Measure
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <p className="text-gray-700">
                    {drink.strMeasure1 ? `• ${drink.strMeasure1}` : "N/A"}
                    {drink.strMeasure2 && ` • ${drink.strMeasure2}`}
                    {drink.strMeasure3 && ` • ${drink.strMeasure3}`}
                    {drink.strMeasure4 && ` • ${drink.strMeasure4}`}
                    {drink.strMeasure5 && ` • ${drink.strMeasure5}`}
                    {drink.strMeasure6 && ` • ${drink.strMeasure6}`}
                    {drink.strMeasure7 && ` • ${drink.strMeasure7}`}
                    {drink.strMeasure8 && ` • ${drink.strMeasure8}`}
                    {drink.strMeasure9 && ` • ${drink.strMeasure9}`}
                    {drink.strMeasure10 && ` • ${drink.strMeasure10}`}
                    {drink.strMeasure11 && ` • ${drink.strMeasure11}`}
                    {drink.strMeasure12 && ` • ${drink.strMeasure12}`}
                    {drink.strMeasure13 && ` • ${drink.strMeasure13}`}
                    {drink.strMeasure14 && ` • ${drink.strMeasure14}`}
                    {drink.strMeasure15 && ` • ${drink.strMeasure15}`}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-10 border-t border-b divide-y">
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <p className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                      Tags
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <p className="text-gray-700">
                    {drink.strTags ? drink.strTags : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Homepage */}
            <div className="text-center">
              <Link
                to="/"
                aria-label="Home"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Goto Homepage
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
