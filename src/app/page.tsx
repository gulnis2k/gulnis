import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import AllProducts from "@/components/AllProducts";
import CustomCakeCTA from "@/components/CustomCakeCTA";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ShopByCategory />
        <AllProducts />
        <CustomCakeCTA />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
