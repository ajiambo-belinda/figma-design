import { Video, Heading, Globe, BadgeCheck } from "lucide-react";

export default function AIShowcaseSection() {
  return (
    <section className="relative flex flex-col w-[1280px] h-[861.59px] pt-[96px] pb-[96px] bg-[#00180C]">
      <div className="absolute top-0 left-0 w-[1280px] h-[128px] bg-gradient-to-b from-[#f9f9ff] to-[#f9f9ff]/0 z-10 pointer-events-none"></div>

      <div className="flex flex-col w-[1280px] h-[669.59px] max-w-[1280px] pr-[64px] pl-[64px] gap-[64px]">
        <div className="w-[1152px] h-[173.59px] gap-[15px]">
          <div className="flex flex-row items-center w-[144.06px] h-[36px] rounded-[9999px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] gap-[8px] bg-[#C1F100]/10">
            <Video className="w-[15px] h-[12px] text-[#C3F400]" />
            <h1 className="w-[89.06px] h-[20px] font-inter font-normal text-[14px] leading-[20px] tracking-[0px] text-[#C3F400]">
              AI IN ACTION
            </h1>
          </div>
          <div className="flex flex-col w-[1152px] h-[58.98px] pb-[0.59px]">
            <h2 className="w-[1152px] h-[58px] font-montserrat font-semibold text-[48px] leading-[57.68px] tracking-[0px] text-white">
              Real-time Inteligence, {""}
              <span className="font-montserrat font-semibold text-[48px] leading-[57.6px] tracking-[0px]">
                Live in the Field
              </span>
            </h2>
          </div>
          <div className="flex flex-col w-[672px] h-[49px] max-w-[672px] pt-[1px] font-inter font-normal text-[16px] leading-[24px] tracking-[0px] text-[#ACCFB8]">
            <p className="w-[661.7px] h-[48px]">
              Watch how Tilth Africa transforms raw visual data into actionable agricultural insights in milliseconds.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-3 w-[1152px] h-[432px] gap-x-[48px] gap-y-[48px]">

          {/* Min Video player*/}
          <div className="col-start-1 col-span-2 w-[752px] h-[432px] pb-[9px]">

            {/* Overlay + Border + Shadow*/}
            <div className="relative w-[752px] h-[423px] rounded-[36px] overflow-hidden border border-[#FFFFFF]/10 bg-[#FFFFFF]/20 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <img
                src="/maize field.png"
                alt="crop"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* HUD Element*/}
              <div className="absolute top-[32px] left-[554.58px] flex flex-col w-[163.42px] h-[80px] gap-[8px] p-[16px] rounded-[12px] border border-[#FFFFFF]/20 bg-[#FFFFFF]/25 backdrop-blur-[20px]">
                <div className="flex flex-row w-[129.42px] h-[15px] pr-[38.08px] gap-[8px]">
                  <div className="flex flex-row items-center gap-[8px]">
                    <div className="w-[8px] h-[8px] rounded-[9999px] bg-[#BA1A1A]"></div>
                    <h1 className="w-[75.34px] h-[15px] font-inter font-bold text-[10px] leading-[15px] tracking-[1px] uppercase text-[#FFFFFF]">
                      SCANNING...
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col w-[129.42px] h-[23px] gap-[4px]">
                  <div className="w-[96px] h-[4px] rounded-[9999px] bg-[#FFFFFF]/10">
                    <div className="w-[72px] h-[4px] bg-[#C3F400]"></div>
                  </div>
                  <p className="w-[129.42px] h-[16px] font-inter font-normal text-[10px] leading-[16px] tracking-[0px] text-[#ACCFB8]">
                    Processing Neural Net v4.2
                  </p>
                </div>
              </div>

              {/* Growth stage bounding box */}
              <div className="relative absolute w-[96px] h-[96px] top-[184.68px] left-[466.5px] rounded-[8px] border-[2px] border-[#C3F400]/40">
                <div className="absolute flex flex-col w-[92px] h-[34px] top-[-22px] left-[2px] rounded-[4px] pt-[2px] pr-[31.52px] pb-[2px] pl-[8px] bg-[#C3F400]/40">
                  <h2 className="w-[52.48px] h-[30px] font-inter font-bold text-[10px] leading-[15px] tracking-[0px] text-[#ffffff]">
                    GROWTH STAGE V4
                  </h2>
                </div>
              </div>

              {/* Maize confidence bounding box */}
              <div className="relative absolute w-[128px] h-[128px] top-[105.25px] left-[250px] rounded-[8px] border-[2px] border-[#C3F400]">
                <div className="absolute flex flex-col w-[124px] h-[34px] top-[-22px] left-[2px] rounded-[4px] pt-[2px] pr-[50.2px] pb-[2px] pl-[8px] bg-[#C3F400]">
                  <h3 className="w-[65.8px] h-[30px] font-inter font-bold leading-[15px] text-[10px] tracking-[0px] text-black">
                    MAIZE: 98% CONFIDENCE
                  </h3>
                </div>
                <button className="absolute top-[58px] left-[96px] w-[80px] h-[80px] rounded-full bg-[#C3F400] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] flex items-center justify-center z-30">
    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[18px] border-l-[#161E00] ml-[4px]" />
  </button>
</div>
              </div>

              {/* Scanning line */}
              

              
              </div>

              {/* Capabilities clips grid */}

              <div className="flex flex-col w-[352px] h-[432px] gap-[24px]">
                <div className="w-[352px] h-[128px] rounded-[16px] border border-white/10 bg-white/5">
                <div className="flex flex-row w-[350px] h-[126px]">
                  <div className="flex flex-col w-[116.66px] h-[126px]">
                    <img src="/leaf.png" 
                    alt="" 
                    className="w-[116.66px] h-[126px] bg-[#FFFFFF]"
                    />
                    <div className="absolute left-0 top-0 w-[116.66px] h-[126px] bg-[#BA1A1A]/20 mix-blend-overlay rounded-l-[16px]"></div>
                    </div>
                    <div className="flex flex-col w-[233.33px] h-[126px] p-[16px]">
                      <div className="flex flex-col w-[201.33px] h-[19px] pb-[19px]">
                        <div className="flex flex-col w-[201.33px] h-[15px]">
                          <h1 className="w-[201.33px] h-[15px] font-inter font-bold text-[10px] leading-[15px] tracking-[0px] text-[#C3F400]">PATHOGEN SCAN</h1>
                        </div>
                        <div className="flex flex-col w-[201.33px] h-[24px] pb-[4px]">
                          <div className="flex flex-col w-[201.33px] h-[20px]">
                            <p className="w-[201.33px] h-[20px] font-inter font-bold text-[14px] leading-[20px] tracking-[0px] text-[#ffffff]">Real-time Blight Detection</p>
                          </div>
                          <div className="flex flex row w-[201.33px] h-[15px] gap-[3.99px]">
                            
                              <BadgeCheck className="w-[11px] h-[10.5px] text-[#ACCFB8]" />
                              <h2 className="w-[92.5px] h-[15px] font-inter font-bold text-[10px] leading-[15px] tracking-[0px] text-[#ACCFB8]">Verified by iSDA soil</h2>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                </div>
                <div className="flex flex-col w-[352px] h-[128px] rounded-[16px] border border-white/10 bg-white/5">
  <div className="flex flex-row w-[350px] h-[126px]">
    <div className="relative flex flex-col w-[116.66px] h-[126px]">
      <img 
        src="/soil.png" 
        alt=""
        className="w-[116.66px] h-[126px] object-cover rounded-l-[16px] bg-white"
      />
      <div className="absolute left-0 top-0 w-[116.66px] h-[126px] bg-[#c3f400]/20 mix-blend-overlay rounded-l-[16px]"></div>
    </div>
    <div className="flex flex-col w-[233.33px] h-[126px] p-[16px]">
      <div className="w-[201.33px] h-[19px] pb-[4px] flex flex-col">
        <div className="flex flex-col w-[201.33px] h-[15px]">
          <h1 className="w-[201.33px] h-[15px] font-inter font-bold text-[10px] leading-[15px] tracking-[0px] text-white">
            SOIL ANALYSIS
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-[201.33px] h-[24px] pb-[4px]">
        <div className="flex flex-col w-[201.33px] h-[20px]">
          <h2 className="w-[201.33px] h-[20px] font-inter font-bold text-[14px] leading-[20px] tracking-[0px] text-[#C3F400]">AR Moisture Mapping</h2>
        </div>
      </div>
      <div className="flex flex-row w-[201.33px] h-[15px] gap-[3.99px]">
        
          <Globe className="w-[10px] h-[10px] text-[#ACCFB8]"/>
          <h3 className=" whitespace-nowrap flex flex-col w-[120.42px] h-[15px] font-inter font-bold text-[10px] leading-[15px] tracking-[0px] text-[#ACCFB8]">NASA POWER Intergration</h3>
        
      </div>
    </div>
  </div>
</div>
                <div className="flex flex-col w-[352px] h-[128px] rounded-[16px] border border-white/10 bg-white/5">
                <div className="flex flex-row w-[350px] h-[126px]">
                  <div className="relative w-[116.66px] h-[126px] overflow-hidden">
                    <img src="/field.png" 
                    alt="" 
                     className="w-[full] h-[full] bg-[#ffffff] object-cover" />
                  </div>
                  <div className="flex flex-col w-[233.33px] h-[126px] p-[16px]"> 
                    <div className="flex flex-col w-[201.33px] h-[19px] pb-[4px]">
                      <div className="flex flex-col w-[201.33px] h-[15px] ">
                        <h1 className="w-[201.33px] h-[15px] font-inter font-bold text-[10px] leading-[15px] tracking-[0px] text-[#C3F400]">CROP IDENTIFICATION</h1>
                      </div>
                    </div>
                    <div className="w-[201.33px] h-[24px] pb-[4px]">
                      <div className="w-[201.33px] h-[20px]">
                        <h2 className="w-[201.33px] h-[20px] font-inter font-bold text-[14px] leading-[20px] tracking-[0px] text-[#ffffff]">PANORAMIC VARIETY SCAN</h2>
                      </div>
                    </div>
                    <div className="flex flex-row w-[201.33px] h-[15px] gap-[3.99px]">
                      <BadgeCheck className="w-[11px] h-[10.6px] text-[#ACCFB8]"/>
                      <h3 className="w-[92.5px] h-[15px] font-inter font-normal text-[10px] leading-[15px] tracking-[0px] text-[#ACCFB8] text-white">Verified by iSDAsoil</h3>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      
    </section>
  );
}