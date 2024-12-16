import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-red-500">404 Not Found</h1>
        <p className="text-gray-700 mt-4">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};
