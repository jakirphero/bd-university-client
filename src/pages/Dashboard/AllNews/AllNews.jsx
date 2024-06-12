import { Link } from "react-router-dom";
import useNews from "../../../hooks/useNews";
import Swal from "sweetalert2";
import useAxious from "../../../hooks/useAxious";

const AllNews = () => {

    const [news,loading, refetch] = useNews();
    const axiosSecure = useAxious();

    const handleDeleteNews = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/news/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    if(loading){
                        <span className="loading loading-spinner loading-xs"></span>
                    }
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div>
            <div className="flex justify-between p-10">
                <div>
                    <h2 className="text-2xl">All News: {news.length}</h2>
                </div>
                <div>
                    <Link to={'/dashboard/addNews'}><button className="btn btn-outline btn-accent">Add News</button></Link>
                </div>
            </div>
            <div className="overflow-x-auto px-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Details</th>
                            <th>update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            news.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.imgSrc} alt="News IMG" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">update</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleDeleteNews(item)}className="btn btn-ghost btn-xs bg-red-300">delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllNews;