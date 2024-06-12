import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxious from "../../../hooks/useAxious";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNews = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxious();

    const onSubmit = async (data) => {
        console.log(data);

        // Prepare the form data
        // const formData = new FormData();
        // formData.append('image', data.imgSrc[0]);

        const imageFile = { image: data.imgSrc[0] }

        // Post the form data to imgbb
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const newsItem = {
                title: data.title,
                description: data.description,
                imgSrc: res.data.data.display_url
            }
            const newsRes = await axiosSecure.post('/news', newsItem)
            if (newsRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is added to the news.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log(res.data);
    }

    return (
        <div>
            <h2 className="text-2xl text-center mt-4">Add New News</h2>
            <div className="p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">News Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="News Title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">News Details*</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="News Description"></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register('imgSrc', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn btn-success">
                        Add News
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNews;
