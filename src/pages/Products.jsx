import React from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../lib/products";

export default function Products() {
  return (
    <main>
      {/* HEADER */}

      <section
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "80px 20px 40px",
        }}
      >
        <div
          style={{
            color: "#c9871f",
            fontWeight: "600",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "25px",
          }}
        >
          The Barsana Range
        </div>

        <div
          className="products-header-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "50px",
            alignItems: "end",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 64px)",
              lineHeight: "1.1",
              margin: 0,
              color: "#222",
              fontWeight: "700",
            }}
          >
            Nine premium feeds.
            <br />
            <span
              style={{
                color: "#1f4d2c",
                fontStyle: "italic",
              }}
            >
              One promise.
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            From everyday rations to specialised buffalo formulations, every
            variant of Barsana Pashu Aahar is engineered for a specific yield
            range and life-stage.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "35px",
          }}
          className="products-grid"
        >
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .products-header-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .products-grid{
          padding: 0 40px !important;
          }
        }
      `}</style>
    </main>
  );
}
