"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import StaggerReveal from "./animations/StaggerReveal";

import { urlForImage } from "@/sanity/lib/image";

type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  available: boolean;
  image: any;
  imageAlt: string;
  description?: string;
  displayOrder?: number;
  featured?: boolean;
};

export default function BestSellers({ products }: { products: Product[] }) {
  // Format products from Sanity
  const formattedProducts = products.map((product) => ({
    ...product,
    imageUrl: product.image ? urlForImage(product.image)?.url() : "",
  }));

  // Filter for featured/best seller products and limit to maximum 8
  const bestSellers = formattedProducts
    .filter(product => product.featured)
    .slice(0, 8);

  const productJsonLd = bestSellers.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.imageUrl || "https://gulnis.in/images/hero-image.webp",
    "description": product.description || `Freshly baked ${product.name} from Gul NiS Homey Bakes by SK.`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": product.price,
      "availability": product.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "url": `https://gulnis.in/products?category=${product.category}`
    }
  }));

  return (
    <section className="py-20 bg-[#FAF8F5]" id="products">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <FadeIn direction="up">
          <div className="mb-10">
            <div className="mb-4">
              <span className="text-[#3A261D] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Our Menu
              </span>
              <div className="flex items-center gap-6">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3A261D] whitespace-nowrap">
                  Best Sellers
                </h2>
                <div className="flex-1 h-[1px] bg-[#E5D8CF]"></div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Product Grid */}
        {bestSellers.length > 0 ? (
          <StaggerReveal 
            staggerAmount={0.15} 
            direction="up" 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {bestSellers.map((product) => (
              <div
                key={product._id}
                className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 bg-[#F3EBE6]"></div>
                  <Image
                    src={product.imageUrl || "/images/hero-image.webp"}
                    alt={product.imageAlt || product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <div className="mb-3 flex-grow">
                    <h3 className="font-serif font-bold text-[#3A261D] text-lg mb-1 leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F3EBE6]">
                    <span className="font-bold text-[#2A1B16]">
                      ₹{product.price}
                    </span>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919047220070"}?text=${encodeURIComponent(
                        `Hi! I'd like to order: ${product.name} (₹${product.price})`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3A261D] hover:bg-black text-white p-2 md:px-4 md:py-2 rounded-full transition-colors flex items-center justify-center"
                      aria-label={`Order ${product.name} on WhatsApp`}
                    >
                      <span className="hidden md:inline font-medium text-xs">Order</span>
                      <svg className="w-4 h-4 md:hidden" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        ) : (
          <div className="py-12 text-center border-2 border-dashed border-[#E5D8CF] rounded-xl">
            <p className="text-[#3A261D] opacity-70">More products coming soon...</p>
          </div>
        )}

        <FadeIn direction="up" delay={0.2} className="mt-12 flex justify-center">
          <Link 
            href="/products"
            className="border border-[#3A261D] text-[#3A261D] hover:bg-[#3A261D] hover:text-[#FAF8F5] px-8 py-3 rounded-full font-medium transition-colors text-sm flex items-center gap-2"
          >
            View Full Menu <span>&rarr;</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
