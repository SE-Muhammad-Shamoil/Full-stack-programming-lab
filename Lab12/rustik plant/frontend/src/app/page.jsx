import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { getCategories, getHeroProduct, getProducts } from "../lib/api";
import { updates } from "../lib/sample-data";

export default async function Home() {
  const [categories, products, hero] = await Promise.all([getCategories(), getProducts(), getHeroProduct()]);
  const groups = ["featured", "special", "popular"];

  return (
    <main>
      <Header />
      <Hero product={hero} />

      <section className="container-rustik py-6">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.slice(0, 3).map((category) => (
            <a key={category.slug} href={`/shop?category=${category.slug}`} className="relative h-[120px] overflow-hidden border border-[#dedbd7] bg-[#f8f8f7] shadow-sm">
              <Image src={category.image} alt={category.name} fill className="object-cover" />
            </a>
          ))}
        </div>
      </section>

      <section className="container-rustik">
        <div className="grid border border-[#eee9e4] bg-white shadow-soft lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group} className="border-[#eee9e4] px-8 py-8 lg:border-r lg:last:border-r-0">
              <h2 className="mb-4 border-b border-[#eee9e4] pb-3 font-serif text-xl uppercase">{group}</h2>
              {products.filter((product) => product.collection === group && !product.isHero).slice(0, 4).map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ))}
        </div>
        <div className="grid rounded-b-[30px] bg-[#f6f6f5] py-5 text-center text-xs shadow-sm md:grid-cols-3">
          <a href="/shop">See All Feature</a>
          <a href="/shop">See All Special</a>
          <a href="/shop">See All Popular</a>
        </div>
      </section>

      <section className="container-rustik py-9">
        <h2 className="section-title mb-5 text-center">Hot Deal</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {["deal-elite", "deal-reclaimed"].map((asset) => (
            <div key={asset} className="relative h-[218px] border border-[#dfd9d2] bg-white p-2">
              <Image src={`/assets/${asset}.jpg`} alt="Hot deal" fill className="object-cover p-2" />
            </div>
          ))}
        </div>
        <div className="relative mt-6 h-[88px]">
          <Image src="/assets/pickup-banner.jpg" alt="Buy online pickup in store" fill className="object-cover" />
        </div>
      </section>

      <section className="container-rustik">
        <h2 className="section-title mb-5 text-center">Latest Updates</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {updates.map((update) => (
            <article key={update.image}>
              <div className="relative h-[110px]">
                <Image src={update.image} alt={update.title} fill className="object-cover" />
              </div>
              <h3 className="mt-3 font-serif text-base">{update.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#9a948e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a className="mt-3 inline-block rounded border border-[#c7c2bd] px-4 py-2 text-[10px] uppercase" href="#">Read More</a>
            </article>
          ))}
        </div>
        <div className="relative mx-auto mt-10 h-[54px] max-w-[760px]">
          <Image src="/assets/sponsor-strip.jpg" alt="Sponsors" fill className="object-contain" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
