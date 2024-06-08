import { useEffect, useState } from "react";
import NoticesCard from "./NoticesCard";
import Marquee from "react-fast-marquee";
import useAxious from "../../hooks/useAxious";
const Notices = () => {
    const [notices, setNotices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const noticesParPage = 6;
    const axiosSecure = useAxious();

    useEffect(() => {
        axiosSecure.get('/notices')
            .then(res => {
                setNotices(res.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [axiosSecure])

    if (loading) {
        <span className="loading loading-ring loading-xs"></span>
    }

    const indexOfLastNotices = currentPage * noticesParPage;
    const indexOfFirstNotices = indexOfLastNotices - noticesParPage;
    const currentNotices = notices.slice(indexOfFirstNotices, indexOfLastNotices);
    const totalPages = Math.ceil(notices.length / noticesParPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const noticeNames = notices.map(notice => notice.name).join(' | ');
    return (
        <div className="container mx-auto pt-20">
            <h2 className="text-2xl font-bold uppercase text-center">all notices here</h2>
            <Marquee speed={100} className="py-5 text-2xl capitalize">
                {noticeNames}
            </Marquee>
            <div className="grid md:grid-cols-3 gap-4 my-8">
                {
                    currentNotices.map(notice => <NoticesCard
                        key={notice._id}
                        notice={notice}
                    ></NoticesCard>)
                }
            </div>
            <div className="flex  justify-center my-8">
                <div className="join">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`join-item btn ${currentPage === i + 1 ? 'btn-active' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notices;