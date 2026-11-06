import {useQuery } from "@tanstack/react-query";
import { getTrendingSong } from "../api/TrendingSongApi";

export const useTrendingSong = ()=>{
    const {data,isPending,error} = useQuery({
        queryKey:["trendingSongs"],
        queryFn: getTrendingSong,
    })
    return{
        data,
        isPending,
        error
    }
}