import { Video } from "lucide-react";

export default function AIShowcasesection () {
    return (
        <section className=" relative w-full max-w-[1280px] mx-auto px-[24px] pt-[96px] pb-[96px] bg-[#00180C]">
            <div className="absolute top-0 left-0 w-full h-[128px] bg-gradient-to-b from-[#f9f9ff] to-[#f9f9ff]/0 z-10 pointer-events-none"></div>
            <div className="flex flex-col w-full max-w-[1280px] px-[64px] gap-[64px]">
                <div className="flex flex-col w-[1152px] h-[173.59px] gap-[15px]">
                    {/*Overlay*/}
                    <div className="flex flex-row items-center w-fit rounded-full py-[8px] px-[16px] gap-[8px] text-[#C1F100]">
                        < Video className="w-[15px] h-[12px] text-[#C3F400]"/>
                        <span className="font-inter font-normal text-[14px] leading-[20px] text-[#C3F400]">AI IN ACTION</span>
                        

                        
                    </div>
                </div>
            </div>

        </section>
    )
}
