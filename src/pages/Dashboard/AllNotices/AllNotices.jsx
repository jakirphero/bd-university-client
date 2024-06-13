import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxious from "../../../hooks/useAxious";
import useNotice from "../../../hooks/useNotice";

const AllNews = () => {

    const [notices, loading, refetch] = useNotice();
    const axiosSecure = useAxious();
    console.log(notices)
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
                const res = await axiosSecure.delete(`/notices/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    if (loading) {
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
                    <h2 className="text-2xl">All News: {notices.length}</h2>
                </div>
                <div>
                    <Link to={'/dashboard/addNotice'}><button className="btn btn-outline btn-accent">Add Notice</button></Link>
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
                            <th>Name</th>
                            <th>Details</th>
                            <th>Category</th>
                            <th>update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notices.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.details}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteNews(item)} className="btn btn-ghost btn-xs bg-red-300">delete</button>
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