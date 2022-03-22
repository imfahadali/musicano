import { useState, useEffect } from "react";
const useFetchProducts = (type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://musicano-5a4b7-default-rtdb.firebaseio.com/products/${type}.json`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const resData = await res.json();
        setProducts(resData);
        return resData;
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };

    fetchingData().then((r) => setIsLoading(false));
  }, []);

  return { isLoading, error, products };
};

export default useFetchProducts;
