import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <h2 className="text-2xl mt-4">Oops! Something went wrong.</h2>
                <p className="mt-2 text-gray-600">
                    We couldn't find the page you were looking for.
                </p>
                <Link to='/' className="mt-6 inline-bloc px-6 py-2 rounded-lg">
                    <button className="btn btn-outline">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;