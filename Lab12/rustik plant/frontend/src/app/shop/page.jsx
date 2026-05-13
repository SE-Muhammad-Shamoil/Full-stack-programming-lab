import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { getCategories, getProducts } from "../../lib/api";

export default async function Shop({ searchParams }) {
  const [{ category }, products, categories] = await Promise.all([searchParams, getProducts(), getCategories()]);
  const filtered = category
    ? products.filter((product) => product.category?.slug === category || product.category?.name?.toLowerCase() === category || product.collection === category)
    : products;

  return (
    <main>
      <Header />
      <section className="container-rustik py-10">
        <h1 className="section-title mb-6">Shop</h1>
        <div className="mb-8 flex flex-wrap gap-3">
          <a className="rounded border px-4 py-2 text-sm" href="/shop">All</a>
          {categories.map((item) => (
            <a key={item.slug} className="rounded border px-4 py-2 text-sm" href={`/shop?category=${item.slug}`}>{item.name}</a>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>
      <Footer />
    </main>
  );
}
