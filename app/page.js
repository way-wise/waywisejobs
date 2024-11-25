import Hero from "./components/section/Hero";
import HomeInfoCard from "./components/home/HomeInfoCard";
import DetailSection from "./components/section/DetailSection";
import Cta from "./components/global/Cta";
import CtaTwo from "./components/global/CtaTwo";
import ProcessBar from "./components/global/ProcessBar";
export default function Home() {
  return (
    <>
      <Hero />
      <HomeInfoCard />
      <DetailSection />
      <Cta />
      <CtaTwo />
      <ProcessBar />
    </>
  );
}
