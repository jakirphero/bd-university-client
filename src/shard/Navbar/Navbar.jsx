import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUser } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })

    }
    const navItem = <>
        <li className="relative group"><Link to={'/'}>Home</Link></li>
        <li><Link to={'/notices'}>Notices</Link></li>
        {
            isAdmin ?
                <>
                    <li><Link to={'/dashboard/adminHome'}>Dashboard</Link></li>

                </> :
                <>
                    <li><Link to={'/dashboard/dashboardHome'}>Dashboard</Link></li>
                </>
        }
        {user ?
            <>
                <li><Link><button onClick={handleLogOut}>Log Out</button></Link></li>
            </>
            :
            <>
                <li><Link to={'/login'}>Student Login</Link></li>
            </>
        }
        <li><Link to={'/login'}>University Login</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-50 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-56">
                        {navItem}
                    </ul>
                </div>
                <h2 className="text-2xl font-bold uppercase">bd-university</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <Link to={'/dashboard/dashboardHome'}><FaUser className="mr-2 border-2 rounded-xl text-3xl"></FaUser></Link><small>{user.email}</small>
                    </>
                    :
                    <>
                        <Link to={'/login'}><button className="btn btn-ghost">LogIn</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;