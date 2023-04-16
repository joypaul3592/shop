import React from 'react'
import Image from 'next/image'
import SectionTitle from '../shared/SectionTitle'

// Image Import
import brand1 from '../../assect/image/homePage/brand/brand1.png'
import brand2 from '../../assect/image/homePage/brand/brand2.png'
import brand3 from '../../assect/image/homePage/brand/brand3.png'
import brand4 from '../../assect/image/homePage/brand/brand4.png'
export default function Brand() {


    const brandData = [
        {
            id: 1,
            img: brand1
        },
        {
            id: 2,
            img: brand2
        },
        {
            id: 3,
            img: brand3
        },
        {
            id: 4,
            img: brand4
        },

    ]


    return (
        <div className='bg-[#f8f8f8] py-8'>
            <div className=' container px-20 mx-auto'>
                <SectionTitle title='Shop by Brand' />
                <div className=' grid grid-cols-4 bg-white my-8'>
                    {
                        brandData.map(brand =>
                            <div className=' py-14 border border-gray-100' key={brand.id}>
                                <Image
                                    src={brand.img}
                                    alt="Picture of the author"
                                    className=' mx-auto'
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
