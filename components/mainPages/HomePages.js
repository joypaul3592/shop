import Brand from "../HomePages/Brand";
import HeroSection from "../HomePages/HeroSection";
import GamerSection from "../HomePages/GamerSection";
import ProcessSection from "../HomePages/ProcessSection";
import TopSelling from "../HomePages/TopSelling";
import Popular from "../HomePages/Popular";
import Offer from "../HomePages/Offer";
import BestDeal from "../HomePages/BestDeal";
import NewArrival from "../HomePages/NewArrival";
import Minideal from "../HomePages/Minideal";
import PopularSell from "../HomePages/PopularSell";
import Discount from "../HomePages/Discount";

export default function HomePages() {
    return (
        <>
            <HeroSection />
            <ProcessSection />
            <GamerSection />
            <Brand />
            <TopSelling />
            <Offer />
            <Popular />
            <BestDeal />
            <NewArrival />
            <Minideal />
            <PopularSell />
            <Discount />
        </>
    )
}
