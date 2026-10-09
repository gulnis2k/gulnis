import FadeIn from "./animations/FadeIn";
import StaggerReveal from "./animations/StaggerReveal";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";
import GalleryCarousel from "./GalleryCarousel";

export default async function Gallery() {
  const query = `*[_type == "gallery"][0]`;
  const galleryData = await client.fetch(query);
  
  let images: any[] = [];

  if (galleryData?.images && galleryData.images.length > 0) {
    images = galleryData.images.map((img: Image, index: number) => ({
      src: urlForImage(img)?.url() || "",
      alt: `Gallery image ${index + 1}`
    })).filter((img: any) => img.src !== "");
  }

  // If there are no images in Sanity, do not render the section
  if (images.length === 0) {
    return null;
  }

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

        {/* Gallery Content */}
        <FadeIn direction="up" delay={0.1}>
          {images.length >= 3 && images.length <= 8 ? (
            <GalleryCarousel images={images} />
          ) : (
            <StaggerReveal 
              staggerAmount={0.1} 
              direction="up" 
              className={
                images.length < 4 
                  ? "flex flex-wrap justify-center gap-4" 
                  : "grid grid-cols-2 md:grid-cols-4 gap-4"
              }
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`relative aspect-square rounded-2xl overflow-hidden group shadow-sm border border-gray-100 ${
                    images.length === 1 
                      ? "w-full max-w-sm" 
                      : images.length < 4 
                        ? "w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] max-w-xs"
                        : ""
                  }`}
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
          )}
        </FadeIn>
      </div>
    </section>
  );
}
