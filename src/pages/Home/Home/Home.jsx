import Banner from "../Banner/Banner";
import Chancellor from "../Chancellor/Chancellor";
import News from "../News/News";
import NotisHome from "../NotisHome/NotisHome";
import Total from "../Total/Total";

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner></Banner>
            <Chancellor></Chancellor>
            <Total></Total>
            <News></News>
            <NotisHome></NotisHome>
        </div>
    );
};

export default Home;