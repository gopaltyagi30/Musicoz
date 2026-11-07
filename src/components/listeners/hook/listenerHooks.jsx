import {useQuery } from "@tanstack/react-query";
import { getTrendingSong } from "../api/TrendingSongApi";
import { useEffect, useState } from "react";
import { searchSongsApi } from "../api/searchApi";

export const useTrendingSong = ()=>{
    const [page,setPage] = useState(0);
    const limit = 10;
    const {data,isPending,error} = useQuery({
        queryKey:["trendingSongs",page],
        queryFn: ()=>getTrendingSong(page,limit),
    })
    return{
        data,
        isPending,
        error,
        page,
        setPage,
        limit
    }
}
export const useSearchSongs = () => {
    const [search, setSearch] = useState(null);
    const [debounceSearch, setDebounceSearch] = useState(null);
    useEffect(()=>{
        let timeout = setTimeout(()=>{
            setDebounceSearch(search);
        },1000)
        return ()=>clearTimeout(timeout)
    },[search])
 const {data, isPending}  =  useQuery({
    queryKey: ["searchSongs", debounceSearch],
    queryFn: () => searchSongsApi(debounceSearch),
    enabled: debounceSearch?.trim().length > 0,
  });
  return{
    data,isPending,search,setSearch
  }
};