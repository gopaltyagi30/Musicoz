import axios from "axios"
import { api } from "../../../config/api";

 export const getTrendingSong = async (page,limit)=> {
    try {
        const res = await api.get(`/tracks/trending?limit=${limit}&offset=${page*limit}`);
        console.log(res.data);
        return res.data;
        
        
        
    } catch (error) {
        console.log("trending song error",error);
        
    }
}
