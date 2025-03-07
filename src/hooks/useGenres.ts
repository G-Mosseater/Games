import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FetchGenreResponse {
//   count: number;
//   results: Genre[];
// }

const useGenres = () => {


    useData<Genre>('/genre')

// all of this was replace with the useData() which returns endpoints
// here we just tell useData to return the genre endpoint and export the Props to be used in GenreList
// all of this can pe used in the useGames.ts




    // const [genre, setGenre] = useState<Genre[]>([]);
    // const [error, setError] = useState("");
    // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //   const controller = new AbortController();
    //   setLoading(true);
    //   apiClient
    //     .get<FetchGenreResponse>("/genres", { signal: controller.signal })
    //     .then((res) => {
    //       setGenre(res.data.results);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       if (err instanceof CanceledError) return;
    //       setError(err.message);
    //       setLoading(false);
    //     });

    //   return () => controller.abort();
    // }, []);

    // return { genre, error, isLoading };
  };


export default useGenres;
