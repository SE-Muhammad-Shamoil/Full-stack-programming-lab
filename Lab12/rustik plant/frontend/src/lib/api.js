import { categories as fallbackCategories, products as fallbackProducts } from "./sample-data";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function request(path, fallback) {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 30 } });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return res.json();
  } catch {
    return fallback;
  }
}

export const getCategories = () => request("/categories", fallbackCategories);
export const getProducts = () => request("/products", fallbackProducts);
export const getHeroProduct = () =>
  request("/products/hero", fallbackProducts.find((product) => product.isHero));
export const getProduct = (slug) => request(`/products/${slug}`, fallbackProducts.find((product) => product.slug === slug));
