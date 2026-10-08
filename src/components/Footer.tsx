import FadeIn from "./animations/FadeIn";
import Image from "next/image";

export default function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919047220070";

  return (
    <footer className="bg-[#25150A] text-[#F9F6F1] pt-16 md:pt-20 pb-8 relative">
      <div className="container mx-auto px-4 md:px-8">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.3fr_1fr] gap-12 md:gap-14 lg:gap-16 mb-16">

            {/* BRAND COLUMN */}
            <div className="max-w-[320px]">
              <div className="flex flex-col items-start mb-6 w-fit">
                <Image 
                  src="/images/gulnis-logo.png" 
                  alt="Gul NiS Homey Cakes Logo" 
                  width={180} 
                  height={70} 
                  className="w-auto h-16 md:h-20 object-contain"
                />
              </div>
              <p className="text-[#CEAC92] text-[15px] leading-[1.7] mb-6 font-sans">
                Baking happiness from our home to yours. Every treat is crafted with love and the finest ingredients to make your celebrations truly special.
              </p>
              
              {/* FSSAI License */}
              <div className="mt-2 bg-white/5 inline-block px-4 py-3 rounded-md border border-[rgba(206,172,146,0.15)]">
                <Image 
                  src="/images/fssai-lic-no.png" 
                  alt="FSSAI License" 
                  width={240} 
                  height={80} 
                  className="w-auto h-16 md:h-20 object-contain"
                />
              </div>
            </div>

            {/* EXPLORE COLUMN */}
            <div>
              <h4 className="font-serif text-[22px] text-[#F9F6F1] mb-6">Explore</h4>
              <nav className="flex flex-col gap-3">
                <a href="#home" className="text-[#CEAC92] hover:text-[#F4E5DA] text-[15px] font-sans transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-[#C18861] rounded-sm">Home</a>
                <a href="#products" className="text-[#CEAC92] hover:text-[#F4E5DA] text-[15px] font-sans transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-[#C18861] rounded-sm">Products</a>
                <a href="#about" className="text-[#CEAC92] hover:text-[#F4E5DA] text-[15px] font-sans transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-[#C18861] rounded-sm">About</a>
                <a href="#gallery" className="text-[#CEAC92] hover:text-[#F4E5DA] text-[15px] font-sans transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-[#C18861] rounded-sm">Gallery</a>
                <a href="#contact" className="text-[#CEAC92] hover:text-[#F4E5DA] text-[15px] font-sans transition-colors w-fit focus:outline-none focus:ring-2 focus:ring-[#C18861] rounded-sm">Contact</a>
              </nav>
            </div>

            {/* ORDER WITH US COLUMN */}
            <div>
              <h4 className="font-serif text-[22px] text-[#F9F6F1] mb-6">Order With Us</h4>
              <p className="text-[#CEAC92] text-[15px] leading-[1.7] mb-6 font-sans">
                Freshly baked treats, made for your special moments.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#268A5B] hover:bg-[#207a4f] text-white px-6 py-3 rounded-full text-[15px] font-medium transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>

            {/* FOLLOW ALONG COLUMN */}
            <div>
              <h4 className="font-serif text-[22px] text-[#F9F6F1] mb-6">Follow Along</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/gulnis2025/"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full border border-[rgba(206,172,146,0.3)] flex items-center justify-center text-[#F9F6F1] hover:bg-[#F4E5DA] hover:text-[#25150A] hover:border-transparent transition-all transform hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-[#C18861]"
                >
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1KJX1kwPHg/"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full border border-[rgba(206,172,146,0.3)] flex items-center justify-center text-[#F9F6F1] hover:bg-[#F4E5DA] hover:text-[#25150A] hover:border-transparent transition-all transform hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-[#C18861]"
                >
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@gulnishomeycakesbysk"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full border border-[rgba(206,172,146,0.3)] flex items-center justify-center text-[#F9F6F1] hover:bg-[#F4E5DA] hover:text-[#25150A] hover:border-transparent transition-all transform hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-[#C18861]"
                >
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* BOTTOM BAR & DIVIDER */}
        <div className="pt-7 border-t border-[rgba(206,172,146,0.20)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#CEAC92] text-[13px] font-sans text-center md:text-left">
            © 2026 Gul NiS Homey Cakes by SK. All rights reserved.
          </p>
          {/* Privacy & Terms purposely omitted until pages exist per specification */}
          <p className="text-[#CEAC92] text-[13px] font-sans text-center md:text-right">
            Developed by <span className="opacity-80">Skryve Studio</span>
          </p>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#268A5B] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#207a4f] hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#268A5B]/30"
        aria-label="Order on WhatsApp"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </footer>
  );
}
