import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shard/Navbar/Navbar";
import Footer from "../shard/Footer/Footer";

const Main = () => {

    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;