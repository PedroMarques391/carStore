import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FilterTypes from './FilterTypes';

function MainCatalog({ size }) {
  const [cars, setCars] = useState([]);
  const [originalCatalog, setOriginalCatalog] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/carStore/db.json');
      const dataJson = await res.json();
      setCars(dataJson);
      setOriginalCatalog(dataJson);
    };
    getData();
  }, []);

  const handleSubmit = ((type) => {
    const filterCars = originalCatalog.filter((car) => car.type === type);
    const reset = type === 'todos' ? setCars(originalCatalog) : setCars(filterCars);
    return reset;
  });

  const isHomePage = pathname === '/';

  return (
    <>
      <div className={`${isHomePage && 'hidden'} w-full tablet:w-full md:w-3/5 gap-5 flex flex-wrap md:flex-nowrap justify-center mt-5 items-center p-5`}>
        <FilterTypes handleSubmit={handleSubmit} type="sedan" img="sedan" />
        <FilterTypes handleSubmit={handleSubmit} type="hatch" img="hatch" />
        <FilterTypes handleSubmit={handleSubmit} type="todos" img="logos" />
        <FilterTypes handleSubmit={handleSubmit} type="SUV" img="SUV" />
        <FilterTypes handleSubmit={handleSubmit} type="pickup" img="picape" />

      </div>
      <section className="flex flex-wrap justify-around md:w-4/6 tablet:w-4/5">
        {cars.slice(0, size).map((car) => (
          <div className="flex flex-col w-[45%] tablet:w-[30%] md:w-[23%] bg-white rounded-xl overflow-hidden justify-between mt-5 shadow-2xl shadow-black" key={car.id}>
            <img className="h-32 md:h-44" src={`/carStore/${car.imagem}.jpg`} alt="Carro" />
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
        ))}
      </section>

    </>
  );
}

export default MainCatalog;
