"use client";

import { useEffect, useState } from "react";
import FadeIn from "./animations/FadeIn";
import StaggerReveal from "./animations/StaggerReveal";
import { urlForImage } from "@/sanity/lib/image";

const categories = [
  { name: "All", slug: "all" },
  { name: "Cakes", slug: "cakes" },
  { name: "Brownies", slug: "brownies" },
  { name: "Cookies", slug: "cookies" },
  { name: "Desserts", slug: "desserts" },
  { name: "Plum Cake", slug: "plum-cake" },
  { name: "Custom Cakes", slug: "custom-cakes" },
];

export default function AllProducts({ products = [] }: { products?: any[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [whatsappNumber, setWhatsappNumber] = useState("0000000000");

  useEffect(() => {
    setWhatsappNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0000000000");

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#products?category=")) {
        const category = hash.split("=")[1];
        if (category) setActiveCategory(category);
      } else if (hash === "#products") {
        setActiveCategory("all");
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Format products from Sanity
  const formattedProducts = products.map((product) => ({
    _id: product._id,
    name: product.name,
    price: product.price,
    category: product.category,
    image: product.image ? urlForImage(product.image)?.url() : "",
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

  return (
    <section className="py-20 bg-[#FAF8F5]" id="products">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <FadeIn direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div>
              <span className="text-[#3A261D] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Our Menu
              </span>
              <div className="flex items-center gap-6">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3A261D]">
                  All Products
                </h2>
                <div className="hidden md:block flex-1 h-[1px] bg-[#E5D8CF] w-[100px] lg:w-[200px]"></div>
              </div>
            </div>

            {/* Category Filters (Pills) */}
            <div className="flex flex-wrap justify-start lg:justify-end gap-2 md:gap-3">
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
          <StaggerReveal staggerAmount={0.15} direction="up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 bg-[#F3EBE6]"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="font-sans font-bold text-[#3A261D] text-[0.95rem] md:text-base leading-tight mb-1">
                      {product.name}
                    </h3>
                    <div className="font-bold text-[#3A261D] text-sm md:text-[0.95rem] mb-4">
                      ₹{product.price}
                    </div>
                  </div>
                  
                  {product.available ? (
                    <a
                      href={getWhatsAppUrl(product.name, product.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#1DA851] hover:bg-[#188c43] text-white text-center py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                      </svg>
                      Order on WhatsApp
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-100 text-gray-400 text-center py-2.5 rounded-full text-sm font-medium cursor-not-allowed"
                    >
                      Currently Unavailable
                    </button>
                  )}
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
