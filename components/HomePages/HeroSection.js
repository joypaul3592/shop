import Image from "next/image";
import HeroRight from "./HeroRight";
import ShopNowBtn from "../shared/ShopNowBtn";

// Image Import
import hero1 from '../../assect/image/homePage/product.png'

export default function HeroSection() {
    return (
        <div className="bg-[#f8f8f8] py-8 z[-10]">
            <div className=" container px-20 mx-auto flex gap-8">
                <div className=" w-2/3 bg-[#FFEAE5] flex items-center z-[2] justify-between gap-10 py-28 px-10 relative overflow-hidden">
                    <div className=" h-96 w-96 border-[55px] border-[#00000009] absolute -bottom-80 -left-20 rotate-45 z-[-1]"></div>
                    <div className=" h-96 w-96 border-[55px] border-[#00000009] absolute -top-80 -right-20 rotate-45 z-[-1]"></div>
                    <div>
                        <button className=" py-1.5 px-6 bg-white  mb-8 font-semibold text-gray-700">New Released</button>
                        <h2 className=" text-3xl mb-5 text-gray-700">Apple Wireless</h2>
                        <h1 className=" text-[5.8rem] flex flex-col leading-[6.2rem] font-semibold text-gray-800">Samsung<span className=" font-medium mb-10">S10+</span></h1>
                        <ShopNowBtn border={'border-b-[2px]'} />
                    </div>
                    <Image
                        src={hero1}
                        alt="Picture of the author"
                        className=" h-96 w-80"
                    />
                </div>
                <HeroRight />
            </div>
        </div>
    )
}
