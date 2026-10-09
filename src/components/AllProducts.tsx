"use client";

import { useEffect, useState } from "react";
import FadeIn from "./animations/FadeIn";
import StaggerReveal from "./animations/StaggerReveal";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

import { useSearchParams } from "next/navigation";

const categories = [
  { name: "All", slug: "all" },
  { name: "Brownies", slug: "brownies" },
  { name: "Blondie", slug: "blondie" },
  { name: "Cookie pie", slug: "cookie-pie" },
  { name: "Cookies", slug: "cookies" },
  { name: "Waffles", slug: "waffles" },
  { name: "Hot chocolate", slug: "hot-chocolate" },
  { name: "Cakes", slug: "cakes" },
  { name: "Chocolates", slug: "chocolates" },
];

export default function AllProducts({ products = [] }: { products?: any[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [whatsappNumber, setWhatsappNumber] = useState("0000000000");
  const searchParams = useSearchParams();

  useEffect(() => {
    setWhatsappNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919047220070");
    
    // Read category from URL parameter
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Format products from Sanity
  const formattedProducts = products.map((product) => ({
    _id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    image: product.image ? urlForImage(product.image)?.url() : "",
    imageAlt: product.imageAlt,
    available: product.available,
  }));

  const filteredProducts =
    activeCategory === "all"
      ? formattedProducts
      : formattedProducts.filter((product) => product.category === activeCategory);

  const getWhatsAppUrl = (productName: string, price: number) => {
    const text = encodeURIComponent(
      `Hi! I'd like to order ${productName}. Price: ₹${price}`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const productJsonLd = formattedProducts.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image || "https://gulnis.in/images/hero-image.webp",
    "description": product.description || `Freshly baked ${product.name} from Gul NiS Homey Cakes by SK.`,
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
            <div className="mb-8">
              <span className="text-[#3A261D] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Our Menu
              </span>
              <div className="flex items-center gap-6">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3A261D] whitespace-nowrap">
                  All Products
                </h2>
                <div className="flex-1 h-[1px] bg-[#E5D8CF]"></div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mb-10 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C18861] rounded-l-md"></div>
              <div className="bg-[#FAF8F5] border border-[#E5D8CF] border-l-0 rounded-r-md p-5 md:p-6 shadow-sm max-w-4xl">
                <h4 className="font-serif text-[#3A261D] text-lg font-bold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C18861]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Important Booking Information
                </h4>
                <div className="text-[#3A261D]/80 text-[15px] leading-relaxed space-y-2">
                  <p>
                    All our creations are freshly baked to order. We require a minimum of <strong className="text-[#3A261D]">12 to 16 hours</strong> advance notice before your required delivery time.
                  </p>
                  <p>
                    <strong className="text-[#3A261D]">Pricing:</strong> Base prices listed are for <strong>1kg</strong>. Please refer to the product description for 500g or per-piece pricing options.
                  </p>
                </div>
              </div>
            </div>

            {/* Category Filters (Pills) */}
            <div className="flex flex-wrap justify-start gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.slug
                      ? "bg-[#3A261D] text-white shadow-md"
                      : "bg-[#F3EBE6] text-[#3A261D] hover:bg-[#E5D8CF]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <StaggerReveal 
            staggerAmount={0.15} 
            direction="up" 
            className={
              filteredProducts.length < 4 
                ? "flex flex-wrap justify-center gap-4 md:gap-6" 
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            }
          >
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full ${
                  filteredProducts.length < 4 
                    ? "w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]" 
                    : ""
                }`}
              >
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 bg-[#F3EBE6]"></div>
                  <Image
                    src={product.image || "/images/hero-image.webp"}
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
                    {product.description && (
                      <p className="text-[#3A261D]/70 text-sm line-clamp-2 mt-1">
                        {product.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F3EBE6]">
                    <span className="font-bold text-[#2A1B16]">
                      ₹{product.price}
                    </span>
                    {product.available ? (
                      <a
                        href={getWhatsAppUrl(product.name, product.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3A261D] hover:bg-black text-white p-2 md:px-4 md:py-2 rounded-full transition-colors flex items-center justify-center"
                        aria-label={`Order ${product.name} on WhatsApp`}
                      >
                        <span className="hidden md:inline font-medium text-xs">Order</span>
                        <svg className="w-4 h-4 md:hidden" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                        </svg>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-100 text-gray-400 px-4 py-2 rounded-full text-xs font-medium cursor-not-allowed"
                      >
                        Unavailable
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        ) : (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="font-serif text-xl font-bold text-[#3A261D] mb-2">
              No products found
            </h3>
            <p className="text-[#3A261D]/70">
              We're baking something new for this category. Check back soon!
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-6 bg-[#3A261D] text-white hover:bg-[#2A1B16] px-6 py-2 rounded-full font-medium transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
