import React from 'react'
import CatagoryMenu from './CatagoryMenu'
import ProductCard from '../shared/ProductCard'
import SectionTitle from '../shared/SectionTitle'


// Image IMport
import product1 from '../../assect/image/homePage/product.png'
import product2 from '../../assect/image/homePage/product.png'
import product3 from '../../assect/image/homePage/product.png'
import popular from '../../assect/image/homePage/product.png'


export default function Popular() {
    return (
        <div className="bg-[#f8f8f8] py-8">
            <div className=" container px-20 mx-auto">
                <SectionTitle title={"Popular Sales"} />
                <div className=" grid grid-cols-4 gap-8 py-8">
                    <CatagoryMenu title='Electronics' img={popular} catagory='ELECTRONI' />
                    <ProductCard pimg={product1} title={'Xoggle aute et pariatur adipisicing nostrud et...'} oldPrice={'$27.27'} newPrice={'$18.73'} />

                    <ProductCard pimg={product2} progress={'3/5'} title={'Geeky ipsum esse repreh est consequat'} oldPrice={'$24.27'} newPrice={'$17.79'} />

                    <ProductCard pimg={product3} button={'Popular'} title={'Conjurica ea magna eiusmod esse cupt anim aliquip'} oldPrice={'$18.03'} newPrice={'$32.63'} />
                </div>
            </div>
        </div>
    )
}
