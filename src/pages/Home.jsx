import Banner from '../assets/banner3.jpg';
import BannerMD from '../assets/BannerMD.jpg';
import BannerMD2 from '../assets/BannerMD2.jpg';
import MainCatalog from '../components/MainCatalog';
import Search from '../components/Search';

function Home({ isOpen }) {
  const downBanner = isOpen ? 'mt-14' : 'mt-44';
  return (
    <>
      <section>
        <div className={`flex h-28 md:h-auto justify-center ${downBanner} transition duration-1000`}>
          <img className="md:hidden" src={Banner} alt="Banner" />
          <div className="hidden md:flex justify-between items-center w-full bg-black pt-5">
            <img className="w-[25%]" src={BannerMD} alt="Banner" />
            <p className="text-red-700 w-[50%] text-center p-10 font-bold text-4xl italic text-gradient animate-gradient">É uma satisfação atender você</p>
            <img className="w-[25%]" src={BannerMD2} alt="Banner" />
          </div>

        </div>
        <div className="w-full mt-2 flex-col flex items-center">
          <div className="w-4/5 tablet:w-4/5 md:w-1/2 p-2">
            <Search />
            <h1 className="flex justify-center font-bold text-center md:text-xl uppercase mt-2 md:mt-5 text-black">Venha conhecer nossas Principais ofertas!!</h1>
          </div>
          <MainCatalog size={8} />
        </div>
      </section>
    </>
  );
}

export default Home;
