import { Leaf, TriangleAlert, Layers2 } from "lucide-react";

export default function Cards() {
  return (
    <div className="flex flex-row w-[1152px] h-[450px] gap-[32px]">
        {/* Card 1*/}
      <div className="relative overflow-hidden w-[362.66px] h-[450px] rounded-[24px] border border-[#E7EEFF] ring-1 ring-[rgba(194,200,193,0.3)] shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">

        {/* Background image */}
        <img
          src="/field.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#00180c]/0 to-[#00180c]"></div>

        {/* Glass panel — icon, heading, paragraph all together */}
        <div className="absolute bottom-[24px] left-[24px] z-20 flex flex-col w-[314.66px] rounded-[16px] border border-white/20 bg-white/15 p-[24px] gap-[8px] backdrop-blur-[20px]">
          <Leaf className="w-[17px] h-[17px] text-[#C3F400]" />

          <h3 className="font-montserrat font-bold leading-[24px] text-white text-[16px]">
            Crop Identification
          </h3>

          <p className="font-inter font-normal text-[14px] leading-[20px] text-[#C8EBD4]">
            Instantly identify over 200 crop varieties across Africa and get tailored planting advice.
          </p>
        </div>
      </div>
      {/* Card 2 */}
<div className="relative overflow-hidden w-[362.67px] h-[450px] rounded-[24px] border border-[#EFEEFF] ring-1 ring-[#C2C8C1]/30 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">

  {/* Background image */}
  <img
    src="/leaf.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#BA1A1A]/0 to-[#BA1A1A] opacity-[0.2]"></div>

  {/* Content */}
  <div className="absolute z-20 flex flex-col w-[360.67px] h-[253px] top-[196px] left-[1px] p-[32px]">
    <div className="w-[296.97px] h-[189px] rounded-[16px] p-[24px] gap-[8px] border border-white/15 ring-1 ring-[#BA1A1A]/30 bg-white/15 backdrop-blur-[20px] flex flex-col">
      <TriangleAlert className="w-[22px] h-[19px] text-[#93000A]" />
      <h3 className="font-montserrat font-bold leading-[24px] text-white text-[16px]">
        Pathogen Scan
      </h3>
      <p className="font-inter font-normal text-[14px] leading-[20px] text-[#C8EBD4]">
        Spot disease before it spreads. Our neural Networks detect fungal bacteria and viral threats in seconds.
      </p>
    </div>
  </div>
</div>

{/* Card 3 */}

<div className="relative overflow-hidden w-[362.67px] h-[450px] rounded-[24px] border border-[#EFEEFF] ring-1 ring-[#C2C8C1]/30 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">

  {/* Background image */}
  <img
    src="/soil.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#BA1A1A]/0 to-[#BA1A1A] opacity-[0.2]"></div>

  {/* Content */}
  <div className="absolute z-20 flex flex-col w-[360.67px] h-[253px] top-[196px] left-[1px] p-[32px]">
    <div className="w-[296.97px] h-[169px] rounded-[16px] p-[24px] gap-[8px] border border-white/15 ring-1 ring-[#BA1A1A]/20 bg-white/15 backdrop-blur-[20px] flex flex-col">
      <Layers2 className="w-[18px] h-[19.05px] text-[#C3F400]" />
      <h3 className="font-montserrat font-bold leading-[24px] text-white text-[16px]">
        Soil health
      </h3>
      <p className="font-inter font-normal text-[14px] leading-[20px] text-[#C8EBD4]">
        Access location-based estimated PH, Nitrogen, and moisture levels powered by iSDAsoil datasets.
      </p>
    </div>
  </div>
</div>
    </div>
  );
}