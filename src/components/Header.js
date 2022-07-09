export const Header = () => {
  return (
    // Header Wrapper
    <div className="relative h-half">

      {/* Random Background images from unsplash */}
      <img
        src="https://source.unsplash.com/random/?drink"
        className="absolute inset-0 object-cover object-center w-full h-full"
        alt="food-project-hero"
      />

      {/* Header Texts */}
      <div className="relative bg-gray-900 bg-opacity-75 h-full">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="text-left max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                Best Drinks and Cocktails <br className="hidden md:block" />
                From Around{" "}
                <span className="text-deep-purple-accent-200 drop-shadow-xl shadow-white animate-pulse block">
                  The World
                </span>
              </h2>
              <p className="text-left max-w-xl mb-4 text-base text-gray-400 sm:text-xl">
                Get huge collections of drinks and cocktails recipes with proper
                steps and ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
