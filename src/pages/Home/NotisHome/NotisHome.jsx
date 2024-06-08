
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import NotisHomeCard from "./NotisHomeCard";
import useAxious from "../../../hooks/useAxious";
import { useEffect, useState } from "react";

const NotisHome = () => {
    const [notices, setNotices] = useState([]);
    const axiosSecure = useAxious();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get('/notices')
            .then(res => {
                setNotices(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, []);

    if (loading) {
        <span className="loading loading-ring loading-xs"></span>
    }

    const topNotices = notices.filter(item => item.category === 'top')

    return (
        <div className="container mx-auto">
            <SectionTitle heading={'notices'}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 my-4">
                {
                    topNotices.map(items => <NotisHomeCard
                        key={items.id}
                        items={items}
                    ></NotisHomeCard>)
                }
            </div>
        </div>
    );
};

export default NotisHome;