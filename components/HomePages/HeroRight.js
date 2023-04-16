import Image from 'next/image'
import ShopNowBtn from '../shared/ShopNowBtn'

// Image Import
import hero2 from '../../assect/image/homePage/product.png'
import hero3 from '../../assect/image/homePage/product.png'


export default function HeroRight() {
    const heroData = [
        {
            id: 1,
            img: hero2,
            mainBg: 'bg-sky-200',
            btnBg: 'white',
            title1: 'Apple',
            title2: 'Smart Watch'
        },
        {
            id: 2,
            img: hero3,
            mainBg: 'bg-white',
            btnBg: '[#FFBB38]',
            title1: 'Xbox',
            title2: '5th Version'
        },
    ]
    return (
        <div className=" w-1/3 flex flex-col justify-between ">
            {
                heroData.map(data =>
                    <div key={data.id} className={` ${data.mainBg} relative py-10 px-7 z-[2] overflow-hidden`}>
                        <div className=" h-80 w-80 border-[55px] rounded-full border-[#00000009] absolute -top-36 -right-32 rotate-45 z-[-1]"></div>
                        <div>
                            <button className={`py-1.5 px-6 bg-${data.btnBg}  mb-8 font-semibold text-gray-700`}>Gaming</button>
                            <h2 className=" text-4xl font-semibold  text-gray-700 flex flex-col mb-10">{data.title1} <span>{data.title2}</span></h2>
                            <ShopNowBtn />
                        </div>
                        <Image
                            src={data.img}
                            alt="Picture of the author"
                            className=" h-60 w-60 absolute bottom-0 -right-10  z-[-1]"
                        />
                    </div>
                )
            }
        </div>
    )
}
