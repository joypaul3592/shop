import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";

// Image Import
import top2 from '../../assect/image/homePage/product.png'
import top1 from '../../assect/image/homePage/product.png'
import top3 from '../../assect/image/homePage/product.png'
import top4 from '../../assect/image/homePage/product.png'

// Icons Import
import { SlRefresh } from 'react-icons/sl'
import { GrFavorite } from 'react-icons/gr'
import { AiFillStar } from "react-icons/ai";
import { IoExpandOutline } from 'react-icons/io5'

export default function TopSelling() {

    const topsellingData = [
        {
            id: 1,
            img: top1,
            title: 'Senmei ipsum dolore eiusmod dolor officia do nisi dolor officia do nisi',
            oldPrice: '$20.64',
            newPrice: '$27.61'
        },
        {
            id: 2,
            img: top2,
            title: 'Canopoly duis voluptate dolor sunt sit adipisicing in sunt sit adipisicing in',
            oldPrice: '$39.27',
            newPrice: '$10.42'
        },
        {
            id: 3,
            img: top3,
            title: 'Unisure aliqua repreh ex cupt qui elit offici acupt qui elit officia',
            oldPrice: '$36.90',
            newPrice: '$16.43'
        },
        {
            id: 4,
            img: top4,
            title: 'Kenegy consectetur id ex nulla in adipisicing deserunt in adipisicing deserunt',
            oldPrice: '$26.62',
            newPrice: '$11.92'
        },
    ]

    return (
        <div className="bg-[#f8f8f8] py-8">
            <div className=" container px-20 mx-auto">
                <SectionTitle title='Top Selling Products' />

                <div className=" grid grid-cols-2 gap-10 my-8">
                    {
                        topsellingData.map(data =>
                            <div className=" bg-white flex items-center p-10 gap-10 relative overflow-hidden group">
                                <Image
                                    src={data.img}
                                    alt="Picture of the author"
                                    className=" w-72  h-48"
                                />
                                <div >
                                    <div className=' flex items-center gap-1 text-[#FFBB38] text-lg mb-2'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                    <h1 className=' font-semibold text-gray-700'>{data.title}</h1>
                                    <div className=' flex items-center gap-3 text-[20px] font-semibold mt-3'>
                                        <p className=' text-gray-500 line-through'>{data.oldPrice}</p>
                                        <p className=' text-red-500'>{data.newPrice}</p>
                                    </div>

                                    <button className={`py-1.5 px-6 bg-[#FFBB38] text-sm mt-5 border border-[#FFBB38] mb-8 font-semibold text-gray-700 hover:bg-transparent hover:text-[#FFBB38]`}>Add To Card</button>
                                </div>

                                <div className='absolute group-hover:right-5 -right-20 top-16 flex flex-col gap-3 transition-all duration-300 ease-in-out'>
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
                </div>

            </div>
        </div>
    )
}
