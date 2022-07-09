// imports
import { useState } from "react";
import { useEffect } from "react";

const useSearch = (url) => {
  // states
  const [drinks, setDrinks] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  // fetch drinks on URL change
  useEffect(() => {
    setError(null);
    setPending(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDrinks(data.drinks);
        setPending(false);
      } catch (error) {
        setError(error);
        setPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { drinks, error, pending };
};

export default useSearch;
