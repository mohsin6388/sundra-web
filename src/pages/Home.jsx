import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Heart, Sparkles, Wheat, BadgeCheck, MapPin } from "lucide-react";
import { PRODUCTS, COMPANY, GALLERY_IMAGES } from "../lib/products";
import ProductCard from "../components/ProductCard";
import banner1 from "../assets/banner-main.webp";
import banner2 from "../assets/Sundra-banner.webp";
import farmer from "../assets/products-cat.webp";


const banners = [banner1, banner2, banner1, banner2];

const slides = [...banners, banners[0]];

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


const stats = [
  { num: "50,000+", label: "Kisan parivaar" },
  { num: "22%", label: "Zyada doodh" },
  { num: "12+", label: "Saal ka anubhav" },
  { num: "200+", label: "Dealers all India" },
];




export default function Home() {

   const [current, setCurrent] = useState(0);
   const [isTransitioning, setIsTransitioning] = useState(true);
   const intervalRef = useRef(null);
   

   useEffect(() => {
     intervalRef.current = setInterval(() => {
       setCurrent((prev) => prev + 1);
     }, 3000);
     return () => clearInterval(intervalRef.current);
   }, []);

   useEffect(() => {
     // Jab clone (last) pe pahunche — silently reset to real first
     if (current === slides.length - 1) {
       setTimeout(() => {
         setIsTransitioning(false); // transition band karo
         setCurrent(0); // silently pehle pe jao
       }, 600); // transition duration ke baad
     } else {
       setIsTransitioning(true); // baaki sab pe transition on
     }
   }, [current]);




  const [cur, setCur] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const VISIBLE = isMobile ? 2 : 3;
  const GAP = isMobile ? 16 : 24;
  const PADDING = isMobile ? 32 : 64; // total horizontal padding of section
  const steps = PRODUCTS.length - VISIBLE + 1;
  const CARD_WIDTH = `calc((min(1216px, 100vw - ${PADDING}px) - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`;

  useEffect(() => {
    setCur(0); // screen resize pe reset
  }, [isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCur((c) => (c + 1) % steps);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps]);


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
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(current * 100) / slides.length}%)`,
            transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Banner ${i + 1}`}
              style={{
                width: `${100 / slides.length}%`,
                display: "block",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          ))}
        </div>
      </section>

      {/* <section
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
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
            objectPosition: "center center",
            display: "block",
          }}
        />
      </section> */}

      <section
        style={{
          padding: "64px 2px",
          maxWidth: "960px",
          margin: "0 auto",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Tag */}
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: C.gold,
            fontWeight: 500,
            marginBottom: "16px",
          }}
        >
          Trusted by thousands
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 500,
            color: "#111",
            lineHeight: 1.25,
            marginBottom: "16px",
          }}
        >
          Pashu ka doodh badhe,
          <br />
          kisan ki <span style={{ color: "#2D6A3E" }}>aamdani bhi</span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "15px",
            color: "#666",
            lineHeight: 1.7,
            maxWidth: "480px",
            marginBottom: "48px",
          }}
        >
          Barsana Pashu Aahar — scientifically formulated cattle feed jo aapke
          pashu ko rakhta hai healthy aur deta hai maximum milk yield.
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid #e5e5e5",
            marginBottom: "40px",
          }}
        />

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 500,
                  color: "#2D6A3E",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#888",
                  marginTop: "6px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div
        style={{
          borderTop: "1px solid #e5e5e5",
          marginBottom: "30px",
          marginTop: "20px",
          marginLeft: "80px",
          marginRight: "80px",
        }}
      />

      <section
        style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 32px" }}
      >
        <div
          className="value-header-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "7fr 5fr",
            gap: 40,
            alignItems: "flex-end",
            marginBottom: 48,
          }}
        >
          <div>
            <div style={kicker}>About US</div>
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

      <div
        style={{
          borderTop: "1px solid #e5e5e5",
          marginBottom: "30px",
          marginTop: "20px",
          marginLeft: "80px",
          marginRight: "80px",
        }}
      />

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────────── */}

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile ? "40px 16px" : "64px 32px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: isMobile ? 24 : 40,
          }}
        >
          <div>
            <div style={kicker}>The Range</div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: isMobile ? "1.6rem" : "clamp(2rem, 4vw, 3rem)",
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

        {/* Slider */}
        <div
          style={{
            overflow: "hidden",
            padding: isMobile ? "10px 8px" : "10px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: GAP,
              transition: "transform 0.55s cubic-bezier(.4,0,.2,1)",
              transform: `translateX(calc(-${cur} * (${CARD_WIDTH} + ${GAP}px)))`,
            }}
          >
            {PRODUCTS.map((p) => (
              <div
                key={p.slug}
                style={{
                  minWidth: CARD_WIDTH,
                  maxWidth: CARD_WIDTH,
                  flexShrink: 0,
                }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 20,
          }}
        >
          {Array.from({ length: steps }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              style={{
                width: i === cur ? 20 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                background: i === cur ? C.ink : "#ccc",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>


      {/* ── SCIENCE BAND ─────────────────────────────────────────────────── */}
      <section style={{ background: C.forest, color: C.cream, marginTop: 40 }}>
        <div
          className="science-grid"
          style={{
            maxWidth: 1180,
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
        style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 32px" }}
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
        style={{ maxWidth: 1180, margin: "80px auto", padding: "0 32px 80px" }}
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
