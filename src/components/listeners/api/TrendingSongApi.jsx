import axios from "axios"
import { api } from "../../../config/api";

 export const getTrendingSong = async ()=> {
    try {
        const res = await api.get("/tracks/trending?limit=10");
        return res.data;
        
    } catch (error) {
        console.log("trending song error",error);
        
    }
}