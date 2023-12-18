// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 text-gray-800">
      <div className="text-center h-screen">
        <h1 className="text-6xl mt-16 md:my-16 md:text-[450px] font-extrabold text-red-600" style={{ textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)' }}>
          404
        </h1>
        <p className="text-xl md:text-2xl mt-10 mb-12">
          A página que você está procurando pode ter sido movida,
          deletada ou possivelmente nunca existiu.
        </p>
        <Link
          to="/"
          className="text-lg text-white bg-red-600 px-6 py-3 rounded-xl
         hover:bg-red-700 transition duration-300"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
