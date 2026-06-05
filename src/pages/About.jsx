
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Milk,
  FlaskConical,
  Leaf,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { COMPANY, GALLERY_IMAGES } from "../lib/products";

/* ─── Gold accent ───────────────────────────────────── */
const Gold = ({ children }) => (
  <span style={{ color: "#c9871f" }}>{children}</span>
);

/* ─── Values data ───────────────────────────────────── */
const VALUES = [
  {
    Icon: FlaskConical,
    title: "Science-First Formulation",
    desc: "Every batch is developed in our in-house R&D lab, calibrated to the exact nutritional profile that maximises milk yield and animal health.",
  },
  {
    Icon: Leaf,
    title: "Sustainable Sourcing",
    desc: "We partner directly with verified agri-suppliers to ensure raw materials are traceable, responsibly grown, and free from harmful additives.",
  },
  {
    Icon: ShieldCheck,
    title: "Uncompromising Quality",
    desc: "ISO 9001:2015 certified processes govern every step — from procurement to packaging — so farmers always receive a consistent, safe product.",
  },
  {
    Icon: HeartHandshake,
    title: "Farmer Partnership",
    desc: "Our agronomists provide on-ground training and support, helping more than 10,000 farmers across India and Nepal unlock their herds' full potential.",
  },
];

/* ══════════════════════════════════════════════════════
   EXPORT
══════════════════════════════════════════════════════ */
export default function AboutSections() {
  return (
    <>
      <section
        style={{
          background: "#1a2e1e",
          padding: "200px 200px 30px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "60px solid rgba(201,135,31,0.08)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "70px solid rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "750px",
            margin: "0 auto",
          }}
        >
          {/* <p
            style={{
              color: "#c9871f",
              letterSpacing: "3px",
              fontSize: "32px",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontFamily: "sans-serif",
              fontWeight: "700",
            }}
          >
            Our Mission
          </p> */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "30px",
            }}
          >
            <span
              style={{
                width: "50px",
                height: "2px",
                background: "#c9871f",
                opacity: 0.8,
              }}
            />

            <p
              style={{
                color: "#c9871f",
                letterSpacing: "4px",
                fontSize: "clamp(18px, 2vw, 24px)",
                textTransform: "uppercase",
                margin: 0,
                fontFamily: "sans-serif",
                fontWeight: "700",
              }}
            >
              Our Mission
            </p>

            <span
              style={{
                width: "50px",
                height: "2px",
                background: "#c9871f",
                opacity: 0.8,
              }}
            />
          </div>

          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 4vw, 44px)",
              margin: "0 0 18px",
              fontFamily: "'Georgia', serif",
              fontWeight: "600",
              lineHeight: "1.2",
            }}
          >
            Nourishing Growth with <Gold>Quality Feed Solutions</Gold>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "15px",
              lineHeight: "1.85",
              maxWidth: "650px",
              margin: "0 auto 40px",
              fontFamily: "sans-serif",
            }}
          >
            At Sundra Group, our mission is to empower farmers with
            high-quality, nutritious, and reliable cattle feed that supports
            healthier livestock, improved productivity, and sustainable farming
            practices. We are committed to delivering excellence through
            innovation, trust, and long-term partnerships with farming
            communities.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#c9871f",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: "700",
                fontFamily: "sans-serif",
                fontSize: "15px",
                boxShadow: "0 8px 28px rgba(201,135,31,0.35)",
              }}
            >
              Learn More <ArrowRight size={17} />
            </Link>

            <Link
              to="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: "600",
                fontFamily: "sans-serif",
                fontSize: "15px",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              Explore Products <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════════════
          OUR MISSION  —  image-banner style (like design.jpg)
      ════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#f5f0e8",
          padding: "50px 30px",
        }}
      >
        {/* Background texture layer */}
        <div
          style={{
            padding: "100px 0",
            position: "absolute",
            inset: 0,
            backgroundColor: "#f5f0e8",
            // backgroundImage: `url(${GALLERY_IMAGES[1]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div className="mission-grid">
            {/* LEFT — text block */}
            <div
              style={{
                padding: "72px 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#c9871f",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontSize: "22px",
                  marginBottom: "18px",
                  fontFamily: "sans-serif",
                }}
              >
                Our Mission
              </p>

              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 38px)",
                  lineHeight: "1.3",
                  margin: "0 0 20px",
                  color: "#1a2e1e",
                  fontFamily: "'Georgia', serif",
                  fontWeight: "500",
                }}
              >
                Empowering dairy farmers with feed that creates{" "}
                <Gold>real economic prosperity</Gold>
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.85",
                  color: "#555",
                  margin: "0 0 28px",
                  fontFamily: "sans-serif",
                  maxWidth: "480px",
                }}
              >
                We believe the backbone of India's dairy economy is the small
                and mid-scale farmer. Our research, products, and field teams
                exist to serve that backbone — one village at a time.
              </p>

              {/* Values grid — 2×2 */}
              <div className="values-mini-grid">
                {VALUES.map(({ Icon, title, desc }) => (
                  <div
                    key={title}
                    style={{
                      background: "rgba(255,255,255,0.82)",
                      borderRadius: "16px",
                      padding: "20px",
                      backdropFilter: "blur(6px)",
                      borderTop: "3px solid #c9871f",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(31,77,44,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <Icon size={20} color="#1f4d2c" />
                    </div>
                    <h3
                      style={{
                        margin: "0 0 6px",
                        fontSize: "14px",
                        color: "#1a2e1e",
                        fontWeight: "700",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        lineHeight: "1.65",
                        color: "#666",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image card (like design.jpg layout) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px 0",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "460px",
                }}
              >
                {/* Main image */}
                <img
                  src={GALLERY_IMAGES[2]}
                  alt="Cattle at Sundra farm"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "24px",
                    display: "block",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
                  }}
                />

                {/* Overlay text card — bottom (like design.jpg "Call us" card) */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: "0 0 24px 24px",
                    background:
                      "linear-gradient(to top, rgba(26,46,30,0.92) 0%, transparent 100%)",
                    padding: "48px 28px 28px",
                  }}
                >
                  <p
                    style={{
                      color: "#c9871f",
                      fontSize: "11px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      margin: "0 0 8px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Best Choice for Dairy Farmers
                  </p>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "clamp(1rem, 2.5vw, 20px)",
                      margin: "0 0 16px",
                      fontFamily: "'Georgia', serif",
                      lineHeight: "1.35",
                    }}
                  >
                    Advanced technology · Quality nutrition · Higher yield
                  </h3>

                  <Link
                    to="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#c9871f",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "10px 22px",
                      borderRadius: "50px",
                      fontWeight: "700",
                      fontFamily: "sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    Call Us <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Floating badge — top right */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "12px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
                  }}
                >
                  <Milk size={22} color="#c9871f" />
                  <div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#999",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Daily Output
                    </div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: "800",
                        color: "#1a2e1e",
                        lineHeight: "1.1",
                        fontFamily: "'Georgia', serif",
                      }}
                    >
                      500+ MT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          OUR FACILITY
      ════════════════════════════════════════════════ */}
      {/* <section
        style={{ maxWidth: "1400px", margin: "0 auto",  padding: "50px 30px", }}
      >
        <div className="facility-grid">
         
          <div>
            <p
              style={{
                color: "#c9871f",
                letterSpacing: "3px",
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontFamily: "sans-serif",
                fontWeight: "700",
              }}
            >
              Our Facility
            </p>
            <h2
              style={{
                fontSize: "clamp(1.7rem, 3.8vw, 40px)",
                lineHeight: "1.2",
                margin: "0 0 20px",
                color: "#1a2e1e",
                fontFamily: "'Georgia', serif",
                fontWeight: "800",
              }}
            >
              State-of-the-art manufacturing built for scale
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.85",
                color: "#666",
                margin: "0 0 16px",
                fontFamily: "sans-serif",
              }}
            >
              Our plant is equipped with automated batching, computerised
              nutritional mixing, and real-time quality assays. Capacity across
              our facilities exceeds <strong>500 MT per day</strong>, enabling
              us to serve large cooperatives and individual farmers with equal
              reliability.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.85",
                color: "#666",
                margin: "0 0 32px",
                fontFamily: "sans-serif",
              }}
            >
              A new greenfield facility currently under construction will double
              our capacity by 2026, reinforcing our commitment to meeting
              India's growing demand for premium dairy nutrition.
            </p>

           
            <div
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                marginBottom: "36px",
              }}
            >
              {[
                { label: "Daily Capacity", value: "500+ MT" },
                { label: "Certification", value: "ISO 9001:2015" },
                { label: "New Plant", value: "50,000 MT/yr" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    borderLeft: "3px solid #c9871f",
                    paddingLeft: "14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#999",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      fontFamily: "sans-serif",
                      marginBottom: "4px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "800",
                      color: "#1a2e1e",
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#1f4d2c",
                color: "#fff",
                textDecoration: "none",
                padding: "13px 28px",
                borderRadius: "50px",
                fontWeight: "600",
                fontFamily: "sans-serif",
                fontSize: "14px",
              }}
            >
              Explore Our Products <ArrowRight size={16} />
            </Link>
          </div>

         
          <div style={{ position: "relative" }}>
            <img
              src={GALLERY_IMAGES[0]}
              alt="Manufacturing facility"
              style={{
                width: "100%",
                height: "460px",
                objectFit: "cover",
                borderRadius: "28px",
                display: "block",
              }}
            />
          
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                width: "120px",
                height: "120px",
                borderRadius: "20px",
                background: "#c9871f",
                opacity: 0.15,
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </section> */}

      {/* ════════════════════════════════════════════════
          PARTNER WITH SUNDRA GROUP  (CTA)
      ════════════════════════════════════════════════ */}
      {/* <section
        style={{
          background: "#1a2e1e",
          padding: "50px 30px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "60px solid rgba(201,135,31,0.08)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "70px solid rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}
        >
          <p
            style={{
              color: "#c9871f",
              letterSpacing: "3px",
              fontSize: "12px",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontFamily: "sans-serif",
              fontWeight: "700",
            }}
          >
            Get in Touch
          </p>

          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 4vw, 44px)",
              margin: "0 0 18px",
              fontFamily: "'Georgia', serif",
              fontWeight: "800",
              lineHeight: "1.2",
            }}
          >
            Partner with <Gold>Sundra Group</Gold>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "15px",
              lineHeight: "1.85",
              maxWidth: "500px",
              margin: "0 auto 40px",
              fontFamily: "sans-serif",
            }}
          >
            Whether you're a dealer, cooperative, or individual farmer — our
            team is ready to help you find the right feed solution for your
            herd.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#c9871f",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: "700",
                fontFamily: "sans-serif",
                fontSize: "15px",
                boxShadow: "0 8px 28px rgba(201,135,31,0.35)",
              }}
            >
              Contact Us <ArrowRight size={17} />
            </Link>

            <Link
              to="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: "600",
                fontFamily: "sans-serif",
                fontSize: "15px",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              Our Products <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section> */}

      {/* ══ RESPONSIVE ══════════════════════════════════ */}
      <style>{`
        .mission-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .values-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .facility-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .mission-grid,
          .facility-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .mission-grid > div:last-child {
            order: -1;
          }
          .mission-grid img { height: 320px !important; }
          .facility-grid img { height: 300px !important; }
        }
        @media (max-width: 560px) {
          .values-mini-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}