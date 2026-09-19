import FadeIn from "./animations/FadeIn";
import StaggerReveal from "./animations/StaggerReveal";

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Beautiful layered cake",
    },
    {
      src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Freshly baked brownies",
    },
    {
      src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Chocolate chip cookies",
    },
    {
      src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Delicious dessert",
    },
    {
      src: "https://images.unsplash.com/photo-1608681283626-d62111d4d122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Plum cake",
    },
    {
      src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Custom celebration cake",
    },
    {
      src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Red velvet cake",
    },
    {
      src: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Carrot cake",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]" id="gallery">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section with Script */}
        <FadeIn direction="up">
          <div className="flex justify-between items-end mb-16 relative">
            <div>
              <span className="text-[#3A261D] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Our Gallery
              </span>
              <div className="flex items-center gap-6">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3A261D]">
                  A Glimpse of Our Creations
                </h2>
                <div className="hidden md:block flex-1 h-[1px] bg-[#E5D8CF] w-[100px] lg:w-[200px]"></div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute right-0 -top-4 text-[#3A261D]/40 transform rotate-[-5deg]">
              <span className="font-script text-4xl leading-tight flex flex-col items-center">
                <span>Sweet Moments</span>
                <span className="ml-8">Captured ♡</span>
              </span>
            </div>
          </div>
        </FadeIn>

        {/* 4x2 Grid of Squares */}
        <StaggerReveal staggerAmount={0.1} direction="up" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm border border-gray-100"
            >
              <div className="absolute inset-0 bg-[#F3EBE6]"></div>
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
