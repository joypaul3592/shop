import Image from 'next/image'
import ShopNowBtn from '../shared/ShopNowBtn'


// Image Import
import product1 from '../../assect/image/homePage/product/product6.png'
import product2 from '../../assect/image/homePage/product/product2.png'

export default function HeroRight() {
    const heroData = [
        {
            id: 1,
            img: product1,
            mainBg: 'bg-sky-200',
            btnBg: 'white',
            title1: 'Apple',
            title2: 'Smart Watch'
        },
        {
            id: 2,
            img: product2,
            mainBg: 'bg-white',
            btnBg: '[#FFBB38]',
            title1: 'Xbox',
            title2: '5th Version'
        },
    ]
    return (
        <div className=" lg:w-1/3 sm:flex lg:flex-col justify-between gap-10 lg:gap-0 ">
            {
                heroData.map(data =>
                    <div key={data.id} className={` ${data.mainBg} relative xl:py-10 py-5 px-7 z-[2] overflow-hidden w-full lg:w-auto my-5 sm:my-0`}>
                        <div className=" h-80 w-80 border-[55px] rounded-full border-[#00000009] absolute -top-36 -right-32 rotate-45 z-[-1]"></div>
                        <div>
                            <button className={`py-1.5 px-6 bg-${data.btnBg}  mb-8 font-semibold text-gray-700`}>Gaming</button>
                            <h2 className=" xl:text-4xl text-2xl font-semibold  text-gray-700 flex flex-col xl:mb-10 mb-6">{data.title1} <span>{data.title2}</span></h2>
                            <ShopNowBtn />
                        </div>
                        <Image
                            src={data.img}
                            alt="Picture of the author"
                            className=" xl:h-72 xl:w-80 w-52 h-40 absolute bottom-0 2xl:-right-20 xl:-right-32 -right-16  z-[-1]"
                        />
                    </div>
                )
            }
        </div>
    )
}
