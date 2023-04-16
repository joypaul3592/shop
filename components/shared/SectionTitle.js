// Icons Import
import { ImArrowRight2 } from "react-icons/im";

export default function SectionTitle({ title, link }) {
    return (
        <div className="flex items-center justify-between">
            <h1 className=" text-[30px] font-semibold text-[#1d1d1d]">{title}</h1>
            <button className=" flex items-center gap-1.5 font-semibold text-[#222222]">View More <ImArrowRight2 className=" animate-waving-hand text-lg " /></button>
        </div>
    )
}
