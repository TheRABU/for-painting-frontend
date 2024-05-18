import Banner from "../../Components/Banner/Banner";
import Carousel from "../../Components/Carousel/Carousel";
import CraftAndArtSection from "../../Components/CraftsCard/CraftAndArtSection";
import ReviewComponent from "../../Components/Extra-sections/ReviewComponent";
import TimelineComponent from "../../Components/Extra-sections/TimelineComponent";

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
      <div>
        <h3 className="text-center font-bold text-3xl dark:bg-gray-100 dark:text-gray-800">
          Client satisfaction is our Motto
        </h3>
        <ReviewComponent />
      </div>
      <div>
        <TimelineComponent />
      </div>
    </>
  );
};

export default Homepage;
