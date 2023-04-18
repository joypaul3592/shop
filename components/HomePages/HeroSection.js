import Image from "next/image";
import HeroRight from "./HeroRight";
import ShopNowBtn from "../shared/ShopNowBtn";

// Image Import
import product4 from '../../assect/image/homePage/product/product4.webp'

export default function HeroSection() {
    return (
        <div className="bg-[#f8f8f8] py-8 z[-10]">
            <div className=" container xl:px-20 px-5 mx-auto lg:flex gap-8">
                <div className=" lg:w-2/3 mb-10 lg:mb-0 py-10 lg:py-0 bg-[#FFEAE5] sm:flex items-center z-[2] justify-between xl:gap-10 xl:py-28 px-10 relative overflow-hidden">
                    <div className=" h-96 w-96 border-[55px] border-[#00000009] absolute -bottom-80 -left-20 rotate-45 z-[-1]"></div>
                    <div className=" h-96 w-96 border-[55px] border-[#00000009] absolute -top-80 -right-20 rotate-45 z-[-1]"></div>
                    <div>
                        <button className=" py-1.5 px-6 bg-white  mb-8 font-semibold text-gray-700">New Released</button>
                        <h2 className=" xl:text-3xl sm:text-2xl text-xl mb-5 text-gray-700">Apple Wireless</h2>
                        <h1 className=" 2xl:text-[5.8rem] sm:text-6xl text-5xl flex flex-col 2xl:leading-[6.2rem]  font-semibold text-gray-800">Samsung<span className=" font-medium sm:mb-10 mb-5">S10+</span></h1>
                        <ShopNowBtn border={'border-b-[2px]'} />
                    </div>
                    <Image
                        src={product4}
                        alt="Picture of the author"
                        className=" xl:h-96 xl:w-80 lg:w-64 sm:w-1/2"
                    />
                </div>
                <HeroRight />
            </div>
        </div>
    )
}
