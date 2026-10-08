"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "./animations/FadeIn";

export default function ShopByCategory() {
  const categories = [
    { name: "Brownies", slug: "brownies", image: "/images/1brownie.webp" },
    { name: "Blondie", slug: "blondie", image: "/images/2blondie.webp" },
    { name: "Cookie pie", slug: "cookie-pie", image: "/images/3cookiepie.webp" },
    { name: "Cookies", slug: "cookies", image: "/images/4cookie.webp" },
    { name: "Waffles", slug: "waffles", image: "/images/5waffles.webp" },
    { name: "Hot chocolate", slug: "hot-chocolate", image: "/images/6hotchocolate.webp" },
    { name: "Cakes", slug: "cakes", image: "/images/7cakes.webp" },
    { name: "Chocolates", slug: "chocolates", image: "/images/8chocolates.webp" },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <FadeIn direction="up">
          <div className="flex justify-between items-end mb-12 relative">
            <div>
              <span className="text-[#3A261D] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Our Specials
              </span>
              <div className="flex items-center gap-6">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3A261D]">
                  Shop by Category
                </h2>
                <div className="hidden md:block flex-1 h-[1px] bg-[#E5D8CF] max-w-[200px]"></div>
              </div>
            </div>
            
            <div className="hidden md:block absolute right-0 -top-8 text-[#3A261D]/40 transform rotate-[-5deg]">
              <span className="font-script text-5xl leading-tight flex flex-col items-center">
                <span>Sweet</span>
                <span>Moments</span>
                <span className="-mr-12">Always ♡</span>
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Categories Grid Container */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-14 pb-8 pt-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group flex flex-col items-center text-center w-28 sm:w-36 md:w-44"
              >
                <div className="w-full aspect-square rounded-full bg-[#F3EBE6] p-[6px] mb-3 md:mb-4 relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-white/50">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 150px, 200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="font-serif font-bold text-[#3A261D] text-sm md:text-base group-hover:text-black transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="mt-8 flex justify-center">
          <Link 
            href="/products"
            className="border border-[#3A261D] text-[#3A261D] hover:bg-[#3A261D] hover:text-[#FAF8F5] px-8 py-3 rounded-full font-medium transition-colors text-sm flex items-center gap-2"
          >
            View All Categories <span>&rarr;</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
