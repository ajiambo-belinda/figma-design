import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  return (
    <header className="w-full relative top-0 z-50 px-26.5 py-0">
    
    <nav className="w-full max-w-5xl mx-auto flex items-center justify-between px-6 bg-white border-b border-gray-200 shadow-sm">

      
      <div className="w-full max-w-5xl mx-auto h-[65px] flex items-center justify-between px-6">
        
        <h1 className={`${montserrat.className} text-[24px] leading-[31.2px] font-bold text-[#00180C]`}>
          Tilth Africa
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#app-features" className="text-sm font-medium text-[#00180C] hover:text-[#506600] transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-[#506600]">
            App Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-[#00180C] hover:text-[#506600] transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-[#506600]">
            How it Works
          </Link>
          <Link href="#capabilities" className="text-sm font-medium text-[#00180C] hover:text-[#506600] transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-[#506600]">
            Capabilities
          </Link>
          <Link href="#impact" className="text-sm font-medium text-[#00180C] hover:text-[#506600] transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-[#506600]">
            Impact
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <button className="text-sm font-medium text-[#00180C] hover:text-[#506600] transition-colors">
            Login
          </button>
          <button className="px-6 py-2 bg-[#CCFF00] text-[#00180C] font-semibold rounded-1g hover:bg-[#b8e600] transition-colors">
            Get the App
          </button>
        </div>

        <button className="md:hidden p-2 text-[#00180C]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
    </header>
  );
}
