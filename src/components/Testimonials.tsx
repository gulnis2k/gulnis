import FadeIn from "./animations/FadeIn";
import StaggerReveal from "./animations/StaggerReveal";
import { client } from "@/sanity/lib/client";

export default async function Testimonials() {
  const query = `*[_type == "testimonial"] | order(displayOrder asc)`;
  const testimonialsData = await client.fetch(query);

  let testimonialsToDisplay: any[] = [];
  
  if (testimonialsData && testimonialsData.length > 0) {
    testimonialsToDisplay = testimonialsData.map((t: any) => ({
      id: t._id,
      name: t.customerName,
      text: t.reviewText,
      rating: t.rating,
    }));
  }

  // If there are no testimonials in Sanity, do not render the section
  if (testimonialsToDisplay.length === 0) {
    return null;
  }

  // Slice to max 3 testimonials
  const limitedTestimonials = testimonialsToDisplay.slice(0, 3);

  return (
    <section className="py-24 bg-[#F4EDE7] relative overflow-hidden" id="testimonials">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5D8CF]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CEAC92]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center mb-16 relative">
            <span className="text-[#945636] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Testimonials
            </span>
            <div className="flex items-center gap-6 justify-center">
              <div className="hidden md:block flex-1 h-[1px] bg-[#CEAC92] w-[50px] lg:w-[100px]"></div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#322212]">
                Love from Our Clients
              </h2>
              <div className="hidden md:block flex-1 h-[1px] bg-[#CEAC92] w-[50px] lg:w-[100px]"></div>
            </div>
            <p className="text-[#50311C]/80 text-lg mt-6 max-w-2xl mx-auto">
              We put our heart into every bake, and seeing the joy it brings to your celebrations means everything to us.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerReveal className={`flex flex-wrap justify-center gap-8`}>
          {limitedTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-[#FCFBF8] rounded-3xl p-8 shadow-sm border border-[#E9DED4] hover:shadow-md transition-shadow flex flex-col justify-between w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
            >
              <div>
                <div className="flex gap-1 mb-6 text-[#C18861]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#50311C] text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#E9DED4] pt-6">
                <div className="w-10 h-10 rounded-full bg-[#E5D8CF] flex items-center justify-center text-[#754B31] font-bold font-serif text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="font-serif font-bold text-[#322212]">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>

      </div>
    </section>
  );
}
