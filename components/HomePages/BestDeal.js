import Image from "next/image";

// Icons Import
import { MdKeyboardArrowRight } from "react-icons/md";

// Image Import
import product4 from '../../assect/image/homePage/product/product4.webp'
import product5 from '../../assect/image/homePage/product/product5.webp'

export default function BestDeal() {
    return (
        <div className=" bg-[#f8f8f8] pb-8 z[-10]">
            <div className=" container xl:px-20 px-5 mx-auto ">
                <div className=" lg:py-14 py-8 bg-gradient-to-r from-[#F3CA9A] to-[#E5D4C1]  w-full flex flex-col items-center justify-center relative overflow-hidden z-[1]">
                    <div className=" h-96 w-96 border-[65px] border-[#00000009] bg-[#00000006] absolute -bottom-4 -left-60 rotate-45 z-[-1]"></div>
                    <div className=" h-96 w-96 border-[65px] border-[#00000009] bg-[#00000006] absolute -bottom-4 -right-60 rotate-45 z-[-1]"></div>
                    <Image
                        src={product5}
                        alt="Picture of the author"
                        className=" absolute -top-10  xl:w-96 lg:w-80 w-52 xl:-right-4 lg:-right-7 -right-5 rotate-45 hidden sm:block"
                    />
                    <Image
                        src={product4}
                        alt="Picture of the author"
                        className=" absolute lg:top-10 bottom-0 xl:w-96 lg:w-80 w-52 xl:-left-2 -left-10 -rotate-45 hidden sm:block"
                    />
                    <p className=" font-semibold text-gray-800 text-[15px]">HEADPHONE</p>
                    <h1 className=" lg:text-5xl sm:text-4xl text-2xl lg:w-1/2 sm:w-2/3 text-center font-semibold text-gray-700 py-5">Get the best deal for Headphones</h1>
                    <button className=" bg-white border border-white hover:bg-transparent hover:border-[#FFAA07]  px-7 lg:py-2.5 py-2 flex items-center font-semibold text-[#FFAA07] text-[15px] gap-2">Shop Now <MdKeyboardArrowRight /></button>
                </div>

            </div>
        </div>
    )
}
