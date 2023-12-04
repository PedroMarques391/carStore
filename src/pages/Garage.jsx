import MainCatalog from '../components/MainCatalog';
import Search from '../components/Search';

function Garage() {
  return (
    <section className="flex items-center flex-col mt-20">
      <div className="w-4/5 tablet:w-4/5 tablet:mt-10 md:w-2/5 my-2">
        <Search />
      </div>

      <MainCatalog size={100} />
    </section>
  );
}

export default Garage;
