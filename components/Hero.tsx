
import Image from "next/image";


export default function Hero() {
  return (
    <section 
      className="relative flex flex-row w-[1280px] min-h-[921px] mt-[64px] pt-[122.72px] pb-[122.73px] bg-[#00180C] mx-auto overflow-hidden"
    >
     
      <Image
        src="/image.png"
        alt="Tea Plantation"
        fill
        priority
        className="object-cover opacity-40"
      />

      
      <div className="relative z-10 flex w-full items-center px-12">
        <div>
          <h1 className="text-6xl font-bold text-white">
            Tilth Africa
          </h1>

          <p className="mt-4 max-w-lg text-lg text-white">
            Sustainable agriculture for a better future.
          </p>
        </div>
      </div>
    </section>
  );
}