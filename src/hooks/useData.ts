import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";



interface FetchResponse<T> {
  count: number;
  results: T[];
}
                        // added Axiosrequest config and deps parameter to send another reuquest to the server, pass them to useGames component
const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {  
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal,...requestConfig })
        .then((res) => {
        setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    }, deps ? [...deps] : []);  //deps is optional, in order to spread it we have to use if else statement

    return { data, error, isLoading };
  };


export default useData;
