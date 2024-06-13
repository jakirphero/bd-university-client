import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useNotice = () => {
    const axiosPublic = useAxiosPublic();

    const { data: notices = [], isPending: loading, refetch } = useQuery({
        queryKey: ['notices'],
        queryFn: async () => {
            const res = await axiosPublic.get('/notices')
            return res.data
        }
    })

    return [notices, loading, refetch]
};

export default useNotice;