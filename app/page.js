import HomeInfoCard from "./components/home/HomeInfoCard";
import DetailSection from "./components/section/DetailSection";
import Cta from "./components/global/Cta";
import CtaTwo from "./components/global/CtaTwo";
import ProcessBar from "./components/global/ProcessBar";
import DetailSlider from "./components/home/DetailSlider";
import MainSlider from "./components/global/MainSlider";
import CountrySlider from "./components/global/CountrySlider";
export default function Home() {
  return (
    <>
      <MainSlider />
      <HomeInfoCard />
      {/* <CountrySlider /> */}
      <DetailSlider />
      <DetailSection />
      <Cta />
      <CtaTwo />
      <ProcessBar />
    </>
  );
}
