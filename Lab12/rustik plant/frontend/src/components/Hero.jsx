import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

export default function Hero({ product }) {
  return (
    <section className="relative overflow-hidden bg-[#efefee]">
      <div className="container-rustik relative min-h-[360px] py-9 md:min-h-[430px]">
        <div className="absolute -bottom-5 left-[-14%] h-28 w-[76%] rounded-br-[120px] border-b-[7px] border-r-[7px] border-plank-orange bg-transparent md:h-36" />
        <div className="grid items-center gap-5 md:grid-cols-[1.35fr_.9fr]">
          <div className="relative z-10 h-[220px] md:h-[300px]">
            <Image src={product?.image || "/assets/hero-chaise.jpg"} alt={product?.name || "Rustik chair"} fill priority className="object-contain" />
          </div>

          <div className="relative z-10 max-w-sm text-center md:text-left">
            <div className="mx-auto mb-5 h-0 w-0 border-l-[24px] border-r-[24px] border-t-[34px] border-l-transparent border-r-transparent border-t-plank-orange md:mx-0" />
            <p className="mb-3 font-serif text-[15px] leading-snug text-[#4f4a46]">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.
            </p>
            <div className="flex items-end justify-center gap-2 md:justify-start">
              <span className="price text-5xl">£{Number(product?.price || 129.99).toFixed(2).replace(".00", "")}</span>
              <span className="mb-2 text-xs font-bold uppercase">Our Price</span>
            </div>
            <Link href={`/product/${product?.slug || "ribbed-chaise-lounge"}`} className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#bdb9b5] bg-gradient-to-b from-white to-[#dedbd7] px-5 py-2 text-xs uppercase shadow-sm">
              Add to <ShoppingCart size={16} className="text-plank-orange" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-10 flex gap-1 text-[#554f4a]">
          <ChevronLeft size={62} strokeWidth={1} />
          <ChevronRight size={62} strokeWidth={1} className="text-plank-orange" />
        </div>
      </div>
    </section>
  );
}
