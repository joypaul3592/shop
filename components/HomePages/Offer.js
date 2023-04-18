import Image from 'next/image'
import ShopNowBtn from '../shared/ShopNowBtn'

// Image Import
import product1 from '../../assect/image/homePage/product/product1.png'
import product10 from '../../assect/image/homePage/product/product10.png'

export default function Offer() {
    const offerData = [
        {
            id: 1,
            headline: 'HEADSET',
            title: 'Beat Wireless Headphone',
            img: product10,
            bg: 'bg-red-100'
        },
        {
            id: 2,
            headline: 'SMART WATCH',
            title: 'Samsung Smart Watch',
            img: product1,
            bg: 'bg-sky-100'
        },

    ]
    return (
        <div className='bg-[#f8f8f8] py-8 z-[-10]'>
            <div className=' container xl:px-20 px-5 mx-auto grid sm:grid-cols-2 grid-cols-1 gap-10'>
                {
                    offerData.map(data =>
                        <div key={data.id} className={`flex items-center lg:px-10 px-6 lg:py-2 py-5 relative z-[1] overflow-hidden ${data.bg}`}>
                            <div className=" h-96 w-96 border-[85px] border-[#00000009] absolute -top-40 -right-14 rotate-45 z-[-1]"></div>
                            <div className=' w-1/2'>
                                <p className=' font-semibold text-gray-700 text-xs lg:text-base'>{data.headline}</p>
                                <h1 className='lg:text-4xl text-xl lg:mt-5 mt-2 text-gray-800 lg:mb-10 mb-5'>{data.title}</h1>
                                <ShopNowBtn />
                            </div>
                            <div className=' w-1/2'>
                                <Image
                                    src={data.img}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
