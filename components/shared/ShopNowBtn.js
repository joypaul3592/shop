// Icons Import
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ShopNowBtn({ border }) {
    return (
        <button className={` flex items-center gap-2 text-sm sm:text-base  font-semibold text-gray-700  ${border} hover:text-[#FFBB38] border-b-[#FFBB38]`}>Show Now <MdKeyboardArrowRight /></button>
    )
}
