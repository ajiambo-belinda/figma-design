import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[921px] w-[1280px]">
      {/* Background Image */}
      <Image

        src="/image.png"
        alt="Tea Plantation"
        fill
        priority
        className="object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-12">
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