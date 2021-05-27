import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  loading: boolean;
  data?: T;
  error?: string;
}

const useFetch = <T>(
  fn: () => Promise<T>
): [data?: T, loading?: boolean, error?: string] => {
  const [state, setState] = useState<UseFetchResult<T>>({
    loading: true,
  });

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      try {
        const data = await fn();
        setState({
          loading: false,
          data: data,
        });
      } catch (error) {
        setState({
          loading: false,
          error: error.message || "Błąd serwera",
        });
      }
    };
    fetch();
  }, []);

  return [state.data, state.loading, state.error];
};

export default useFetch;
