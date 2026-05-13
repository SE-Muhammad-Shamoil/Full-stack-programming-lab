import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="grid min-h-[132px] grid-cols-[120px_1fr] items-center gap-4 border-b border-[#e9e4df] py-4 last:border-b-0">
      <div className="relative h-24 w-full">
        <Image src={product.image} alt={product.name} fill className="object-contain" />
      </div>
      <div>
        <p className="line-clamp-2 text-xs leading-tight text-[#514c47]">This is Photoshop's version Lorem</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="price text-base">£{product.price.toFixed(2)}</span>
          {product.oldPrice ? <span className="text-[10px] text-[#9b958f] line-through">£{product.oldPrice.toFixed(2)}</span> : null}
        </div>
        <Link href={`/product/${product.slug}`} className="paper-edge mt-2 inline-block border border-[#cfc9c1] bg-gradient-to-b from-white to-[#eee] px-8 py-2 text-xs">
          Detail
        </Link>
      </div>
    </article>
  );
}
