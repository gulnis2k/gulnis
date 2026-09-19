import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import AllProducts from "@/components/AllProducts";
import CustomCakeCTA from "@/components/CustomCakeCTA";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const query = `*[_type == "product"] | order(displayOrder asc)`;
  const productsData = await client.fetch(query);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ShopByCategory />
        <AllProducts products={productsData} />
        <CustomCakeCTA />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
