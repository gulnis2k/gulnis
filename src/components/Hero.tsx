"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Image and overlay fade in
    tl.fromTo(
      ".hero-bg",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Text content staggered fade and slide up
    tl.fromTo(
      ".hero-text > *",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=1" // start slightly before background finishes fading
    );

    // Decorative script text float in
    tl.fromTo(
      ".hero-script span",
      { opacity: 0, x: 50, rotation: 5 },
      { opacity: 1, x: 0, rotation: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-deep-chocolate"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full">
        
        {/* Text Content */}
        <div className="hero-text flex-1 text-center lg:text-left w-full lg:max-w-xl z-20">
          <span className="inline-block text-warm-peach text-xs font-bold mb-4 tracking-[0.2em] uppercase">
            Baked with Love
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] font-bold text-main-ivory leading-[1.1] mb-6 flex flex-col items-center lg:items-start">
            <span>Freshly Baked</span>
            <span className="flex items-center gap-4">
              Happiness 
              <svg className="w-10 h-10 md:w-12 md:h-12 text-warm-tan opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-light-beige max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
            Cakes, brownies, cookies and more,<br/>
            made to make your moments sweeter.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 lg:mb-20">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0000000000"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-whatsapp-green hover:bg-[#1E7149] text-off-white px-8 py-3.5 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
              </svg>
              Order on WhatsApp
            </a>
            <a
              href="#products"
              className="w-full sm:w-auto bg-transparent border border-muted-beige hover:bg-white/10 text-off-white px-8 py-3.5 rounded-full font-medium text-sm transition-all text-center flex items-center justify-center gap-2"
            >
              Explore Products
              <span>&rarr;</span>
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-light-beige text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌿</span> Premium Ingredients
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-warm-tan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Made with Love
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📋</span> Custom Orders
            </div>
          </div>
        </div>

      </div>

      {/* Hero Background Image (Right aligned in design) */}
      <div className="hero-bg absolute inset-y-0 right-0 w-full lg:w-[60%] z-0 pointer-events-none opacity-0">
         {/* Gradient overlay to fade left side into the solid deep chocolate */}
         <div className="absolute inset-0 bg-gradient-to-r from-deep-chocolate via-transparent to-transparent z-10 hidden lg:block"></div>
         <div className="absolute inset-0 bg-deep-chocolate/40 z-10 lg:hidden"></div>
         <img 
           src="/images/hero%20image%20gulnis.webp" 
           alt="Large chocolate cake" 
           className="w-full h-full object-cover object-center lg:object-right"
         />
      </div>

      {/* Decorative Script Text */}
      <div className="hero-script hidden lg:block absolute top-32 right-32 z-20 text-warm-peach transform rotate-[-5deg]">
        <span className="font-script text-5xl leading-tight opacity-90 drop-shadow-lg flex flex-col items-end">
          <span>Good</span>
          <span>Food</span>
          <span>Brighter</span>
          <span>Days ♡</span>
        </span>
      </div>
    </section>
  );
}
