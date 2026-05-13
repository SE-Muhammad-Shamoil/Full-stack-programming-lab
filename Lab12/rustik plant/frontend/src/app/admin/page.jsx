"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", collection: "featured", image: "/assets/product-bowl.jpg" });
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const res = await fetch(`${API_URL}/products`);
    setProducts(await res.json());
  };

  useEffect(() => {
    load().catch(() => setProducts([]));
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    const url = editing ? `${API_URL}/products/${editing}` : `${API_URL}/products`;
    await fetch(url, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: Number(form.price) })
    });
    setForm({ name: "", price: "", collection: "featured", image: "/assets/product-bowl.jpg" });
    setEditing(null);
    await load();
  };

  const remove = async (id) => {
    await fetch(`${API_URL}/products/${id}`, { method: "DELETE" });
    await load();
  };

  return (
    <main>
      <Header />
      <section className="container-rustik py-10">
        <h1 className="section-title mb-6">Admin Products</h1>
        <form onSubmit={submit} className="grid gap-3 border bg-white p-5 md:grid-cols-5">
          <input className="border px-3 py-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input className="border px-3 py-2" placeholder="Price" type="number" step="0.01" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
          <select className="border px-3 py-2" value={form.collection} onChange={(e) => setForm({ ...form, collection: e.target.value })}>
            <option>featured</option>
            <option>special</option>
            <option>popular</option>
          </select>
          <input className="border px-3 py-2" placeholder="Image path" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
          <button className="bg-plank-orange px-4 py-2 font-bold text-white">{editing ? "Update" : "Create"}</button>
        </form>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border text-left text-sm">
            <thead className="bg-[#f4f0eb]">
              <tr><th className="p-3">Name</th><th className="p-3">Collection</th><th className="p-3">Price</th><th className="p-3">Actions</th></tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id || product.slug} className="border-t">
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.collection}</td>
                  <td className="p-3">£{Number(product.price).toFixed(2)}</td>
                  <td className="flex gap-2 p-3">
                    <button className="border px-3 py-1" onClick={() => { setEditing(product._id); setForm({ name: product.name, price: product.price, collection: product.collection, image: product.image }); }}>Edit</button>
                    <button className="border px-3 py-1" onClick={() => remove(product._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
