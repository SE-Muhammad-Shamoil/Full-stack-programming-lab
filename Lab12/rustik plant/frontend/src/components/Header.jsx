import { Search, ShoppingCart, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const topLinks = ["Home", "Blog", "About Us", "Contact Us"];
const nav = ["Beds", "Cabinets", "Bookcases", "Boxes", "Chairs", "Tables"];

export default function Header() {
  return (
    <header className="page-shell border-b border-black/5">
      <div className="container-rustik">
        <div className="flex flex-col gap-3 py-3 md:flex-row md:items-start md:justify-between">
          <Link href="/" className="font-serif text-4xl font-bold tracking-tight">
            <span className="text-plank-orange">R</span>ustik <span>Plank</span>
          </Link>

          <div className="flex flex-col gap-2 text-xs text-[#4e4945] md:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <Youtube size={15} />
              <span>g+</span>
              <Twitter size={15} />
              <Facebook size={15} />
              <span className="ml-3">07584 031409</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span>My Account (login/Register)</span>
              <ShoppingCart size={17} className="text-plank-orange" />
              <span>0 Item</span>
            </div>
            <div className="flex h-8 w-full max-w-[260px] items-center border border-[#cfcac4] bg-white">
              <input className="min-w-0 flex-1 px-3 py-1 text-xs outline-none" placeholder="Search" />
              <button aria-label="Search" className="grid h-8 w-9 place-items-center border-l border-[#cfcac4]">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-3 lg:flex-row lg:items-center lg:justify-center">
          <nav className="flex flex-wrap justify-center gap-5 text-xs italic text-[#211a16] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-14">
            {topLinks.map((item) => (
              <Link key={item} href={item === "Home" ? "/" : "#"}>{item}</Link>
            ))}
          </nav>
          <nav className="flex flex-wrap justify-center gap-8">
            {nav.map((item) => (
              <Link key={item} className="nav-link" href={`/shop?category=${item.toLowerCase()}`}>{item}</Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
