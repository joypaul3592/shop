// Icons Import
import { AiOutlineReload, AiOutlineSecurityScan, AiOutlineShoppingCart } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";

export default function ProcessSection() {

    const processData = [
        {
            id: 1,
            title: "Free Shipping",
            text: "When ordering over $100",
            icon: <AiOutlineShoppingCart />
        },
        {
            id: 2,
            title: "Free Return",
            text: "Get Return within 30 days",
            icon: <AiOutlineReload />
        },
        {
            id: 3,
            title: "Secure Payment",
            text: "100% Secure Online Payment",
            icon: <AiOutlineSecurityScan />
        },
        {
            id: 4,
            title: "Best Quality",
            text: "Original Product Guarenteed",
            icon: <TfiCup />
        },

    ]

    return (
        <div className="bg-[#f8f8f8] pb-10">
            <div className=" container xl:px-20 px-5 mx-auto  ">
                <div className="lg:flex grid sm:grid-cols-2 grid-cols-1 items-center justify-between  bg-white px-3 ">
                    {
                        processData.map(data =>
                            <div key={data.id} className=" flex items-center justify-center lg:justify-start py-7 2xl:px-10 xl:gap-4 gap-2 ">
                                <div className=" xl:text-[45px] text-[40px] text-[#FFBB38] ">
                                    {data.icon}
                                </div>
                                <div>
                                    <h1 className=" font-semibold text-gray-800">{data.title}</h1>
                                    <p className=" text-gray-500 2xl:text-base text-sm">{data.text}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
