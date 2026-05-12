import Link from "next/link";
import type { Metadata } from "next";
import BrandStrip from "../components/BrandStrip";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <SiteShell activeNav="home">
      <div className="breadcrumb-bar">
        <Link href="/">Home</Link> <span className="sep">&rsaquo;</span> <span>About Us</span>
      </div>
      <div className="main-content">
        <div className="about-content" id="about-content">
          <h2>About</h2>
          <center>
            <img src="/images/about_content.jpg" alt="About Us" width={700} height={280} />
          </center>
          <p>
            HotSpring has been the world&apos;s best-selling brand of portable spas for more than 30 years. Our
            commitment to quality, innovation, and customer satisfaction has made us the most trusted name in the
            industry.
          </p>
          <p>
            We are proud to offer a wide range of portable hot tubs that are designed for lasting comfort and
            efficiency. From our entry-level Limelight Collection to our premium Platinum Collection, there&apos;s a
            HotSpring spa for every lifestyle and budget.
          </p>
          <p>
            Each HotSpring spa is engineered to be energy efficient, easy to maintain, and built to last. Our spas
            include exclusive insulation technology, our patented Moto-Massage DX jet system, and award-winning designs
            that complement any outdoor setting.
          </p>
          <h5 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>Our Mission</h5>
          <p>To help families and individuals create lasting memories through the healing power of warm water and the joy of togetherness.</p>
          <h5 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>Our memebers</h5>
          <br />
          <br />
          <center>
            <img src="/images/members.jpg" alt="Members" className="members" width={600} height={320} />
          </center>
          <br />
          <h5 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>Contact</h5>
          <p>888-201-8899 | servicemail@yoursitename.com</p>
        </div>
        <BrandStrip />
      </div>
    </SiteShell>
  );
}
