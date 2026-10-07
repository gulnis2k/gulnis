import FadeIn from "./animations/FadeIn";
import Image from "next/image";

export default function CustomCakeCTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919047220070";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to discuss a custom cake order. Could you share more details?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 bg-[#F7ECE6] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-12 lg:gap-20 relative z-10">

          {/* Text Content */}
          <FadeIn direction="right" className="flex-1 text-center md:text-left relative z-20 mb-8 md:mb-0">
            <span className="text-[#3A261D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Make It Special
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A261D] mb-6 leading-tight">
              Have a Custom Cake <br className="hidden lg:block" />in Mind?
            </h2>
            <p className="text-[#3A261D]/80 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Birthdays, anniversaries, weddings or any special occasion
              — we're here to make it sweeter. Tell us your idea and
              we'll bring it to life!
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2A1B16] hover:bg-[#1a100d] text-white px-8 py-3.5 rounded-full font-medium text-sm transition-colors shadow-md hover:shadow-lg relative z-30"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
              </svg>
              Discuss Your Custom Order
            </a>
          </FadeIn>

          {/* Image Content */}
          <FadeIn direction="left" delay={0.2} className="flex-1 w-full relative mt-12 md:mt-0 flex justify-center">

            <div className="relative w-[90%] max-w-[400px] aspect-square bg-white rounded-full shadow-xl p-2 md:p-3">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/customcake.webp"
                  alt="Beautiful custom designed celebration cake"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Script Text floating on the side */}
              <div className="absolute -right-4 md:-right-16 bottom-0 md:top-1/2 md:-translate-y-1/2 text-[#3A261D] transform rotate-[-10deg] translate-x-4 md:translate-x-0 z-20">
                <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-3xl shadow-sm border border-white">
                  <span className="font-script text-3xl md:text-5xl lg:text-6xl leading-tight flex flex-col items-center">
                    <span>Your</span>
                    <span>Ideas</span>
                    <span className="whitespace-nowrap">Our Creations</span>
                    <span>♡</span>
                  </span>
                </div>
              </div>
            </div>

          </FadeIn>

        </div>
      </div>
    </section>
  );
}
