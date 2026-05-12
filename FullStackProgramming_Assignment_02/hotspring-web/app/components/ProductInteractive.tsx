"use client";

import { useCallback, useState } from "react";

const CALC_LABELS = [
  "Interior Color",
  "Outside Shell Color",
  "Circulation Pump",
  "Polar Foam",
  "Cover / Steps",
  "Extra Filter Sets",
  "Deluxe Cover Lifter",
  "Salt Water Sanitation System",
  "TV/DVD/Entertainment",
  "Backyard Delivery",
  "Jets",
  "Perimeter Lighting",
  "Premium Popup Speakers",
  "Waterfall",
  "Spa Surround",
  "Quantity",
];

type TabId = "details" | "specs" | "accessories" | "reviews" | "qa";

export default function ProductInteractive() {
  const [mainSrc, setMainSrc] = useState("/images/product_main.jpg");
  const [tab, setTab] = useState<TabId>("details");
  const [calcTotal, setCalcTotal] = useState(650);

  const recalc = useCallback((form: HTMLFormElement) => {
    let total = 650;
    form.querySelectorAll<HTMLSelectElement>("select").forEach((sel) => {
      if (sel.value !== "—" && sel.value !== "") total += 50;
    });
    setCalcTotal(total);
  }, []);

  return (
    <>
      <div className="product-detail-body">
        <div className="prod-gallery">
          <div className="main-img">
            <img id="mainProductImg" src={mainSrc} alt="Product Main" width={340} height={340} />
          </div>
          <div className="zoom-label">Roll over image to zoom in</div>
          <div className="thumbs">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/images/product_thumb_${i}.jpg`}
                alt={`View ${i}`}
                width={78}
                height={60}
                onClick={() => setMainSrc(`/images/product_thumb_${i}.jpg`)}
                role="presentation"
              />
            ))}
          </div>
          <div className="larger-view">
            <a href="#">+ Larger View</a>
          </div>
        </div>
        <div className="prod-info">
          <div className="prod-rating">
            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span>44</span>
            <a href="#">(14 reviews)</a>
          </div>
          <div className="price-retail">Retail Price:$2199.00</div>
          <div className="price-retail">
            <strong>Sale price</strong>
          </div>
          <div className="price-sale">$1,979.00</div>
          <div className="price-guarantee">Low Price Guarantee</div>
          <div className="prod-specs">
            <strong>Size/Seating Capacity</strong>
            <br />
            77&quot;, 77&quot;, 32&quot; / 6 Persons
            <br />
            <strong>Seating Design</strong>
            <br />
            Bucket, Lounge, Chair, Bench
            <br />
            <strong>Water Capacity / Dry Weight</strong>
            <br />
            305 Gallons / 573 lbs
            <br />
            <strong>Number of Pumps</strong>
            <br />
            2 X 5HP
            <br />
            <strong>Electrical</strong>
            <br />
            5.5 KW Heavy Heater, 220V, 50 amp /ETL Certificate
          </div>
          <div className="stock">In Stock (available)</div>
          <button type="button" className="btn-add-cart-lg" id="addToCartBtn">
            &#10010; ADD TO CART
          </button>
        </div>
        <form
          className="price-calc"
          onChange={(e) => recalc(e.currentTarget)}
          onSubmit={(e) => e.preventDefault()}
        >
          <h4>Price Calculator</h4>
          {CALC_LABELS.map((label) => (
            <div className="calc-row" key={label}>
              <label>{label}</label>
              <select defaultValue="—">
                <option>—</option>
              </select>
            </div>
          ))}
          <div className="total-price">
            Total Price: <span id="calcTotal">${calcTotal.toFixed(2)}</span>
          </div>
          <button type="button" className="btn-add-cart-lg" style={{ fontSize: 11, padding: "6px 10px" }}>
            &#10010; ADD TO CART
          </button>
          <div className="download-resources">
            <h5>Download Resources</h5>
            <a href="#">Full Line Brochure</a>
            <a href="#">Owner&apos;s Manual</a>
            <a href="#">Specifications Sheet</a>
          </div>
        </form>
      </div>

      <div className="prod-tabs">
        <div className="tabs-nav">
          {(
            [
              ["details", "Details"],
              ["specs", "Quick Specs"],
              ["accessories", "Accessories"],
              ["reviews", "Reviews"],
              ["qa", "Q & A"],
            ] as const
          ).map(([id, label]) => (
            <a
              key={id}
              href="#"
              className={tab === id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setTab(id);
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="tab-content" id="tab-details" style={{ display: tab === "details" ? "block" : "none" }}>
          <h5>Product Details</h5>
          <p>Energy Star Rated - No</p>
          <h5>Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h5>
          <p>The Hottub B22CS30SNS stain</p>
          <p>
            This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
            sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit, Nam nec tellus a
            odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>
        <div className="tab-content" id="tab-specs" style={{ display: tab === "specs" ? "block" : "none" }}>
          <table style={{ fontSize: 11, width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ padding: 4, border: "1px solid #ddd" }}>
                  <strong>Size</strong>
                </td>
                <td style={{ padding: 4, border: "1px solid #ddd" }}>
                  77&quot; x 77&quot; x 32&quot;
                </td>
              </tr>
              <tr>
                <td style={{ padding: 4, border: "1px solid #ddd" }}>
                  <strong>Seats</strong>
                </td>
                <td style={{ padding: 4, border: "1px solid #ddd" }}>
                  6 Persons
                </td>
              </tr>
              <tr>
                <td style={{ padding: 4, border: "1px solid #ddd" }}>
                  <strong>Jets</strong>
                </td>
                <td style={{ padding: 4, border: "1px solid #ddd" }}>
                  90
                </td>
              </tr>
              <tr>
                <td style={{ padding: 4, border: "1px solid #ddd" }}>
                  <strong>Heater</strong>
                </td>
                <td style={{ padding: 4, border: "1px solid #ddd" }}>
                  5.5 KW
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tab-content" id="tab-accessories" style={{ display: tab === "accessories" ? "block" : "none" }}>
          <p>No accessories listed.</p>
        </div>
        <div className="tab-content" id="tab-reviews" style={{ display: tab === "reviews" ? "block" : "none" }}>
          <p>14 verified customer reviews — ★★★★★ average.</p>
        </div>
        <div className="tab-content" id="tab-qa" style={{ display: tab === "qa" ? "block" : "none" }}>
          <p>
            Have a question? <a href="/contact">Ask us</a>
          </p>
        </div>
      </div>
    </>
  );
}
