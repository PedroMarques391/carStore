import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const { pathname } = useLocation();

  const footerFixed = pathname.startsWith('/carStore/garage/');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const handleClick = (() => {
      const message = `Olá, Fiquei interssando nos seus carros. Eu gostaria de receber as novidades da Loja. 
        Meu nome é: ${name}
        Meu email é: ${email}`;
      const number = 91985480955;
      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=${number}&text=${message}`;
      window.open(url, '_blank');
    });
    if (name === '' || email === '') {
      setEmptyName(name === '');
      setEmptyEmail(email === '');
      return;
    }

    setEmptyName(false);
    setEmptyEmail(false);
    handleClick();
    setName('');
    setEmail('');
  };

  return (
    <footer className={`bg-black mt-7 text-white flex justify-center ${footerFixed && 'md:fixed bottom-0 w-full'}`}>
      <section className="flex flex-col md:flex-row justify-between w-4/5 mt-5 tablet:flex-wrap pb-1">
        <div className="w-full md:w-1/5 order-1 tablet:w-1/2 tablet:order-1">
          <section className="p-2 text-center leading-7 border-b md:border-none">
            <h1 className="text-center font-bold">Endereço</h1>
            <h2>carStore</h2>
            <p>Rodovia BR-316, Rodovia BR 316</p>
            <p>Ananindeua - PA, 67000-000 - Coqueiro</p>
            <p>Ananindeua - Pará</p>
          </section>
          <section className="p-2 text-center leading-7">
            <h1 className="font-bold">HORÁRIO DE FUNCIONAMENTO</h1>
            <p>
              Segunda a sexta, das 8h às 18h.
            </p>
            <p>
              Sábado, das 8h às 12h.
            </p>
          </section>
        </div>
        <div className="w-full md:w-1/5 order-3 md:order-2 tablet:order-3 tablet:w-full">
          <section>
            <h1 className="text-center font-bold">Siga a gente</h1>
            <ul className="flex justify-between p-5 text-3xl items-center mt-5 tablet:justify-around">
              <li className="w-10 h-10 text-center hover:text-blue-700 duration-700">
                <a href="#" />
                <i className="fa-brands fa-facebook-f" />
              </li>
              <li className="w-10 h-10 text-center hover:text-pink-600 duration-700">
                <a href="#" />
                <i className="fa-brands fa-instagram" />
              </li>
              <li className="w-10 h-10 text-center hover:text-gray-500 duration-700">
                <a href="#" />
                <i className="fa-solid fa-x" />
              </li>
            </ul>
          </section>
          <section>
            <Logo />
            <div className="text-center p-2 tablet:text-2xl">
              <p>Todos os Direitos reservados</p>
              <p>&copy;2023 carStore</p>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/5 order-2 md:order-3 mt-5 md:mt-0 tablet:w-1/2 tablet:order-2">
          <h1 className="text-center font-bold">Fique por dentro das novidades</h1>
          <form onSubmit={handleFormSubmit} className="flex flex-col mt-2 p-5 justify-between h-52">
            <div>
              <label htmlFor="name" />
              <input
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                className={`mb-2 w-full h-8 p-2 bg-transparent border-b-2 placeholder:uppercase focus:outline-none ${emptyName && 'border-b-2 border-red-600 transition duration-300 shake'}`}
                type="text"
                placeholder="Nome"
              />

            </div>

            <div>
              <input
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className={`mb-2 w-full h-8 p-2 bg-transparent border-b-2 placeholder:uppercase focus:outline-none ${emptyEmail && 'border-b-2 border-red-600 transition duration-300 shake'}`}
                type="email"
                placeholder="Email"
              />

            </div>
            <button type="submit" className="bg-white text-black text-center py-2 mt-2 rounded-xl">Enviar</button>
          </form>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
