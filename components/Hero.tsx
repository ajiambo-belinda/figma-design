import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Grid, BookMarked } from "lucide-react";

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

          
          <p className="text-[#C8EBD4] text-lg leading-8">
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
      </div>
    </section>
  );
}

