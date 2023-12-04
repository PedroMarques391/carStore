import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Search from '../components/Search';

function SearchResult() {
  const [cars, setCars] = useState([]);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchValue = searchParams.get('q');

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('../../data/db.json');
      const dataJson = await res.json();

      const searchCars = dataJson.filter((car) => {
        const carInfo = `${car.name} ${car.year}`;
        return carInfo.toLowerCase().includes(searchValue.toLowerCase())
        || car.type.toLowerCase().includes(searchValue.toLowerCase());
      });
      setCars(searchCars);
    };
    getData();
  }, [searchValue]);

  return (
    <>
      <Link className="relative" to="/garage">
        <p className="text-4xl ml-3 md:ml-14 absolute p-5"><i className="fa-solid fa-arrow-left" /></p>
        <p className="text-transparent font-bold flex items-end p-4 md:ml-10 absolute h-28 hover:text-black transition duration-700">Garagem</p>
      </Link>
      <div className="mt-16 tablet:mt-28 flex flex-col items-center">
        <div className={`${cars.length === 0 ? 'hidden' : 'font-mono text-2xl capitalize p-2 text-center md:mb-20'}`}>
          <p>{`Exibindo ${cars.length}`}</p>
          <p className="text-center">
            resultados para
            <p className="font-bold text-red-600 text-3xl">{`${searchValue}`}</p>
          </p>
        </div>
        <section className="flex flex-wrap justify-center gap-5 md:w-4/6 tablet:w-5/6 w-full">
          {cars.length !== 0 ? cars.map((car) => (
            <div className="flex flex-col w-[45%] md:w-[23%] bg-white rounded-xl overflow-hidden justify-between mt-5 shadow-2xl shadow-black tablet:w-[30%]" key={car.id}>
              <img className="h-40 md:h-44" src={`${car.imagem}.jpg`} alt="Carro" />
              <section className="flex flex-col justify-between p-3 h-44">
                <p className="font-semibold">{car.name}</p>
                <p className="text-slate-500 mb-5">{car.specifications}</p>
                <h2 className="font-bold text-xl">{`R$${car.price}`}</h2>
                <div className="flex justify-between">
                  <p>{car.year}</p>
                  <p>{`${car.km}KM`}</p>
                </div>
              </section>
              <div className="flex justify-center my-2">
                <Link
                  className="rounded-lg text-center bg-black text-white w-5/6 p-2 uppercase hover:text-red-500 duration-1000"
                  to={`/garage/${car.id}/${car.name}`}
                >
                  Mais infomações

                </Link>
              </div>
            </div>
          )) : (
          // Código modificado para a div "Nenhum resultado"
            <div className="h-[62vh] flex flex-col items-center justify-center md:mt-3">
              <p className="text-xl text-gray-600 text-center">
                {`Nenhum resultado encontrado para "${searchValue}".`}
              </p>
              <p className="mt-2 text-sm text-gray-600 mb-5">
                Tente ajustar sua pesquisa ou explore outras opções.
              </p>
              <Search />
            </div>

          )}
        </section>
      </div>
    </>
  );
}

export default SearchResult;
