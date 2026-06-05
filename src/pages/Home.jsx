import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Heart, Sparkles, Wheat, BadgeCheck, MapPin } from "lucide-react";
import { PRODUCTS, COMPANY, GALLERY_IMAGES } from "../lib/products";
import ProductCard from "../components/ProductCard";
import banner from "../assets/Sundra-banner.webp";
import farmer from "../assets/products-cat.webp";

// ── Design tokens (inline replacement for CSS variables) ──────────────────────
const C = {
  ink:        "#1a1a2e",
  forest:     "#1f4d2c",
  gold:       "#c9922a",
  gold2:      "#e8b84b",
  cream:      "#fdf8f0",
  cream2:     "#f5ede0",
  terracotta: "#c0522a",
  line:       "rgba(26,26,46,0.12)",
};

// ── Shared style objects ──────────────────────────────────────────────────────
const btnBase = {
  display:        "inline-flex",
  alignItems:     "center",
  gap:            8,
  borderRadius:   9999,
  padding:        "12px 24px",
  fontSize:       "0.9rem",
  fontWeight:     600,
  cursor:         "pointer",
  textDecoration: "none",
  transition:     "opacity 0.2s",
};

const btnPrimary = {
  ...btnBase,
  background: C.forest,
  color:      C.cream,
  border:     "none",
};

const btnGhost = {
  ...btnBase,
  background: "transparent",
  color:      C.ink,
  border:     `1.5px solid ${C.line}`,
};

const btnGold = {
  ...btnBase,
  background: C.gold,
  color:      "#fff",
  border:     "none",
};

const kicker = {
  display:       "inline-flex",
  alignItems:    "center",
  gap:           6,
  fontSize:      "0.7rem",
  fontWeight:    700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color:         C.gold,
};

const cardSoft = {
  background:   C.cream,
  border:       `1px solid ${C.line}`,
  borderRadius: 20,
  transition:   "transform 0.2s",
};

export default function Home() {
  return (
    <main
      data-testid="home-page"
      style={{ fontFamily: "sans-serif", color: C.ink, background: C.cream }}
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          background: "#000",
          overflow: "hidden",
        }}
      >
        <img
          src={banner}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />

       
    {/*}    <div
          className="hero-cta-wrap"
          style={{
            position: "absolute",
            right: "40px",
            bottom: "40px",
            display: "flex",
            gap: "16px",
            zIndex: 2,
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/products"
            style={btnPrimary}
            data-testid="hero-cta-products"
          >
            Explore Products <ArrowRight size={16} />
          </Link>

          <Link to="/dealers" style={btnGhost} data-testid="hero-cta-dealer">
            Become a Dealer
          </Link>
        </div>
        */}
      </section>


      
      <section
        style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}
      >
        <div className="value-header-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "7fr 5fr",
            gap: 40,
            alignItems: "flex-end",
            marginBottom: 48,
          }}
        >
          <div>
            <div style={kicker}>Why farmers choose us</div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: C.ink,
                lineHeight: 1.2,
                marginTop: 16,
              }}
            >
              Complete nutrition. Real results in the milking pail.
            </h2>
          </div>
          <p style={{ color: `${C.ink}b3`, lineHeight: 1.65 }}>
            Every batch of Barsana feed is engineered for a measurable outcome —
            more milk, stronger animals and timelier reproduction. No artificial
            chemicals. No unscientific shortcuts.
          </p>
        </div>

        <div
          className="value-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {[
            {
              icon: Droplets,
              title: "More Milk",
              desc: "Up to 22% higher yield with optimised protein, energy and fat ratios.",
              hi: "अधिक दूध",
            },
            {
              icon: Heart,
              title: "Better Health",
              desc: "Improved digestion, immunity and lifelong vigour for your herd.",
              hi: "बेहतर स्वास्थ्य",
            },
            {
              icon: Sparkles,
              title: "Richer Fat",
              desc: "Up to 6–6.5% fat in cow milk and higher in buffalo milk.",
              hi: "उच्च वसा",
            },
            {
              icon: Wheat,
              title: "Natural Grains",
              desc: "Jwar, makka, sarson khali & kapas khali — steam cooked.",
              hi: "प्राकृतिक अनाज",
            },
          ].map(({ icon: Icon, title, desc, hi }) => (
            <div
              key={title}
              style={{ ...cardSoft, padding: 24 }}
              data-testid={`value-${title.toLowerCase().replace(/\s/g, "-")}`}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: `${C.forest}1a`,
                  color: C.forest,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={20} />
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.25rem",
                  marginTop: 20,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: C.gold, marginTop: 4 }}>
                {hi}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: `${C.ink}b3`,
                  marginTop: 12,
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────────── */}
      <section
        style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div>
            <div style={kicker}>The Range</div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: C.ink,
                marginTop: 16,
              }}
            >
              Built for every herd, every yield
            </h2>
          </div>
          <Link
            to="/products"
            style={btnGhost}
            data-testid="home-view-all-products"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </div>
        <div
          className="featured-products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 44,
          }}
        >
          {PRODUCTS.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ── SCIENCE BAND ─────────────────────────────────────────────────── */}
      <section style={{ background: C.forest, color: C.cream, marginTop: 40 }}>
        <div
          className="science-grid"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 32px",
            display: "grid",
            gridTemplateColumns: "6fr 6fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ ...kicker, color: C.gold2 }}>The Science</div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.2,
                marginTop: 16,
              }}
            >
              Composition that{" "}
              <em style={{ fontStyle: "italic", color: C.gold2 }}>delivers</em>.
            </h2>
            <p
              style={{
                marginTop: 24,
                color: `${C.cream}cc`,
                maxWidth: 520,
                lineHeight: 1.65,
              }}
            >
              Every product variant is calibrated for a specific yield range.
              From the everyday Supreme+ to the elite Barsana 8000, you get
              balanced energy, crude protein and fibre — every single bag.
            </p>
            <Link
              to="/benefits"
              style={{ ...btnGold, marginTop: 32, display: "inline-flex" }}
              data-testid="science-cta"
            >
              See full benefits <ArrowRight size={16} />
            </Link>
          </div>

          <div
            className="science-specs-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {[
              ["Energy", "2200–2800 kcal/kg"],
              ["Crude Protein", "20–24%"],
              ["Crude Fibre", "≤ 11%"],
              ["Fat (E.E.)", "3–7%"],
              ["Moisture", "≤ 12%"],
              ["Vitamin A", "7000 IU/kg"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  background: "rgba(253,248,240,0.10)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 16,
                  padding: 20,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: C.gold2,
                    fontWeight: 700,
                  }}
                >
                  {k}
                </div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.5rem",
                    marginTop: 4,
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section
        style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 32px" }}
      >
        <div
          className="testimonial-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div
            style={{
              aspectRatio: "1/1",
              borderRadius: 28,
              overflow: "hidden",
              border: `1px solid ${C.line}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
            }}
          >
            <img
              src={farmer}
              alt="Farmer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
              }}
            />
          </div>

          <div>
            <div style={kicker}>From the field</div>
            <blockquote
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                lineHeight: 1.35,
                color: C.ink,
                margin: "16px 0 0",
                fontStyle: "normal",
              }}
            >
              "Since switching to Barsana Super, our cows have given{" "}
              <em style={{ fontStyle: "italic", color: C.forest }}>
                2–3 litres more milk every day
              </em>
              , and the fat percentage is consistently higher."
            </blockquote>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: C.forest,
                  color: C.cream,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Georgia, serif",
                  fontSize: "1.25rem",
                  flexShrink: 0,
                }}
              >
                S
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Sundra Group</div>
                <div style={{ fontSize: "0.875rem", color: `${C.ink}99` }}>
                  Kanpur, U.P.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
      <section
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}
      >
        <div
          className="cta-band-grid"
          style={{
            background: C.cream2,
            border: `1px solid ${C.line}`,
            borderRadius: 28,
            padding: "56px",
            display: "grid",
            gridTemplateColumns: "8fr 4fr",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <div style={kicker}>Partner with Sundra Group</div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                marginTop: 16,
              }}
            >
              Grow a profitable feed business in your region.
            </h2>
            <p style={{ marginTop: 16, color: `${C.ink}b3`, maxWidth: 600 }}>
              Distribute trusted, fast-moving feed across your district. Apply
              to become an authorised Barsana dealer in just a few clicks.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link to="/dealers" style={btnPrimary} data-testid="cta-dealer-btn">
              Apply now <ArrowRight size={16} />
            </Link>
            <Link to="/contact" style={btnGhost} data-testid="cta-contact-btn">
              Contact sales
            </Link>
          </div>
        </div>
      </section>

      {/* ── Keyframes + Responsive CSS ───────────────────────────────────── */}
      <style>{`
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        /* Value props header: stack on mobile */
        @media (max-width: 768px) {
          
          .value-header-grid {
            grid-template-columns: 1fr !important;
          }
          .value-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .featured-products-grid {
            grid-template-columns: 1fr !important;
            padding: 0 40px;
            gap: 24px !important;
          }
          .science-grid {
            grid-template-columns: 1fr !important;
          }
          .science-specs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-band-grid {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
          }
          .cta-band-grid > div:last-child {
            justify-content: flex-start !important;
          }
          .hero-cta-wrap {
            right: 16px !important;
            bottom: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .value-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .science-specs-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Section padding on mobile */
        @media (max-width: 600px) {
          section[style*="padding: 80px 32px"],
          section[style*="padding: 64px 32px"],
          section[style*="padding: 96px 32px"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </main>
  );
}
