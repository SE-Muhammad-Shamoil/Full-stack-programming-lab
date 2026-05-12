import Link from "next/link";
import type { Metadata } from "next";
import AlsoViewed from "../components/AlsoViewed";
import BrandStrip from "../components/BrandStrip";
import ProductInteractive from "../components/ProductInteractive";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Product Details",
};

export default function ProductPage() {
  return (
    <SiteShell activeNav="products">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span>{" "}
        <Link href="/category">Catagory</Link> <span className="sep">&rsaquo;</span> <span>Product</span>
      </div>
      <div className="main-content">
        <div className="product-detail-title">
          Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets
          <div className="prod-sku">Abt Model:HS-SPA-2024 | UPC Code : B22CS30BN723</div>
        </div>
        <ProductInteractive />
        <AlsoViewed />
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
