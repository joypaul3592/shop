import Link from "next/link";
import Image from "next/image";
import ShopNowBtn from "../shared/ShopNowBtn";



export default function CatagoryMenu({ title, img, catagory, bg }) {
    return (
        <div className={` ${bg} px-8 pt-8 pb-3 relative flex flex-col`}>
            <h2 className=" text-6xl font-bold absolute top-2 text-black opacity-10 right-4 upright">{catagory}</h2>
            <div>
                <h1 className=" font-semibold text-gray-800 mb-4">{title}</h1>
                <nav>
                    <Link
                        href={'/'}
                    ><p className=" text-gray-500 my-2 hover:text-black hover:underline">Xioami</p>
                    </Link>
                    <Link
                        href={'/'}
                    ><p className=" text-gray-500 my-2 hover:text-black hover:underline">Apple</p>
                    </Link>
                    <Link
                        href={'/'}
                    ><p className=" text-gray-500 my-2 hover:text-black hover:underline">Google</p>
                    </Link>
                    <Link
                        href={'/'}
                    ><p className=" text-gray-500 my-2 hover:text-black hover:underline">Samsung</p>
                    </Link>
                </nav>
                <ShopNowBtn />
            </div>
            <Image
                src={img}
                alt="Picture of the author"
            />

        </div>
    )
}
