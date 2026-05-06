import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
      return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
                  <div className="text-center max-w-md">

                        {/* Big 404 */}
                        <h1 className="text-8xl font-extrabold text-primary mb-4">
                              404
                        </h1>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                              Oops! Page not found
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 mb-6">
                              The page you are looking for might have been removed, renamed, or doesn’t exist.
                        </p>

                        {/* Button */}
                        <Link
                              to="/"
                              className="inline-block px-6 py-3 bg-primary hover:bg-primary-focus rounded-lg font-medium transition duration-300"
                        >
                              Go Back Home
                        </Link>

                  </div>
            </div>
      );
};

export default ErrorPage;