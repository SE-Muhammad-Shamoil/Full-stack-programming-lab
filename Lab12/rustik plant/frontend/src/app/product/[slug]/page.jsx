import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getProduct } from "../../../lib/api";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return <main><Header /><section className="container-rustik py-16">Product not found.</section><Footer /></main>;
  }

  return (
    <main>
      <Header />
      <section className="container-rustik grid gap-10 py-12 md:grid-cols-2">
        <div className="relative min-h-[360px] border bg-[#f8f8f7]">
          <Image src={product.image} alt={product.name} fill className="object-contain p-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-plank-orange">{product.category?.name || product.collection}</p>
          <h1 className="mt-2 font-serif text-4xl">{product.name}</h1>
          <p className="price mt-5 text-4xl">£{Number(product.price).toFixed(2)}</p>
          <p className="mt-6 leading-relaxed text-[#625c56]">
            {product.description || "This is Photoshop's version of Lorem Ipsum. Rich timber texture, curved forms, and a warm handcrafted finish."}
          </p>
          <button className="mt-8 rounded-full bg-plank-orange px-8 py-3 text-sm font-bold uppercase text-white">Add to Cart</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
