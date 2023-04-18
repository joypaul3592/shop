import Image from "next/image";

// Icons Import
import { MdKeyboardArrowRight } from "react-icons/md";

// Image Import
import product3 from '../../assect/image/homePage/product/product3.png'

export default function Minideal() {
    return (
        <div className=" bg-[#f8f8f8] pb-8 z[-10]">
            <div className=" container xl:px-20 px-5 mx-auto ">
                <div className=" py-14 w-full flex flex-col items-start pl-10  relative overflow-hidden z-[1] bg-black">
                    <div className=" h-96 w-96 border-[65px] border-[#00000009] bg-[#00000006] absolute -bottom-4 -left-60 rotate-45 z-[1]"></div>
                    <div className=" h-96 w-96 border-[65px] border-[#00000009] bg-[#00000006] absolute -bottom-4 -right-60 rotate-45 z-[1]"></div>

                    <Image
                        src={product3}
                        alt="Picture of the author"
                        className=" absolute top-0 2xl:-top-5 right-24 w-2/5 2xl:w-2/6 h-full 2xl:h-52 z-[-1] opacity-60 lg:opacity-100"
                    />
                    <h1 className=" sm:text-[32px] text-xl  font-semibold text-white py-2">Get the best deal for Headphones</h1>
                    <button className=" border-b border-b-[#FFAA07]  flex items-center font-semibold text-[#FFAA07] text-[15px] gap-2">Shop Now <MdKeyboardArrowRight /></button>
                </div>

            </div>
        </div>
    )
}
