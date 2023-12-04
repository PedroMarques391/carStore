import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Car() {
  const { id } = useParams();
  const [car, setCars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('../../data/db.json');
      const JSON = await res.json();
      const selectedCar = JSON.find((carObject) => carObject.id == id);
      setCars(selectedCar);
    };
    getData();
  }, []);
  const { details } = car;

  const handleClick = ((e) => {
    e.preventDefault();
    const message = `Olá, fiquei interessado no ${car.name} ${car.specifications} ID: ${car.id}. Ainda está disponivel?`;
    const number = 91985480955;
    const url = `https://api.whatsapp.com/send?1=pt_BR&phone=${number}&text=${message}`;
    window.open(url, '_blank');
  });

  return (
    <>
      <div className="mt-24 mx-5 md:p-2 border-4 border-red-600 rounded-2xl overflow-hidden">

        <section className="flex flex-col md:flex-row w-full md:w-4/5 mx-auto my-2 md:border border-red-700 p-10 tablet:w-full tablet:border-transparent">
          <div className="flex flex-col justify-center md:items-start items-center md:p-5 md:pl-[5%] w-full md:w-1/4 font-mono text-xl md:text-3xl md:tracking-wider leading-7 md:leading-10 md:border border-red-700 border-r-transparent tablet:text-xl">
            <p>{car.name}</p>
            <p>{car.specifications}</p>
            <p>{car.year}</p>
            <p>
              {car.km}
              {' '}
              KM
            </p>
            <p>Por apenas:</p>
            <p>
              R$
              {car.price}
            </p>
          </div>

          <div className="w-full md:w-2/4 flex justify-center md:border border-red-700 border-x-transparent">
            <img className="md:h-96 w-full" src={`/${car.imagem}.png`} alt="Carro" />

          </div>

          <div className="flex flex-col justify-center items-center p-5 w-full md:w-1/4 leading-6 md:border border-red-700 border-l-transparent">
            <ul className="list-disc">
              {details && details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <button onClick={handleClick} className="border rounded-2xl bg-black text-white p-2 md:p-1 mt-7 w-1/2 md:w-36 hover:text-red-600 transition duration-700">Eu quero</button>
          </div>

        </section>
      </div>

    </>
  );
}

export default Car;
