import { Leaf } from "lucide-react";

export default function Cards () {
    return (
        <div className="flex flex-row w-[1152px] h-[450px] gap-[32px]">
        <div className="w-[362.66px] h-[450px] rounded-[24px] border border-[#E7EEFF] ring-1 ring-[rgba(194,200,193,0.3)] bg-white shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col w-[360.66px] h-[231.02px] top-[217.98px] left-[1px] p-[32px]">
               <div className="flex flex-col w-[296.66px] h-[167.02px] rounded-[16px] border border-white/20 bg-white/15 p-[24px] gap-[8px] p-6 gap-2 backdrop-blur-[20px]">
               <Leaf className=" mt-auto w-[17px] h-[17px] text-[#C3F400]"/>
               </div>
            </div>
        </div>
        </div>
    )
}

