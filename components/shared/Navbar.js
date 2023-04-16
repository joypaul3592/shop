import Link from "next/link"
import Image from "next/image";
import { useEffect, useRef, useState } from "react"



// Image Import
import logo from '../../assect/image/logo/logo.png'

// Icons Import
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // For Menu
    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = e => { if (isMenuOpen && ref.current && !ref.current.contains(e.target)) { setIsMenuOpen(false) } }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => { document.removeEventListener("mousedown", checkIfClickedOutside) }
    }, [isMenuOpen])

    // prevent hydration error
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }


    return (
        <>
            <div className=' bg-[#FFBB38] z-50 sticky top-0 '>
                <nav className="container mx-auto px-20  flex  items-center justify-between  transition-all duration-300 ease-in-out">

                    <div className=" flex items-center">
                        <div className={`transition-all  pl-5 py-4 lg:py-0  duration-300 xl:pr-20 pr-3 flex  xl:justify-end ease-in-out cursor-pointer`}>
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    alt="Picture of the author"
                                    className=" w-44"
                                />
                            </Link>
                        </div>

                        {/* website */}
                        <div className='  hidden lg:grid items-center  '>
                            <div className="hidden ml-auto lg:block  w-full ">
                                <div className=' flex w-full justify-between  items-center '>
                                    <div className="h-full w-full flex items-center relative " >
                                        <div className=" flex items-center ">
                                            <Link
                                                href={'page'}
                                            ><p className=" py-6  xl:px-5 px-1 cursor-pointer rounded-md text-[15px] font-semibold  text-gray-800 hover:text-white ">Home</p>
                                            </Link>
                                            <Link
                                                href={'blog'}
                                            ><p className=" py-6  xl:px-5 px-1 cursor-pointer rounded-md text-[15px] font-semibold  text-gray-800 hover:text-white">CNG</p>
                                            </Link>
                                            <Link
                                                href={'blog'}
                                            ><p className=" py-6  xl:px-5 px-1 cursor-pointer rounded-md text-[15px] font-semibold  text-gray-800 hover:text-white">LPG</p>
                                            </Link>
                                            <Link
                                                href={'blog'}
                                            ><p className=" py-6  xl:px-5 px-1 cursor-pointer rounded-md text-[15px] font-semibold  text-gray-800 hover:text-white">About</p>
                                            </Link>
                                            <Link
                                                href={'blog'}
                                            ><p className=" py-6  xl:px-5 px-1 cursor-pointer rounded-md text-[15px] font-semibold  text-gray-800 hover:text-white">Blog</p>
                                            </Link>
                                            <Link
                                                href={'blog'}
                                            ><p className=" py-6  xl:px-5 px-1 cursor-pointer rounded-md text-[15px] font-semibold  text-gray-800 hover:text-white">Contact</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div>
                        <button className=" text-[15px] font-semibold text-white py-2 px-6 bg-black flex items-center gap-2 border border-black hover:bg-transparent hover:text-black">
                            Get Products <MdKeyboardArrowRight className="text-lg" /></button>
                    </div>


                    {/* For Mobile */}
                    <div className="flex h-full items-center justify-between lg:hidden">
                        {/* cancle button */}
                        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:mr-4 rounded-md lg:hidden text-white">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile */}
                    <div className={`w-full absolute lg:hidden transition-all duration-300 ease-in-out h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-40  ${isMenuOpen ? 'block' : 'hidden'}`}></div>
                    <div ref={ref} className={`${isMenuOpen ? 'left-0 bottom-0 top-0 z-20 ' : '-left-96 bottom-0 top-0'} transition-all duration-300 ease-in-out fixed lg:hidden  flex flex-col w-full md:w-1/2  max-w-sm py-6 px-6 bg-[#ED6D01]  overflow-y-auto`}>

                        <div className="h-full flex flex-col gap-3  items-start pl-1" >

                            <div className=' flex justify-end items-end w-full'>
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <svg className="h-6 w-6 text-white cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className={`transition-all mb-4 duration-300 ease-in-out cursor-pointer`}>
                                <Link href='/'>
                                    <Image
                                        src={logo}
                                        alt="Picture of the author"
                                        width={202}
                                        height={51}
                                    />
                                </Link>
                            </div>


                            <div className=' flex flex-col gap-6 md:mt-8 mt-4 text-left'>

                                <Link
                                    href={'page'}
                                ><p className=" py-1  xl:px-5 px-1 cursor-pointer rounded-md text-[17px] hover:text-purple-500 text-white ">Distributor</p>
                                </Link>

                                <Link
                                    href={'blog'}
                                ><p className=" py-1 xl:px-5 px-1 cursor-pointer rounded-md text-[17px] hover:text-purple-500 text-white ">Blog</p>
                                </Link>




                            </div>


                        </div>
                    </div>



                </nav >
            </div >
        </>
    )
}