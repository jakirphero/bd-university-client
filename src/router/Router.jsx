import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Notices from "../pages/Notices/Notices";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashHome from "../pages/Dashboard/DashHome/DashHome";
import History from "../pages/Dashboard/BilHistory/History";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ErrorPage from "../component/Error/ErrorPage";
import AdminHome from "../pages/Dashboard/DashHome/AdminHome";
import AdminRoute from "./AdminRoute";
import AllNews from "../pages/Dashboard/AllNews/AllNews";
import AddNews from "../pages/Dashboard/AddNews/AddNews";
import AllNotices from "../pages/Dashboard/AllNotices/AllNotices";
import AddNotices from "../pages/Dashboard/AddNotices/AddNotices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "notices",
                element: <Notices></Notices>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "login",
                element: <Login></Login>
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "dashboardHome",
                element: <DashHome></DashHome>
            },
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "bilHistory",
                element: <History></History>
            },
            //admin route
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "addNews",
                element: <AdminRoute><AddNews></AddNews></AdminRoute>
            },
            {
                path: "allNotice",
                element: <AdminRoute><AllNotices></AllNotices></AdminRoute>
            },
            {
                path: "addNotice",
                element: <AdminRoute><AddNotices></AddNotices></AdminRoute>
            },
            {
                path: "allNews",
                element: <AdminRoute><AllNews></AllNews></AdminRoute>
            }

        ]
    }
]);

export default router;