import { Link } from "react-router-dom";

export const UnauthorizedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-red-500">401 Unauthorized</h1>
        <p className="text-gray-700 mt-4">
          You do not have permission to access this page.
        </p>
        <Link
          to='/'
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};
