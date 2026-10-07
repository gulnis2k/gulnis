"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Setup IntersectionObserver for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Map section IDs to Nav link names
            if (id === "home") setActiveSection("Home");
            if (id === "products") setActiveSection("Products");
            if (id === "about") setActiveSection("About");
            if (id === "gallery") setActiveSection("Gallery");
            if (id === "contact") setActiveSection("Contact");
            if (id === "testimonials") setActiveSection("Testimonials"); // Optional tracking
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id], div[id='home']");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm py-4"
          : "bg-[#FAF8F5] py-6"
          }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center z-50">
            <div className="flex flex-col items-center">
              <span className="font-script text-4xl md:text-5xl text-[#2A1B16] leading-none -mb-1">Gul NiS</span>
              <span className="font-sans text-[0.65rem] md:text-xs tracking-[0.2em] uppercase text-[#2A1B16]">HOMEY BAKES BY SK</span>
            </div>
          </Link>

          {/* Desktop Navigation (Centered) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`relative font-medium text-sm transition-colors text-[#3A261D] hover:text-black ${isActive ? 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#3A261D]' : ''}`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA (Right) */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/919047220070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A1B16] hover:bg-[#1a100d] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2"
            >
              {/* WhatsApp Icon placeholder */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
              </svg>
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-[#3A261D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation (Moved outside header to avoid stacking context issues from backdrop-blur) */}
      <div
        className={`fixed inset-0 bg-[#FAF8F5] z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#3A261D] text-2xl font-serif"
          >
            {link.name}
          </Link>
        ))}
        <a
          href="https://wa.me/919047220070"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2A1B16] text-white px-8 py-3 rounded-full font-medium text-lg mt-4 shadow-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          Order on WhatsApp
        </a>
      </div>
    </>
  );
}
