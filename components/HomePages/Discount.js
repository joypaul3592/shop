import Image from "next/image";

// Icons Import
import { CiMail } from "react-icons/ci";

// Image Import
import product1 from '../../assect/image/homePage/product/product4.webp'
import product2 from '../../assect/image/homePage/product/product5.webp'

export default function Discount() {
    return (
        <div className='bg-[#f8f8f8] inline py-8 z-[-100]'>
            <div className='bg-[#C6EAFF] flex flex-col items-center justify-center lg:py-20 py-16 relative overflow-hidden z-[10] px-5 sm:px-0'>

                <Image
                    src={product1}
                    alt="Picture of the author"
                    className=" xl:w-96 lg:w-80 w-52 absolute md:bottom-5 xl:right-16 -right-8  top-5 z-[1] rotate-45 hidden sm:block"
                />
                <Image
                    src={product2}
                    alt="Picture of the author"
                    className=" xl:w-96 lg:w-80 w-52 absolute -top-2 xl:-top-7 xl:left-24 -left-5 -rotate-45 z-[1] hidden sm:block"
                />
                <div className=" h-96 w-96 border-[75px] border-[#A4DFFF] absolute -bottom-10 -left-48 rotate-45 z-[-1]"></div>
                <div className=" h-96 w-96 border-[75px] border-[#a4dfff7a] absolute -bottom-10 -right-48 rotate-45 z-[-1]"></div>
                <h1 className=' lg:text-4xl text-2xl font-semibold text-center text-gray-700'>Get <span className=' text-[#FFBB38]'>20%</span> Off Discount Coupon</h1>
                <p className=' lg:text-lg text-base my-2'>by Subscribe our Newsletter</p>
                <div className=' flex items-center lg:w-1/3 sm:w-3/5 w-full h-14 bg-red-100 relative mt-7'>
                    <CiMail className=" absolute top-5 left-4" />
                    <input className=' h-full w-full px-10 placeholder:text-sm outline-none placeholder:text-gray-500' type="text" placeholder='Email Address' />
                    <button className='bg-[#FFBB38] w-2/5  h-full font-semibold text-[14px] ' type='submit'>Get the Coupon</button>
                </div>
            </div>
        </div>
    )
}
