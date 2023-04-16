
export default function Headding1({ black, blue }) {
    return (
        <div
            class="text-center relative before:transition-all before:duration-300 before:ease-in-out after:transition-all after:duration-300 after:ease-in-out before:absolute before:content-[''] before:bg-blue-600 before:w-[50px] before:h-[2px] before:hidden sm:before:block before:left-[32px] md:before:left-[46px] lg:before:left-[173px] xl:before:left-[302px]  2xl:before:left-[430px] before:top-3 after:absolute after:content-[''] after:bg-blue-600 after:w-[50px] after:h-[2px] after:top-3 hover:before:w-[30px] hover:after:w-[30px] group sm:after:block after:hidden after:right-[32px] md:after:right-[46px] lg:after:right-[173px] xl:after:right-[302px] 2xl:after:right-[430px]">
            <h2
                class="uppercase inline-block text-xl sm:text-2xl md:text-3xl text-black font-semibold relative before:transition-all before:duration-300 before:ease-in-out before:absolute before:bg-blue-600 before:w-[30px] before:h-[2px] before:-left-[49px] before:top-[23px] after:transition-all after:duration-300 after:ease-in-out after:absolute after:bg-blue-600 after:w-[30px] after:h-[2px] after:-right-[49px] after:top-[23px] group-hover:before:w-[35px] group-hover:after:w-[35px]">
                {black} <span class="text-blue-600">{blue}</span></h2>
        </div>
    )
}
