export const DrinkHeader = ({ drinks, error, pending }) => {
  console.log(drinks);
  return (
    <>
      {/* Error if available */}
      {error && <div>Error: Something Went Wrong!</div>}

      {/* Pending if available */}
      {pending && <div>Loading...</div>}

      {/* Drinks */}
      {drinks &&
        drinks.map((drink) => (
          <div className="relative h-48 md:h-64 lg:h-96" key={drink.idDrink}>
            <img
              src={drink.strDrinkThumb}
              className="absolute inset-0 object-cover object-center w-full h-full"
              alt="food-project-drink-hero"
            />
            <div className="relative bg-gray-900 bg-opacity-75 h-full">
              <div className="flex items-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full">
                <h1 className="text-left font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl sm:leading-none">
                  {drink.strDrink}
                </h1>
              </div>
            </div>
          </div>
          
        ))}
    </>
  );
};
