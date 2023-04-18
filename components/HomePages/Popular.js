import CatagoryMenu from './CatagoryMenu'
import ProductCard from '../shared/ProductCard'
import SectionTitle from '../shared/SectionTitle'


// Image IMport
import product1 from '../../assect/image/homePage/product/product1.png'
import product2 from '../../assect/image/homePage/product/product2.png'
import product3 from '../../assect/image/homePage/product/product3.png'
import product4 from '../../assect/image/homePage/product/product5.webp'


export default function Popular() {
    return (
        <div className="bg-[#f8f8f8] py-8">
            <div className=" container xl:px-20 px-5 mx-auto">
                <SectionTitle title={"Popular Sales"} />
                <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 py-8">
                    <CatagoryMenu title='Electronics' img={product4} catagory='ELECTRONI' bg={'bg-[#DFE6FF]'} />

                    <ProductCard pimg={product1} title={'Xoggle aute et pariatur adipisicing nostrud et...'} oldPrice={'$27.27'} newPrice={'$18.73'} />

                    <ProductCard pimg={product2} progress={'3/5'} title={'Geeky ipsum esse repreh est consequat'} oldPrice={'$24.27'} newPrice={'$17.79'} />

                    <ProductCard pimg={product3} button={'Popular'} title={'Conjurica ea magna eiusmod esse cupt anim aliquip'} oldPrice={'$18.03'} newPrice={'$32.63'} />
                </div>
            </div>
        </div>
    )
}
