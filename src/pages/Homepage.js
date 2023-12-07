import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-end justify-start gap-[149px]">
      <section className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-[26px] px-0 pb-0">
        <Navbar />
        <HeroSection />
      </section>
      <main className="self-stretch overflow-hidden flex flex-col items-start justify-end gap-[57px]">
        <ServicesSection />
        <main className="self-stretch flex flex-col items-center justify-start py-0 px-px box-border gap-[61px] min-h-[3410.159912109375px]">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </main>
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
