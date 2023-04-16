import Brand from "../HomePages/Brand";
import HeroSection from "../HomePages/HeroSection";
import GamerSection from "../HomePages/GamerSection";
import ProcessSection from "../HomePages/ProcessSection";
import TopSelling from "../HomePages/TopSelling";
import Popular from "../HomePages/Popular";

export default function HomePages() {
    return (
        <>
            <HeroSection />
            <ProcessSection />
            <GamerSection />
            <Brand />
            <TopSelling />
            {/* <Offer /> */}
            <Popular />
        </>
    )
}
