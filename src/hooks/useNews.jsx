import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useNews = () => {
    const axiosPublic = useAxiosPublic();

    const {data: news = [], isPending: loading, refetch} = useQuery({
        queryKey: ['news'],
        queryFn: async ()=>{
           const res = await axiosPublic.get('/news')
           return res.data
        }
    })

    return [news, loading, refetch]
};

export default useNews;