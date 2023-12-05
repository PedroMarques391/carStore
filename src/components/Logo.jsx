import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <div className="text-center text-2xl p-2 font-mono tracking-widest">
      <NavLink to="/carStore/">
        <p className="text-red-600">
          Car
          <span className="text-white text-3xl">Store</span>
        </p>
      </NavLink>
    </div>
  );
}

export default Logo;
