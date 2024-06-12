import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useAxious from "../../../hooks/useAxious";

const News = () => {
    const [news, setNews] = useState([]);
    const axiosSecure = useAxious();
    const [loading, setLoading] = useState(true);
    const [expandedNewsId, setExpandedNewsId] = useState(null);

    useEffect(() => {
        axiosSecure('/news')
            .then(res => {
                setNews(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [axiosSecure]);

    if (loading) {
        return <span className="loading loading-ring loading-xs"></span>;
    }

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const newsChunks = chunkArray(news, 3);

    const toggleExpand = (newsId) => {
        setExpandedNewsId(expandedNewsId === newsId ? null : newsId);
    };

    return (
        <div className="container mx-auto font-bold text-gray-800">
            <SectionTitle heading={'latest news'}></SectionTitle>
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
            >
                {newsChunks.map((chunk, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {chunk.map((newsItem) => (
                            <div key={newsItem._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={newsItem.imgSrc} alt={newsItem.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-2xl font-bold mb-2">{newsItem.title}</h2>
                                    <p>
                                        {expandedNewsId === newsItem._id ? newsItem.description : 
                                            newsItem.description.length > 100 ? newsItem.description.substring(0, 100) + '...' : newsItem.description}
                                    </p>
                                    <button onClick={() => toggleExpand(newsItem._id)} className="btn btn-outline">
                                        {expandedNewsId === newsItem._id ? 'Show less' : 'Read more'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default News;
