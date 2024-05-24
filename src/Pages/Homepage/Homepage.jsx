import Banner from "../../Components/Banner/Banner";
import Carousel from "../../Components/Carousel/Carousel";
import CraftAndArtSection from "../../Components/CraftsCard/CraftAndArtSection";
import ReviewComponent from "../../Components/Extra-sections/ReviewComponent";
import TimelineComponent from "../../Components/Extra-sections/TimelineComponent";
import "aos/dist/aos.css";
import AOS from "aos";

import { useEffect } from "react";
const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <Banner />
      </div>
      <div data-aos="fade-up">
        <Carousel />
      </div>
      <div data-aos="fade-down" id="craft_section">
        <CraftAndArtSection />
      </div>
      <div data-aos="zoom-in-up">
        <h3 className="text-center font-bold text-3xl dark:bg-gray-100 dark:text-gray-800">
          Client satisfaction is our Motto
        </h3>
        <ReviewComponent />
      </div>
      <div data-aos="fade-up">
        <TimelineComponent />
      </div>
    </>
  );
};

export default Homepage;
