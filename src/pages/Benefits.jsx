import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  Heart,
  Leaf,
  Sparkles,
  Wheat,
  BadgeCheck,
  Zap,
  Shield,
} from "lucide-react";
import { COMPANY } from "../lib/products";
import {content} from "../lib/translate";

const C = {
  ink: "#1b2316",
  forest: "#1f4d2c",
  gold: "#c9871f",
  cream: "#f8f1e1",
  cream2: "#f0e9d8",
  line: "rgba(27,35,22,0.12)",
};

export default function Benefits({ lang}) {
  const t = (key) => content[key]?.[lang] ?? key;

  const benefits = [
    {
      icon: Droplets,
      title: t("why.milk.title"),
      titleHi: content["why.milk.title"]?.hi,
      color: "#1f4d2c",
      desc: t("why.milk.desc"),
      points: [t("why.milk.p1"), t("why.milk.p2"), t("why.milk.p3")],
    },
    {
      icon: Heart,
      title: t("why.health.title"),
      titleHi: content["why.health.title"]?.hi,
      color: "#b34a25",
      desc: t("why.health.desc"),
      points: [t("why.health.p1"), t("why.health.p2"), t("why.health.p3")],
    },
    {
      icon: Sparkles,
      title: t("why.fat.title"),
      titleHi: content["why.fat.title"]?.hi,
      color: "#c9871f",
      desc: t("why.fat.desc"),
      points: [t("why.fat.p1"), t("why.fat.p2"), t("why.fat.p3")],
    },
    {
      icon: Wheat,
      title: t("why.natural.title"),
      titleHi: content["why.natural.title"]?.hi,
      color: "#558b2f",
      desc: t("why.natural.desc"),
      points: [t("why.natural.p1"), t("why.natural.p2"), t("why.natural.p3")],
    },
    {
      icon: Zap,
      title: t("why.growth.title"),
      titleHi: content["why.growth.title"]?.hi,
      color: "#1565c0",
      desc: t("why.growth.desc"),
      points: [t("why.growth.p1"), t("why.growth.p2"), t("why.growth.p3")],
    },
    {
      icon: Shield,
      title: t("why.repro.title"),
      titleHi: content["why.repro.title"]?.hi,
      color: "#6a1b9a",
      desc: t("why.repro.desc"),
      points: [t("why.repro.p1"), t("why.repro.p2"), t("why.repro.p3")],
    },
  ];

  return (
    <main
      style={{ fontFamily: "sans-serif", color: C.ink, background: C.cream }}
    >
      {/* ═══ HERO ═══ */}
      <section
        style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px 60px" }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.gold,
            marginBottom: 20,
          }}
        >
          {t("why.label")}
        </div>
        <div
          className="benefits-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 40,
            alignItems: "end",
          }}
        >
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize:
                lang === "hi"
                  ? "clamp(1.8rem, 4vw, 3rem)"
                  : "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              margin: 0,
              color: C.ink,
            }}
          >
            {t("why.hero.title_1")}{" "}
            <em style={{ color: C.forest, fontStyle: "italic" }}>
              {t("why.hero.title_2")}
            </em>
            .
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: `${C.ink}b3`,
            }}
          >
            {t("why.hero.desc")}
          </p>
        </div>
      </section>

      {/* ═══ BENEFITS GRID ═══ */}
      <section
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map(
            ({ icon: Icon, title, titleHi, color, desc, points }) => (
              <div
                key={title}
                style={{
                  background: "#fffaf0",
                  border: `1px solid ${C.line}`,
                  borderRadius: 22,
                  padding: 32,
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px -20px rgba(27,35,22,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: `${color}1a`,
                    color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={24} />
                </div>
                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.5rem",
                    margin: 0,
                    color: C.ink,
                  }}
                >
                  {title}
                </h2>
                <div
                  style={{
                    fontSize: "0.95rem",
                    color,
                    marginTop: 4,
                    marginBottom: 16,
                  }}
                >
                  {titleHi}
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: `${C.ink}b3`,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
                <ul
                  style={{ marginTop: 20, paddingLeft: 0, listStyle: "none" }}
                >
                  {points.map((pt) => (
                    <li
                      key={pt}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 10,
                        fontSize: "0.875rem",
                        color: `${C.ink}cc`,
                      }}
                    >
                      <BadgeCheck
                        size={16}
                        style={{ color: C.forest, marginTop: 2, flexShrink: 0 }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}
      >
        <div
          className="benefits-cta-grid"
          style={{
            background: C.forest,
            borderRadius: 28,
            padding: "56px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 32,
            alignItems: "center",
            color: C.cream,
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e3a73f",
                marginBottom: 16,
              }}
            >
              {COMPANY.brand}
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {t("why.cta.title")}
            </h2>
            <p style={{ marginTop: 16, color: `${C.cream}cc`, maxWidth: 520 }}>
              {t("why.cta.desc")}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <Link
              to="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 999,
                background: "#c9871f",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              {t("why.cta.btn1")} <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                color: C.cream,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              {t("why.cta.btn2")}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .benefits-hero-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .benefits-cta-grid { grid-template-columns: 1fr !important; padding: 32px !important; }
        }
      `}</style>
    </main>
  );
}
