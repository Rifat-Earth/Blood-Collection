import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-6">
            <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="mb-6 text-sm text-gray-500">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-error text-white">
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;