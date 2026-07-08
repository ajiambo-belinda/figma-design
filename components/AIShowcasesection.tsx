import { Video, Globe } from "lucide-react";
 

export default function AIShowcasesection () {
    return (
        <section className=" relative w-[1280px] h-[861.59px]  px-[24px] pt-[96px] pb-[96px] bg-[#00180C]">
            <div className="absolute top-0 left-0 w-full h-[128px] bg-gradient-to-b from-[#f9f9ff] to-[#f9f9ff]/0 z-10 pointer-events-none"></div>
            <div className="flex flex-col w-full max-w-[1280px] px-[64px] gap-[64px]">
                <div className="flex flex-col w-[1152px] h-[173.59px] gap-[15px]">
                    {/*Overlay*/}
                    <div className="flex flex-row items-center w-fit rounded-full py-[8px] px-[16px] gap-[8px] text-[#C1F100]">
                        < Video className="w-[15px] h-[12px] text-[#C3F400]"/>
                        <span className="font-inter font-normal text-[14px] leading-[20px] text-[#C3F400]">AI IN ACTION</span>
                        </div>
                        <div className="w-full h-[58.59px]">
                            <h2 className="w-[1152px] h-[58px] font-montserrat font-semibold text-[48px] leading-[57.6px] tracking-[0px] text-white">
                                Real-time Intelligence, {""}
                                <span className="font-montserrat font-semibold text-[48px] leading-[57.6px] tracking-[0px] text-[#C3F400]">
                                    Live in the Field
                                </span>
                            </h2>
                        </div>
                        <div className="flex flex-col w-full h-[49px] max-w-[672px] pt-[1px]">
                            <p className="font-inter font-normal w-[661.7px] h-[48px] text-[16px] leading-[24px] tracking-[0px] text-[#ACCFB8]">
                                Watch how Tilth Africa transforms raw visual data into actionable agricultural insights in milliseconds.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-[48px] w-full h-[432px]">
                            <div className="flex flex-col w-full h-[432px] left-[800px] gap-[24px] grid-cols-3 ">
                                <div className="flex flex-col w-[352px] h-[128px] rounded-[16px] border border-white/5 ring-1 ring-white/10">
                                <div className="flex flex-row w-[350px] h-[126px]">
                                    <div className="flex flex-col w-[116.66px] h-[126px]">
                                        <img src="/leaf.png"
                                         alt="Pathogen"
                                         className="w-[116.66px] h-[126px] [#ffffff]"
                                          />
                                         <div className="w-[116.66px] h-[126px] bg-[#BA1A1A]/20 mix-blend-overlay"></div>
                                    </div>
                                    <div className="flex flex-col w-[233.33px] h-[126px] p-[16px]">
                                        <div className="flex flex-col w-[201.33px] h-[19px] pb-[4px]">
                                            <div className="w-[201.33px] h-[15px]">
                                                <h1 className="w-fit font-inter font-bold text-[10px] leading-[15px] tracking-[0px] uppercase text-[#C3F400]">pathogen scan</h1>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[201.33px] h-[24px] pb-[4px]">
                                            <div className="w-[201.33px] h-[20px]">
                                                <p className="w-[201.33px] h-[20px] font-inter font-bold text-[14px] leading-[20px] tracking-[0px] text-[#FFFFFF]">Real-time Blight Detection</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row w-[201.33px] h-15px] gap-[3.99px]">
                                            <div className="flex flex-col w-[11px] h-[10.5px]">
                                                <h2 className="w-[92.5px] h-[15px] font-inter font-normal text-[10px] leadding-[15px] tracking-[0px] text-[#ACCFBB]">Verified by iSDAsoil</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <data className="flex flex-col w-[352px] h-[128px] rounded-[16px] border border-white/5 ring-1 ring-white/10">
                                <div className="flex flex-row w-[350px] h-[126px]">
                                    <div className="flex flex-col w-[116.66px] h-[126px]">
                                        <img src="/soil.png"
                                         alt="crop" 
                                         className="w-[116.66px] h-[126px] [#FFFFFF]"
                                         />
                                         <div className="w-[116.66px] h-[126px] mix-blend-overlay [#C3F400]/20"></div>
                                    </div>
                                    <div className="flex flex-col w-[233.33px] h-[126px] p-[16px]">
                                        <div className="flex flex-col w-[201.33px] h-[19px] pb-[4px]">
                                            <div className="flex flex-col w-[201.33px] h-[15px]">
                                                <h1 className="w-[201.33px] h-[15px] font-inter font-bold text-[10px] leading-[15px] tracking-[0px] uppercase text-[#C3F400]">soil analysis</h1>
                                            </div>
                                        </div>
                                        <div className="flow flow-col w-[201.33px] h-[24px] pb-[4px]">
                                            <div className="flex flex-col w-[201.33px] h-[20px]">
                                                <p className="w-[201.33px] h-[20px] font-inter font-bold text-[14px] leading-[20px] tracking-[0px] text-[#FFFFFF]">AR Moisture Mapping</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row w-[201.33px] h-[15px] gap-[3.99px]">
                                            <div className="flex flex-row items-center gap-[3.99px]">
  <Globe className="w-[10px] h-[10px] text-[#ACCFB8]" />
  <h2 className="font-inter font-normal text-[10px] leading-[15px] tracking-[0px] text-[#ACCFB8] m-0">
    NASA POWER Integration
  </h2>
</div>
                                        </div>
                                    </div>
                                </div>
                                </data>
                                <data className="flex flex-col w-[352px] h-[128px] rounded-[16px] border border-white/5 ring-1 ring-white/10">Multi-Crop</data>
                            </div>
                        </div>

                </div>
            </div>

        </section>
    )
}
