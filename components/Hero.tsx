import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Grid, BookMarked, UserCog  } from "lucide-react";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="relative w-full h-[921px] overflow-hidden">
    
      <Image
        src="/image.png"
        alt="Tea Plantation"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-gradient-to-r from-[#00180C] via-[#00180C]/70 to-[#00180C]/10 z-[1]" />

     
      <div className="relative z-10 flex items-center h-full max-w-[1280px] mx-auto px-12">
        <div className="max-w-[512px] flex flex-col gap-8">
          
          
          <h1 className={`${montserrat.className} text-[60px] leading-[80px] tracking-[-1.28px] text-white`}>
            Empowering Farmers with the {" "}
            <span className="text-[#C3F400]">Eyes of AI</span>
          </h1>

          
          <p className=" text-[#C8EBD4] text-sm leading-6">
            Turn your smartphone into a precision tool. Identify pests, 
            monitor soil health, and optimize yields with real-time AI 
            computer vision built for African soil.
          </p>

         
          <div className="flex flex-col gap-4 pt-[17.2px]">
            
         
            <Button className="w-[255.16px] h-[56px] rounded-full bg-[#C3F400] text-[#00180C] hover:bg-[#b5e300] flex items-center justify-center gap-3 font-bold text-[16px]">
              <Grid size={20} strokeWidth={2.5} />
              Download on App Store
            </Button>

            
            <Button className="w-[328.52px] h-[58px] border border-white/30 backdrop-blur-[20px] bg-white/10 rounded-full flex items-center justify-between px-8 transition-all hover:bg-white/20">
              
              <div className="flex items-center text-white">
                <span className="text-[20px] font-light tracking-[2px] uppercase flex items-center">
                  play_
                  <BookMarked size={20} strokeWidth={1.5} className="mx-[1px] mb-[2px]" />
                  s
                </span>
              </div>

              
              <span className={`${inter.className} text-[9px] font-medium tracking-tight text-white/70 whitespace-nowrap pt-[4px]`}>
    Get it on Google Play
  </span>
            </Button>

          </div>
        </div>
        {/* AIVisionMock*/}
        <div className="relative w-[552px] h-[675.55px]">
          {/* floating data chips*/}
         <div className="absolute top-[16px] right-[-50px] z-20 w-[220px] h-[74px] rounded-[16px] border border-[#C3F400]/30 bg-white/10 backdrop-blur-[20px] px-4 flex items-center gap-3 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
  <div className="flex flex row items-center justify-center w-[40px] h-[40px] rounded-8px bg-[#C1F100]/20">
  <UserCog className="w-[19.01px] h-[20px] text-[#C1F100]" />

  
    
  </div>

  <div className=" flex flex-col w-[131.39px h-[74px]">
    <p className="w-[80.56px] h-4 font-inter font-normal text-[12px] leading-4 tracking-[0px] text-white">
      AI Confidence
    </p>

<p className="w-[131.39px] h-6 text-[#C3F400] font-inter text-base leading-6 text-center">
      98.4% Accuracy
    </p>
  </div>
</div>

          {/* Background + Boarder + Shadow*/}
          <div className=" ml-28 w-[320px] h-[659.55px] rounded-[40px] border-[8px] border-[#111C2C] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            {/* UI overlays*/}
            <div className="w-[304px] h-[659.55px] top-[8px] left-[8px] flex justify-between">
              <img src="/maize field.png"
               alt="crop"
               className="object-cover rounded-[32px]"
              
              />
              
              </div>
              </div>

{/* Bottom floating chip */}
<div className="absolute bottom-[10px] left-[140px] z-18 w-[260px] h-[88px] rounded-[22px] border border-white/20 bg-white/10 backdrop-blur-[24px] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.15),0px_20px_25px_-5px_rgba(0,0,0,0.15)] px-8 py-4">
  <p className="text-[#C3F400] text-[9px] font-semibold uppercase">
    Identified Crop
  </p>

  <p className="mt-1 text-white text-[22px] font-semibold leading-none">
  Zea mays <span className="text-white/70 text-sm">(Maize)</span>
</p>
</div>
              </div>
              

</div>
      
      
    </section>
  );
}
