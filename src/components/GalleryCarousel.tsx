"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryCarouselProps {
  images: { src: string; alt: string }[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500); // Auto-scroll every 3.5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-12 px-4 md:px-0">
      <div className="flex justify-center items-center h-[300px] md:h-[450px] relative">
        {images.map((img, index) => {
          // Calculate distance from center
          let diff = index - currentIndex;
          if (diff > images.length / 2) diff -= images.length;
          if (diff < -images.length / 2) diff += images.length;

          // Determine styling based on position relative to center
          let translateX = 0;
          let scale = 1;
          let zIndex = 0;
          let opacity = 0;

          if (diff === 0) {
            // Center active slide
            translateX = 0;
            scale = 1;
            zIndex = 30;
            opacity = 1;
          } else if (diff === 1 || (diff === -images.length + 1 && images.length > 2)) {
            // Right slide
            translateX = 50; // 50%
            scale = 0.75;
            zIndex = 20;
            opacity = 0.7;
          } else if (diff === -1 || (diff === images.length - 1 && images.length > 2)) {
            // Left slide
            translateX = -50;
            scale = 0.75;
            zIndex = 20;
            opacity = 0.7;
          } else {
            // Hidden slides (further out)
            translateX = diff > 0 ? 100 : -100;
            scale = 0.5;
            zIndex = 10;
            opacity = 0;
          }

          // Desktop has a wider spread than mobile
          const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : true;
          const desktopTranslate = diff === 0 ? 0 : diff > 0 ? 60 : -60;

          return (
            <div
              key={index}
              className="absolute w-[75%] sm:w-[50%] md:w-[45%] h-full transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                transform: `translateX(calc(${isDesktop ? desktopTranslate : translateX}%)) scale(${scale})`,
                zIndex,
                opacity,
              }}
              onClick={() => {
                if (diff === 1) nextSlide();
                if (diff === -1) prevSlide();
              }}
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl border border-[#E5D8CF]/50 bg-[#F3EBE6]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 50vw"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white text-[#3A261D] rounded-full flex items-center justify-center shadow-md z-40 transition-colors focus:outline-none"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white text-[#3A261D] rounded-full flex items-center justify-center shadow-md z-40 transition-colors focus:outline-none"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Indicators */}
      <div className="flex justify-center gap-2 mt-8 relative z-40">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-[#C18861] w-6" : "bg-[#E5D8CF] hover:bg-[#D4B59D]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
