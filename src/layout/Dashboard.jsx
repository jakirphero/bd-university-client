import { FaAd, FaAmazonPay, FaBookmark, FaForumbee, FaHome, FaPaypal, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300  pt-4">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/allUsers'}><FaUsers></FaUsers>All Users</NavLink></li>
                                <li><NavLink to={'/dashboard/Dealing'}><FaPaypal></FaPaypal>university Dealings</NavLink></li>
                                <li><NavLink to={'/dashboard/addNews'}><FaAd></FaAd>Add News</NavLink></li>
                                <li><NavLink to={'/dashboard/addNotices'}><FaBookmark></FaBookmark>Add Notices</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to={'/dashboard/dashboardHome'}><FaHome></FaHome>Dashboard</NavLink></li>
                                <li><NavLink to={'/'}><FaAmazonPay></FaAmazonPay>Pay Bile</NavLink></li>
                                <li><NavLink to={'/dashboard/bilHistory'}><FaPaypal></FaPaypal>Bile History</NavLink></li>
                                <li><NavLink to={'/'}><FaForumbee></FaForumbee>Exm Form</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;