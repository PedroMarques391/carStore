function FilterTypes({
  handleSubmit, type, img,
}) {
  return (
    <button onClick={() => handleSubmit(type)} name={type} className="relative w-[45%] md:w-1/5 flex justify-center flex-wrap items-end rounded-xl overflow-hidden hover:-translate-y-4 md:hover:-translate-y-7 transition duration-700">
      <img className="md:h-36 w-full" src={`/${img}.jpg`} alt="" />
      <p className="absolute font-bold text-2xl mb-1 bg-white bg-opacity-50 w-full text-center uppercase">{type}</p>
    </button>
  );
}

export default FilterTypes;
