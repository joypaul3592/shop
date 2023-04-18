import Image from 'next/image'

// Incon Import
import { AiFillStar } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { IoExpandOutline } from 'react-icons/io5'
import { GrFavorite } from 'react-icons/gr'
import { SlRefresh } from 'react-icons/sl'


export default function ProductCard({ button, progress, pimg, title, oldPrice, newPrice }) {

    return (
        <div className=' bg-white p-8 flex flex-col relative overflow-hidden group transition-all duration-300 ease-in-out cursor-pointer'>

            <div className=' h-5/6  flex flex-col justify-around items-center'>
                <div className='flex items-center justify-end  w-full '>
                    {button &&

                        <button className=' py-1.5 px-6 rounded-full text-sm font-semibold text-white  bg-[#1BCC40] '>{button}</button>
                    }
                    {
                        progress &&
                        <div className=' w-full px-5'>
                            <div className=' flex items-center justify-between'>
                                <p className=' text-sm text-gray-600'>Prodcuts Available</p>
                                <p className='font-semibold text-gray-600'>20</p>
                            </div>
                            <div class="w-full bg-gray-200  rounded-full h-1.5 ">
                                <div class={`bg-[#FFBB38] h-1.5 rounded-full ${progress}`} ></div>
                            </div>
                        </div>
                    }
                </div>
                <div>
                    <Image
                        src={pimg}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div >
                <div className=' flex items-center gap-1 text-[#FFBB38] text-lg mb-2'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h1 className=' font-semibold text-gray-700'>{title}</h1>
                <div className=' flex items-center gap-3 text-[20px] font-semibold mt-3'>
                    <p className=' text-gray-500 line-through'>{oldPrice}</p>
                    <p className=' text-red-500'>{newPrice}</p>
                </div>
            </div>
            <div className=' absolute 2xl:-bottom-20 -bottom-16 left-[10%] group-hover:bottom-3 transition-all duration-300 ease-in-out bg-red-500 w-4/5'>
                <button className=' py-2.5 w-full flex items-center justify-center gap-2 text-[15px] bg-[#FFBB38]'><BsHandbag />Add To Cart</button>
            </div>
            <div className='absolute group-hover:right-5 -right-20 top-20 flex flex-col gap-3 transition-all duration-300 ease-in-out'>
                <div className='bg-[#ebebebec] rounded-sm h-10 w-10 flex items-center justify-center text-lg'>
                    <IoExpandOutline />
                </div>
                <div className='bg-[#ebebebec] rounded-sm h-10 w-10 flex items-center justify-center text-lg'>
                    <GrFavorite />
                </div>
                <div className='bg-[#ebebebec] rounded-sm h-10 w-10 flex items-center justify-center text-lg'>
                    <SlRefresh />
                </div>
            </div>
        </div>
    )
}
