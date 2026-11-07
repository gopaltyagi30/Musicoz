import { api } from "../../../config/api";

export const searchSongsApi = async (query) => {
  const res = await api.get("/tracks/search", {
    params: {
      query: query,
      limit: 20,
    },
  });
  console.log(res.data);
  
  return res.data;
};