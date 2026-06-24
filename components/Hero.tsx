import Image from "next/image";
import { Montserrat, inter } from "next/font/google";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
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
          <h1
            className={`${montserrat.className} text-[60px] leading-[80px] tracking-[-1.28px] text-white`}
          >
            Empowering Farmers with the {""}
            <span className="text-[#C3F400]">Eyes of AI</span>
          </h1>

          <p className="text-[#C8EBD4] text-lg leading-8">
            Turn your smartphone into a precision.
            Identify pests, monitor soil health, and optimize
            yields with real-time Ai computer vision build for 
            African soil.
          </p>
          <div className="flex flex-col gap-4 pt-[17.2px]">
            <Button className="w-[255.16px] h-[56px] rounded-full bg-[#C3F400] text-[#00180C] hover:bg-[#b5e300]">
              Download on App Store
              <div className="flex w-4 h-4 text-[#161E00]"></div>
            </Button>
          </div>
          </div>
      </div>
    </section>
  );
}

