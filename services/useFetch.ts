import { TManagedError } from "@/types/moviesError";
import { useEffect, useState } from "react";

export const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  autoFetch = true
) => {
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState<null | unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetchFunction();
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
    const reset = () => {
      setData(null);
      setError(null);
      setIsLoading(false);
    };

    useEffect(() => {
      if (autoFetch) fetchData();
    }, []);

    return {
      data,
      reset,
      setData,
      error,
      isLoading,
      fetchData,
    };
  };
};
