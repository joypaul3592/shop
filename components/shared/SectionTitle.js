// Icons Import
import { ImArrowRight2 } from "react-icons/im";

export default function SectionTitle({ title, link }) {
    return (
        <div className="flex items-center justify-between">
            <h1 className=" sm:text-[30px] text-lg font-semibold text-[#1d1d1d]">{title}</h1>
            <button className=" flex items-center gap-1.5 font-semibold text-[#222222] text-sm sm:text-base">View More <ImArrowRight2 className=" animate-waving-hand sm:text-lg text-sm " /></button>
        </div>
    )
}
