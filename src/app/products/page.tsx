import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllProducts from "@/components/AllProducts";
import { client } from "@/sanity/lib/client";
import { Suspense } from "react";

export const metadata = {
  title: "Our Menu | Gul NiS Homey Cakes by SK",
  description: "Explore our full menu of freshly baked cakes, brownies, blondies, and more in Coimbatore.",
};

export const revalidate = 30; // Revalidate every 30 seconds

export default async function ProductsPage() {
  // Fetch products
  const query = `*[_type == "product"] | order(displayOrder asc)`;
  const productsData = await client.fetch(query);

  return (
    <>
      <Header />
      <main className="flex-grow pt-24">
        <Suspense fallback={<div className="py-20 text-center">Loading menu...</div>}>
          <AllProducts products={productsData} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
