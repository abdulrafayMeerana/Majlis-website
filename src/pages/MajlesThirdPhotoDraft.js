import LoginForm from "../components/LoginForm";
import NationalFederalCouncilSection from "../components/NationalFederalCouncilSection";
import ElectronicServicesContainer from "../components/ElectronicServicesContainer";
import NationalCouncilNewsSection from "../components/NationalCouncilNewsSection";
import NationalFederalCouncilStrategy from "../components/NationalFederalCouncilStrategy";
import NationalFederalCouncilAgendaSe from "../components/NationalFederalCouncilAgendaSe";
import SectionCard from "../components/SectionCard";
import MediaCenterSection from "../components/MediaCenterSection";
import SectionCard1 from "../components/SectionCard1";
import SectionCard3 from "../components/SectionCard3";

const MajlesThirdPhotoDraft = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-end justify-start gap-[149px]">
      <section className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-[26px] px-0 pb-0">
        <LoginForm />
        <NationalFederalCouncilSection />
      </section>
      <main className="self-stretch overflow-hidden flex flex-col items-start justify-end gap-[57px]">
        <ElectronicServicesContainer />
        <main className="self-stretch flex flex-col items-center justify-start py-0 px-px box-border gap-[61px] min-h-[3410.159912109375px]">
          <NationalCouncilNewsSection />
          <NationalFederalCouncilStrategy />
          <NationalFederalCouncilAgendaSe />
          <SectionCard />
          <MediaCenterSection />
          <SectionCard1 />
        </main>
        <SectionCard3 />
      </main>
    </div>
  );
};

export default MajlesThirdPhotoDraft;
