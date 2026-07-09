import { Video } from "lucide-react";

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

        {/* Min Video player*/}
        <div className="grid grid-cols-3 w-[1152px] h-[432px] gap-x-[48px] gap-y-[48px]">
          <div className="grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-2 w-[752px] h-[432px] pb-[9px]">
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
              </div>

              {/* Scanning line */}
              <div className="absolute top-0 left-0 w-[750px] h-[4px] bg-[#C3F400] shadow-[0px_0px_40px_10px_#C3F400] z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}