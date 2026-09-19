import Link from "next/link";
import Image from "next/image";
import FadeIn from "./animations/FadeIn";
import StaggerReveal from "./animations/StaggerReveal";

export default function ShopByCategory() {
  const categories = [
    {
      name: "Cakes",
      slug: "cakes",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Brownies",
      slug: "brownies",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Cookies",
      slug: "cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Desserts",
      slug: "desserts",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Plum Cake",
      slug: "plum-cake",
      image: "https://images.unsplash.com/photo-1608681283626-d62111d4d122?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Custom Cakes",
      slug: "custom-cakes",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section with Script */}
        <FadeIn direction="up">
          <div className="flex justify-between items-end mb-16 relative">
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

        {/* Categories Grid (Circles) */}
        <StaggerReveal staggerAmount={0.15} direction="up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-4 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`#products?category=${category.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square rounded-full bg-[#F3EBE6] p-2 mb-4 relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-white/50">
                  {/* Note: using unoptimized img temporarily until Sanity is connected */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="font-serif font-bold text-[#3A261D] text-sm md:text-base group-hover:text-black transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
