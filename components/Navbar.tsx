import { Montserrat, } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex h-[65px] w-full max-w-5xl items-center justify-between px-6">
        <h1 className={`${montserrat.className} text-[24px] font-bold leading-[31.2px] text-[#00180C]`}>
          Tilth Africa
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#app-features"
            className="text-sm font-medium text-[#00180C] transition-colors duration-200 hover:text-[#506600]"
          >
            App Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-[#00180C] transition-colors duration-200 hover:text-[#506600]"
          >
            How it Works
          </Link>
          <Link
            href="#capabilities"
            className="text-sm font-medium text-[#00180C] transition-colors duration-200 hover:text-[#506600]"
          >
            Capabilities
          </Link>
          <Link
            href="#impact"
            className="text-sm font-medium text-[#00180C] transition-colors duration-200 hover:text-[#506600]"
          >
            Impact
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <button className="text-sm font-medium text-[#00180C] transition-colors hover:text-[#506600]">
            Login
          </button>
          <button className="rounded-full bg-[#CCFF00] px-6 py-2 font-semibold text-[#00180C] transition-colors hover:bg-[#b8e600]">
            Get the App
          </button>
        </div>

        <button className="p-2 text-[#00180C] md:hidden" aria-label="Open menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}