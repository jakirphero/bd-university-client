import Swal from "sweetalert2";

const NoticesCard = ({ notice }) => {
    const { name, details, id } = notice;
    const handleNotices = () => {
        Swal.fire({
            title: 'All Notices Here',
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}...</p>
                <div className="card-actions justify-end">
                    <button onClick={handleNotices} className="btn btn-outline">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default NoticesCard;