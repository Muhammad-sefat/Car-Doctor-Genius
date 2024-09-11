import PopularProduct from "../PopularProduct";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import ContactSection from "./ContactSection";
import Features from "./Features";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <ContactSection />
      <PopularProduct />
      <Team></Team>
      <Features></Features>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
