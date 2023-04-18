import Image from 'next/image'
import SectionTitle from '../shared/SectionTitle'

// Image Import
import product1 from '../../assect/image/homePage/product/product1.png'
import product2 from '../../assect/image/homePage/product/product2.png'
import product3 from '../../assect/image/homePage/product/product3.png'
import product4 from '../../assect/image/homePage/product/product4.webp'
import product5 from '../../assect/image/homePage/product/product5.webp'
import product6 from '../../assect/image/homePage/product/product6.png'
import product7 from '../../assect/image/homePage/product/product7.png'
import product8 from '../../assect/image/homePage/product/product8.png'
import product9 from '../../assect/image/homePage/product/product9.png'
import product10 from '../../assect/image/homePage/product/product10.png'

export default function PopularSell() {

    const popularData = [
        {
            id: 1,
            img: product1,
            title: 'Xoggle aute et pariatur',
            oldPrice: '$27.27',
            newPrice: '$24.35'
        },
        {
            id: 2,
            img: product2,
            title: 'Geeky ipsum esse repreh est',
            oldPrice: '$37.27',
            newPrice: '$29.35'
        },
        {
            id: 3,
            img: product3,
            title: 'Conjurica ea magna eiusmod',
            oldPrice: '$45.57',
            newPrice: '$25.35'
        },
        {
            id: 4,
            img: product4,
            title: 'Senmei ipsum dolore eiusmod',
            oldPrice: '$65.54',
            newPrice: '$53.65'
        },
        {
            id: 5,
            img: product5,
            title: 'Canopoly duis voluptate dolor',
            oldPrice: '$35.98',
            newPrice: '$14.35'
        },
        {
            id: 6,
            img: product6,
            title: 'Unisure aliqua repreh ex cupt',
            oldPrice: '$65.24',
            newPrice: '$56.25'
        },
        {
            id: 7,
            img: product7,
            title: 'Senmei ipsum dolore eiusmod',
            oldPrice: '$27.27',
            newPrice: '$24.35'
        },
        {
            id: 8,
            img: product8,
            title: 'Xoggle aute et pariatur aute',
            oldPrice: '$57.27',
            newPrice: '$35.35'
        },
        {
            id: 9,
            img: product9,
            title: 'Kenegy consectetur id ex null',
            oldPrice: '$24.27',
            newPrice: '$12.35'
        },
        {
            id: 10,
            img: product10,
            title: 'Bizmatic consequat enim quis',
            oldPrice: '$35.27',
            newPrice: '$29.35'
        },
        {
            id: 11,
            img: product1,
            title: 'Empirica deserunt laborum ad',
            oldPrice: '$38.27',
            newPrice: '$18.35'
        },
        {
            id: 12,
            img: product2,
            title: 'Conjurica ea magna eiusmod',
            oldPrice: '$37.27',
            newPrice: '$27.35'
        },

    ]
    return (
        <div className="bg-[#f8f8f8] py-8">
            <div className="container xl:px-20 px-5 mx-auto">
                <SectionTitle title={'Popular Sales'} />
                <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-x-4 py-5'>
                    {
                        popularData.map(data =>
                            <div key={data.id} className='flex items-center gap-5 py-4 border-b border-b-gray-200 bg-white px-5'>
                                <Image
                                    src={data.img}
                                    alt="Picture of the author"
                                    className=' w-[100px]'
                                />
                                <div>
                                    <h1 className=' font-semibold text-gray-700'>{data.title}</h1>
                                    <div className=' flex items-center gap-3 text-lg font-semibold mt-1 text-gray-700'>
                                        <p className=' text-red-500 line-through'>{data.oldPrice}</p>
                                        <p>{data.newPrice}</p>
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
