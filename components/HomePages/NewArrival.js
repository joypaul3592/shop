
import ProductCard from "../shared/ProductCard";
import SectionTitle from "../shared/SectionTitle";

// Image IMport
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

export default function NewArrival() {
    return (
        <div className="bg-[#f8f8f8] py-8">
            <div className="container xl:px-20 px-5 mx-auto ">
                <SectionTitle title={'New Arrivals'} />
                <div className=" py-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">

                    <ProductCard pimg={product1} title={'Xoggle aute et pariatur adipisicing nostrud et...'} oldPrice={'$27.27'} newPrice={'$18.73'} />

                    <ProductCard pimg={product2} button={'Popular'} title={'Conjurica ea magna eiusmod esse cupt anim aliquip'} oldPrice={'$18.03'} newPrice={'$32.63'} />

                    <ProductCard pimg={product3} progress={'3/5'} title={'Geeky ipsum esse repreh est consequat'} oldPrice={'$24.27'} newPrice={'$17.79'} />

                    <ProductCard pimg={product4} title={'Xoggle aute et pariatur adipisicing nostrud et...'} oldPrice={'$27.27'} newPrice={'$18.73'} />

                    <ProductCard pimg={product5} title={'Xoggle aute et pariatur adipisicing nostrud et...'} oldPrice={'$27.27'} newPrice={'$18.73'} />

                    <ProductCard pimg={product6} progress={'3/5'} title={'Geeky ipsum esse repreh est consequat'} oldPrice={'$24.27'} newPrice={'$17.79'} />

                    <ProductCard pimg={product7} button={'Popular'} title={'Conjurica ea magna eiusmod esse cupt anim aliquip'} oldPrice={'$18.03'} newPrice={'$32.63'} />

                    <ProductCard pimg={product8} title={'Xoggle aute et pariatur adipisicing nostrud et...'} oldPrice={'$27.27'} newPrice={'$18.73'} />

                    <ProductCard pimg={product9} progress={'3/5'} title={'Geeky ipsum esse repreh est consequat'} oldPrice={'$24.27'} newPrice={'$17.79'} />

                    <ProductCard pimg={product10} button={'Popular'} title={'Conjurica ea magna eiusmod esse cupt anim aliquip'} oldPrice={'$18.03'} newPrice={'$32.63'} />

                    <ProductCard pimg={product2} progress={'3/5'} title={'Geeky ipsum esse repreh est consequat'} oldPrice={'$24.27'} newPrice={'$17.79'} />

                    <ProductCard pimg={product3} button={'Popular'} title={'Conjurica ea magna eiusmod esse cupt anim aliquip'} oldPrice={'$18.03'} newPrice={'$32.63'} />

                </div>
            </div>
        </div>
    )
}
