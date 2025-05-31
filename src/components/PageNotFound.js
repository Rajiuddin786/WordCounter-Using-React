import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <main>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 pb-20">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-2">Oops! Page Not Found</p>
      <p className="text-gray-500 mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to="/"

      >
        Go to Homepage
      </Link>
    </div>
    </main>
  );
};
