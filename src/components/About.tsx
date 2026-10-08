import Image from "next/image";
import FadeIn from "./animations/FadeIn";

export default function About() {
  return (
    <section className="bg-[#FAF8F5] relative overflow-hidden flex flex-col md:flex-row items-stretch" id="about">
      
      {/* Left side Image Container */}
      <FadeIn direction="left" className="flex-1 w-full relative min-h-[500px] md:min-h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
        
        {/* Decorative Script */}
        <div className="absolute top-12 left-8 md:top-20 md:left-12 z-20 text-[#3A261D] transform rotate-[-10deg]">
          <span className="font-script text-4xl md:text-5xl leading-tight flex flex-col">
            <span>More</span>
            <span>than just</span>
            <span>Cakes ♡</span>
          </span>
        </div>
        
        {/* Vertical Rectangle Video */}
        <div className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white mt-8 md:mt-0 bg-[#E5D8CF]">
          <video
            src="/videos/about.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
          />
        </div>
        
      </FadeIn>

      {/* Right side Text Content */}
      <FadeIn direction="right" className="flex-1 py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center relative bg-[#FAF8F5]">
        
        <span className="text-[#3A261D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
          About Us
        </span>
        <div className="flex items-center gap-6 mb-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3A261D]">
            Baked with Passion
          </h2>
          <div className="hidden md:block flex-1 h-[1px] bg-[#E5D8CF] max-w-[150px]"></div>
        </div>

        <p className="text-[#3A261D]/80 text-lg mb-10 leading-relaxed max-w-xl">
          At Gul NiS Homey Cakes by SK, we believe every bite should feel like a celebration. From classic cakes to indulgent brownies and delightful desserts, we create homemade treats using the finest ingredients, baked with love and care.
        </p>
        
        {/* Horizontal Pill Badges */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 bg-transparent">
            <span className="w-8 h-8 rounded-full bg-[#F3EBE6] flex items-center justify-center text-sm">🌾</span>
            <span className="text-xs font-bold text-[#3A261D]">Quality Ingredients</span>
          </div>
          <div className="flex items-center gap-2 bg-transparent">
            <span className="w-8 h-8 rounded-full bg-[#F3EBE6] flex items-center justify-center text-sm">✨</span>
            <span className="text-xs font-bold text-[#3A261D]">Hygienic Preparation</span>
          </div>
          <div className="flex items-center gap-2 bg-transparent">
            <span className="w-8 h-8 rounded-full bg-[#F3EBE6] flex items-center justify-center text-sm">🕒</span>
            <span className="text-xs font-bold text-[#3A261D]">Made Fresh Daily</span>
          </div>
          <div className="flex items-center gap-2 bg-transparent">
            <span className="w-8 h-8 rounded-full bg-[#F3EBE6] flex items-center justify-center text-sm">😊</span>
            <span className="text-xs font-bold text-[#3A261D]">Customer Happiness</span>
          </div>
        </div>

        {/* Decorative subtle plant illustration overlay (approximated with CSS for now) */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNFNUQ4Q0YiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTEgMjBDMTEgMjAgMTEgMjAgMTEgMjBaIi8+PHBhdGggZD0iTTExIDIwQzExIDE0LjUgMTUuNSAxMCAyMSAxMEMxNS41IDEwIDExIDE0LjUgMTEgMjBaIi8+PHBhdGggZD0iTTExIDIwQzExIDE0LjUgNi41IDEwIDEgMTBDNi41IDEwIDExIDE0LjUgMTEgMjBaIi8+PHBhdGggZD0iTTExIDIwQzExIDE2IDE0LjUgMTIgMTguNSAxMkMxNC41IDEyIDExIDE2IDExIDIwWiIvPjxwYXRoIGQ9Ik0xMSAyMEMxMSAxNiA3LjUgMTIgMy41IDEyQzcuNSAxMiAxMSAxNiAxMSAyMFoiLz48cGF0aCBkPSJNMTEgMjBDMTEgMTggMTIuNSAxNSAxNSAxNUMxMi41IDE1IDExIDE4IDExIDIwWiIvPjxwYXRoIGQ9Ik0xMSAyMEMxMSAxOCA5LjUgMTUgNyAxNUM5LjUgMTUgMTEgMTggMTEgMjBaIi8+PC9zdmc+')] bg-no-repeat bg-right-bottom opacity-50 bg-[length:150px_150px] pointer-events-none"></div>
      </FadeIn>
    </section>
  );
}
