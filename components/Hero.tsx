import Image from "next/image";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Hero() {
  return (
    <section 
      
      className="relative flex flex-row w-full min-h-150 mt-0 py-20 bg-[#00180C] mx-auto overflow-hidden"
    >
      <Image
        src="/image.png"
        alt="Tea Plantation"
        fill
        priority
        
        className="object-cover opacity-40"
      />

      <div className="relative z-10 w-full h-[600px] px-12 flex flex-row items-center gap-12">
        <div className="w-[512px] h-[536.4px] gap-30.8pxflex flex-col w-full max-w-[450px] justify-center">

          <div className="w-full h-auto flex items-center">
            <h1 className={`${montserrat.className} text-[64px] leading-[80px] tracking-[-1.28px] font-bold text-white`}>
              Empowering Farmers with the Eyes of Ai
            </h1>
          </div>
          </div>
      </div>
    </section>
  );
}


