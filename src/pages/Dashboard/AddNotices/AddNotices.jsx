import { useForm } from "react-hook-form";
import useAxious from "../../../hooks/useAxious";
import Swal from "sweetalert2";

const AddNotices = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxious();
    const onSubmit = (data) => {
        const noticesInfo = {
            name: data.name,
            category: data.category,
            details: data.details
        }
        axiosSecure.post('/notices', noticesInfo)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${data.name} add to database`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-2xl text-center mt-4">Add Notice</h2>
            <div className="p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">NoticeTitle*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Notice Title"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    {/* category */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="default" {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a category</option>
                            <option value="top">top</option>
                            <option value="another">another</option>
                        </select>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Notice Details*</span>
                        </label>
                        <textarea {...register('details')} className="textarea textarea-bordered h-24" placeholder="News Details"></textarea>
                    </div>
                    <button className="btn btn-success">
                        Add Notice
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNotices;