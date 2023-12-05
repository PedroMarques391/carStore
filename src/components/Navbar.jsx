import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from './Logo';

function Navbar({ isOpen, handleToggle }) {
  const [borderBotton, setBorderBotton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBorderBotton(window.scrollY > 150);
    };
    return window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`h-14 bg-black fixed top-0 w-full z-10 md:flex md:justify-around transition ${borderBotton && 'border-b-2 border-red-600 shadow-sm shadow-red-600'} ${!isOpen && 'border-transparent shadow-none'} duration-1000 tablet:flex-col tablet:h-24`}>
      <div className="md:hidden text-white relative">
        <button className="absolute p-2 right-2" type="button" onClick={handleToggle}><i className={isOpen ? 'fa-solid fa-bars text-3xl' : 'fa-solid fa-xmark text-4xl'} /></button>
      </div>
      <div>
        <Logo />
      </div>
      <nav className={`${
        !isOpen ? 'md:hidden flex flex-col items-center bg-black text-teal-50 duration-1000 h-32 z-50'
          : 'ml-[500px] md:-mt-28 flex flex-col items-center bg-black duration-1000 invisible border-transparent'} ${borderBotton && 'border-b-2 border-red-700'}`}
      >
        <NavLink className="mobileClass" to="/carStore/">Home</NavLink>
        <NavLink className="mobileClass" to="/carStore/garage">Garagem</NavLink>
        <NavLink className="mobileClass" to="/carStore/about">About</NavLink>
      </nav>
      <nav className="hidden md:flex justify-center items-center gap-5 bg-black p-2">
        <NavLink className="navLinks" to="/carStore/">Home</NavLink>
        <NavLink className="navLinks" to="/carStore/garage">Garagem</NavLink>
        <NavLink className="navLinks" to="/carStore/about">About</NavLink>
      </nav>
    </nav>
  );
}

export default Navbar;
