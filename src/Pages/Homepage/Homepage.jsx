import Banner from "../../Components/Banner/Banner";
import Carousel from "../../Components/Carousel/Carousel";
import CraftAndArtSection from "../../Components/CraftsCard/CraftAndArtSection";

const Homepage = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <CraftAndArtSection />
      </div>
    </>
  );
};

export default Homepage;
