import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Milk,
  FlaskConical,
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Trophy,
  Users,
  MapPin,
  TrendingUp,
  Star,
  CheckCircle2,
  Factory,
  Wheat,
  Globe2,
  Phone,
} from "lucide-react";
import { COMPANY, GALLERY_IMAGES } from "../lib/products";

/* ─── Gold accent ───────────────────────────────────── */
const Gold = ({ children }) => (
  <span style={{ color: "#c9871f" }}>{children}</span>
);

/* ─── Data ────────────────────────────────────────── */
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
  // {
  //   Icon: ShieldCheck,
  //   title: "Uncompromising Quality",
  //   desc: "ISO 9001:2015 certified processes govern every step — from procurement to packaging — so farmers always receive a consistent, safe product.",
  // },
  // {
  //   Icon: HeartHandshake,
  //   title: "Farmer Partnership",
  //   desc: "Our agronomists provide on-ground training and support, helping more than 10,000 farmers across India unlock their herds' full potential.",
  // },
];

const STATS = [
  { value: "11+", label: "Years of Excellence", Icon: Trophy },
  // { value: "10,000+", label: "Farmers Served", Icon: Users },
  { value: "200 MT", label: "Daily Production", Icon: Factory },
  { value: "8", label: "States Covered", Icon: MapPin },
];

const JOURNEY = [
  {
    year: "1998",
    title: "Foundation",
    desc: "Sundra Group was established with a single manufacturing unit in Uttar Pradesh, with a vision to revolutionize dairy nutrition in India.",
  },
  {
    year: "2005",
    title: "ISO Certification",
    desc: "Achieved ISO 9001 certification, setting new quality benchmarks for the animal feed industry in northern India.",
  },
  {
    year: "2012",
    title: "Pan-India Expansion",
    desc: "Expanded operations across 6 states, establishing a robust dealer network serving over 5,000 farmers.",
  },
  {
    year: "2018",
    title: "R&D Lab Launch",
    desc: "Inaugurated a state-of-the-art in-house research laboratory, enabling precision nutrition formulation.",
  },
  {
    year: "2021",
    title: "Sustainability Initiative",
    desc: "Launched our sustainable sourcing program, partnering with local farmers to promote eco-friendly agricultural practices.",
  },
  {
    year: "2025",
    title: "Greenfield Plant",
    desc: "New 50,000 MT/year capacity plant under construction — doubling our ability to serve India's growing dairy sector.",
  },
];

const TEAM = [
  {
    name: "Dr. Arvind Sharma",
    role: "Chief Nutritionist",
    exp: "20+ years in bovine nutrition research",
    img: "https://i.pravatar.cc/200?img=11",
  },
  {
    name: "Priya Mehta",
    role: "Head of Operations",
    exp: "ISO compliance & supply chain specialist",
    img: "https://i.pravatar.cc/200?img=47",
  },
  {
    name: "Rajesh Gupta",
    role: "Field Agronomy Lead",
    exp: "Farmer outreach across 8 states",
    img: "https://i.pravatar.cc/200?img=15",
  },
];

const PRODUCTS_HIGHLIGHT = [
  {
    name: "Dairy Gold Pellets",
    badge: "Best Seller",
    desc: "High-energy pellet feed formulated for peak milk production.",
    Icon: Wheat,
  },
  {
    name: "ProGrow Cattle Mix",
    badge: "New",
    desc: "Mineral-enriched blend for rapid weight gain and immunity.",
    Icon: TrendingUp,
  },
  {
    name: "VitaLact Premium",
    badge: "Vet Approved",
    desc: "Lactation booster with essential vitamins and omega acids.",
    Icon: Star,
  },
];

/* ══════════════════════════════════════════════════════
   EXPORT
══════════════════════════════════════════════════════ */
export default function AboutSections() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .about-page {
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Hero banner ── */
        .hero-banner {
          background: linear-gradient(135deg, #0d1f11 0%, #1a3d20 50%, #0d1f11 100%);
          padding: 100px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(201,135,31,0.15) 0%, transparent 70%);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201,135,31,0.15);
          border: 1px solid rgba(201,135,31,0.4);
          color: #c9871f;
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 6vw, 64px);
          color: #fff;
          line-height: 1.15;
          margin: 0 0 20px;
          font-weight: 900;
        }
        .hero-subtitle {
          color: rgba(255,255,255,0.6);
          font-size: 16px;
          max-width: 560px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }
        .hero-links {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Stats bar ── */
        .stats-bar {
          background: #c9871f;
          padding: 40px 30px;
          display: flex;
          align-items: center;
          jsutify-content: center;
        }
        .stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 200px;
        }
        .stat-item {
          text-align: center;
          padding: 10px;
          border-right: 1px solid rgba(255,255,255,0.25);
        }
        // .stat-item:last-child { border-right: none; }
        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 42px);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        /* ── Mission section ── */
        .mission-section {
        fontFamily: "'Inter', sans-serif",
          background: #f5f0e8;
          padding: 90px 30px;
          position: relative;
          overflow: hidden;
        }
        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 70px;
          align-items: center;
        }
        .values-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 36px;
        }
        .value-card {
          background: rgba(255,255,255,0.9);
          border-radius: 18px;
          padding: 22px;
          border-top: 3px solid #c9871f;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        .mission-img-wrap {
          position: relative;
          max-width: 460px;
          margin: 0 auto;
        }
        .mission-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 28px;
          display: block;
          box-shadow: 0 24px 70px rgba(0,0,0,0.2);
        }
        .img-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          border-radius: 0 0 28px 28px;
          background: linear-gradient(to top, rgba(26,46,30,0.93) 0%, transparent 100%);
          padding: 52px 28px 28px;
        }
        .img-badge {
          position: absolute;
          top: 20px; right: 20px;
          background: #fff;
          border-radius: 14px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.15);
        }

        /* ── Journey / Timeline ── */
        .journey-section {
          background: #fff;
          padding: 90px 30px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-tag {
          color: #c9871f;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 14px;
        }
        .section-title {
          font-family: 'Inter', serif;
          font-size: clamp(1.8rem, 4vw, 44px);
          color: #1a2e1e;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .section-desc {
          color: #666;
          font-size: 15px;
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto;
        }
        .timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #c9871f, #1f4d2c);
          transform: translateX(-50%);
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          gap: 0;
          margin-bottom: 48px;
          position: relative;
        }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-left { text-align: right; padding-right: 40px; padding-top: 4px; }
        .timeline-right { padding-left: 40px; padding-top: 4px; }
        .timeline-center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline-dot {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: #c9871f;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 11px;
          font-family: 'DM Sans', sans-serif;
          flex-shrink: 0;
          box-shadow: 0 0 0 6px rgba(201,135,31,0.15);
          z-index: 1;
        }
        .timeline-year {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 900;
          color: #c9871f;
        }
        .timeline-card {
          background: #f8f5ef;
          border-radius: 16px;
          padding: 20px 24px;
          border-left: 3px solid #c9871f;
        }
        .timeline-card h4 {
          margin: 0 0 8px;
          font-size: 15px;
          font-weight: 700;
          color: #1a2e1e;
        }
        .timeline-card p {
          margin: 0;
          font-size: 13.5px;
          color: #666;
          line-height: 1.7;
        }

        /* ── Products highlight ── */
        .products-section {
          background: #f5f0e8;
          padding: 90px 30px;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 16px;
        }
        .product-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .product-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #c9871f, #1f4d2c);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }
        .product-badge {
          display: inline-block;
          background: rgba(201,135,31,0.12);
          color: #c9871f;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 18px;
        }
        .product-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(31,77,44,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .product-name {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a2e1e;
          margin: 0 0 10px;
        }
        .product-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.75;
          margin: 0 0 24px;
        }

        /* ── Facility ── */
        .facility-section {
          background: #fff;
          padding: 90px 30px;
        }
        .facility-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }
        .specs-row {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          margin: 28px 0 36px;
        }
        .spec-item {
          border-left: 3px solid #c9871f;
          padding-left: 14px;
        }
        .facility-features {
          margin: 0 0 36px;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .facility-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #444;
          line-height: 1.6;
        }
        .facility-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 28px;
          display: block;
        }

        /* ── Team ── */
        .team-section {
          background: #1a2e1e;
          padding: 90px 30px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .team-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 36px 28px;
          text-align: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .team-card:hover {
          background: rgba(255,255,255,0.09);
          transform: translateY(-4px);
        }
        .team-img {
          width: 88px; height: 88px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 18px;
          display: block;
          border: 3px solid #c9871f;
        }
        .team-name {
          font-family: 'Playfair Display', serif;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 6px;
        }
        .team-role {
          color: #c9871f;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
        }
        .team-exp {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          line-height: 1.6;
        }

        /* ── CTA ── */
        .cta-section {
          background: linear-gradient(135deg, #c9871f 0%, #a06a12 100%);
          padding: 90px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4.5vw, 52px);
          color: #fff;
          font-weight: 900;
          line-height: 1.2;
          margin: 0 0 18px;
        }
        .cta-desc {
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          line-height: 1.8;
          max-width: 500px;
          margin: 0 auto 40px;
        }
        .cta-contact-row {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50px;
          padding: 10px 22px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        /* ── Buttons ── */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1f4d2c;
          color: #fff;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.3px;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .btn-primary:hover { background: #163a21; transform: translateY(-2px); }
        .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #c9871f;
          color: #fff;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          box-shadow: 0 8px 28px rgba(201,135,31,0.35);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .btn-gold:hover { opacity: 0.9; transform: translateY(-2px); }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #fff;
          text-decoration: none;
          padding: 13px 30px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          border: 1.5px solid rgba(255,255,255,0.4);
          transition: background 0.2s ease;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.08); }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .mission-grid, .facility-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .mission-grid > div:last-child { order: -1; }
          .timeline::before { left: 24px; }
          .timeline-item { grid-template-columns: 48px 1fr; }
          .timeline-left { display: none; }
          .timeline-center { align-items: flex-start; }
          .timeline-dot { width: 36px; height: 36px; font-size: 10px; }
          .timeline-right { padding-left: 20px; }
          .products-grid, .team-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.2); }
          .stat-item:nth-child(2n) { border-bottom: none; }
        }
        @media (max-width: 560px) {
          .values-mini-grid, .products-grid, .team-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-inner { grid-template-columns: 1fr 1fr; }
          .cta-contact-row { flex-direction: column; align-items: center; }
          .hero-links { flex-direction: column; align-items: center; }
        }
      `}</style>

      <div className="about-page">
        {/* ═══ HERO BANNER ═══════════════════════════════════ */}
        <section className="hero-banner">
          <div
            style={{
              position: "relative",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div className="hero-badge">
              <Globe2 size={12} />
              India's Trusted Dairy Nutrition Partner
            </div>
            <h1 className="hero-title">
              Nourishing <Gold>10,000+ Farmers</Gold>
              <br />
              Across India
            </h1>
            <p className="hero-subtitle">
              For over 11 years, Sundra Group has combined rigorous science with
              a farmer-first philosophy — delivering feed solutions that boost
              yield, improve animal health, and strengthen rural livelihoods.
            </p>
            <div className="hero-links">
              <Link to="/products" className="btn-gold">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Talk to Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ STATS BAR ═══════════════════════════════════ */}
        <div className="stats-bar">
          <div className="stats-inner">
            {STATS.map(({ value, label, Icon }) => (
              <div key={label} className="stat-item">
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ OUR MISSION ═══════════════════════════════════ */}
        <section className="mission-section">
          <div className="section-inner">
            <div className="mission-grid">
              {/* Left */}
              <div>
                <p className="section-tag">Our Mission</p>
                <h2 className="section-title">
                  Empowering dairy farmers with feed that creates <br />
                  <Gold>real economic prosperity</Gold>
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.85",
                    color: "#555",
                    margin: "0 0 8px",
                  }}
                >
                  We believe the backbone of India's dairy economy is the small
                  and mid-scale farmer. Our research, products, and field teams
                  exist to serve that backbone — one village at a time.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.85",
                    color: "#555",
                    margin: "0",
                  }}
                >
                  From the Gangetic plains to the Terai belt of Sundra Group's
                  nutritionists work directly with farmers to design feed
                  programs that match breed, climate, and herd size — delivering
                  measurable improvements in milk output and animal longevity.
                </p>
                <div className="values-mini-grid">
                  {VALUES.map(({ Icon, title, desc }) => (
                    <div key={title} className="value-card">
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
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
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="mission-img-wrap">
                  <img
                    src={GALLERY_IMAGES[2]}
                    alt="Cattle at Sundra farm"
                    className="mission-img"
                  />
                  <div className="img-overlay">
                    <p
                      style={{
                        color: "#c9871f",
                        fontSize: "11px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        margin: "0 0 8px",
                      }}
                    >
                      Best Choice for Dairy Farmers
                    </p>
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "clamp(1rem, 2vw, 20px)",
                        margin: "0 0 18px",
                        fontFamily: "'Playfair Display', serif",
                        lineHeight: "1.35",
                      }}
                    >
                      Advanced technology · Quality nutrition · Higher yield
                    </h3>
                    <Link
                      to="/contact"
                      className="btn-gold"
                      style={{ fontSize: "13px", padding: "10px 22px" }}
                    >
                      Call Us <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="img-badge">
                    <Milk size={22} color="#c9871f" />
                    <div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#999",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        Daily Output
                      </div>
                      <div
                        style={{
                          fontSize: "17px",
                          fontWeight: "800",
                          color: "#1a2e1e",
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        200+ MT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ OUR JOURNEY — TIMELINE ═══════════════════════ */}
        <section className="journey-section">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-tag">Our Journey</p>
              <h2 className="section-title">
                25 years of <span style={{ color: "#2D6A3E" }}>growth</span> &
                innovation
              </h2>
              <p className="section-desc">
                From a single plant in Uttar Pradesh to a pan-India operation —
                here are the milestones that shaped Sundra Group.
              </p>
            </div>

            <div className="timeline">
              {JOURNEY.map((item, i) => (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-left">
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <div className="timeline-center">
                    <div className="timeline-dot">{i + 1}</div>
                  </div>
                  <div className="timeline-right">
                    <div className="timeline-card">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PRODUCTS HIGHLIGHT ═══════════════════════════ */}
        <section className="products-section">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-tag">What We Make</p>
              <h2 className="section-title">
                Products built on decades of research
              </h2>
              <p className="section-desc">
                Each product in our portfolio is backed by in-house nutritional
                science and field-tested across thousands of herds.
              </p>
            </div>
            <div className="products-grid">
              {PRODUCTS_HIGHLIGHT.map(({ name, badge, desc, Icon }) => (
                <div key={name} className="product-card">
                  <span className="product-badge">{badge}</span>
                  <div className="product-icon-wrap">
                    <Icon size={24} color="#1f4d2c" />
                  </div>
                  <h3 className="product-name">{name}</h3>
                  <p className="product-desc">{desc}</p>
                  <Link
                    to="/products"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#c9871f",
                      fontWeight: "700",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "44px" }}>
              <Link to="/products" className="btn-primary">
                View All Products <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ OUR FACILITY ═══════════════════════════════════ */}
        <section className="facility-section">
          <div className="section-inner">
            <div className="facility-grid">
              {/* Left */}
              <div>
                <p className="section-tag">Our Facility</p>
                <h2 className="section-title">
                  State-of-the-art manufacturing built for scale
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.85",
                    color: "#666",
                    marginBottom: "14px",
                  }}
                >
                  Our plant is equipped with automated batching, computerised
                  nutritional mixing, and real-time quality assays. Capacity
                  across our facilities exceeds <strong>500 MT per day</strong>,
                  enabling us to serve large cooperatives and individual farmers
                  with equal reliability.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.85",
                    color: "#666",
                    marginBottom: "24px",
                  }}
                >
                  A new greenfield facility currently under construction will
                  double our capacity by 2026, reinforcing our commitment to
                  meeting India's growing demand for premium dairy nutrition.
                </p>

                <ul className="facility-features">
                  {[
                    "Automated batching & computerised nutritional mixing systems",
                    "In-house QA laboratory with real-time assay capability",
                    "Cold-chain compliant packaging & dispatch infrastructure",
                    "ISO 9001:2015 certified at every production stage",
                    "Solar-powered plant operations reducing carbon footprint by 30%",
                  ].map((feat) => (
                    <li key={feat}>
                      <CheckCircle2
                        size={16}
                        color="#c9871f"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="specs-row">
                  {[
                    { label: "Daily Capacity", value: "500+ MT" },
                    { label: "Certification", value: "ISO 9001:2015" },
                    { label: "New Plant", value: "50,000 MT/yr" },
                  ].map(({ label, value }) => (
                    <div key={label} className="spec-item">
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          marginBottom: "4px",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: "22px",
                          fontWeight: "800",
                          color: "#1a2e1e",
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/products" className="btn-primary">
                  Explore Our Products <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right */}
              <div style={{ position: "relative" }}>
                <img
                  src={GALLERY_IMAGES[0]}
                  alt="Manufacturing facility"
                  className="facility-img"
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
                    opacity: 0.12,
                    zIndex: -1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    left: "24px",
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "14px 20px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Factory size={22} color="#1f4d2c" />
                  <div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#999",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Est.
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                        color: "#1a2e1e",
                        fontFamily: "'Playfair Display', serif",
                        lineHeight: 1,
                      }}
                    >
                      1998
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ OUR TEAM ═══════════════════════════════════════ */}
        <section className="team-section">
          <div className="section-inner">
            <div className="section-header">
              <p
                style={{
                  color: "#c9871f",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  marginBottom: "14px",
                }}
              >
                Meet the Team
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 44px)",
                  color: "#fff",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  margin: "0 0 16px",
                }}
              >
                The experts behind every batch
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "15px",
                  lineHeight: "1.8",
                  maxWidth: "520px",
                  margin: "0 auto",
                }}
              >
                Our team of nutritionists, agronomists, and operations
                specialists bring decades of field experience to every product
                we make.
              </p>
            </div>
            <div className="team-grid">
              {TEAM.map(({ name, role, exp, img }) => (
                <div key={name} className="team-card">
                  <img src={img} alt={name} className="team-img" />
                  <div className="team-name">{name}</div>
                  <div className="team-role">{role}</div>
                  <p className="team-exp">{exp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA SECTION ════════════════════════════════════ */}
        <section className="cta-section">
          <div
            style={{
              position: "relative",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "3px",
                fontSize: "12px",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontWeight: "700",
              }}
            >
              Get in Touch
            </p>
            <h2 className="cta-title">Partner with Sundra Group</h2>
            <p className="cta-desc">
              Whether you're a dealer, cooperative, or individual farmer — our
              team is ready to help you find the right feed solution for your
              herd.
            </p>

            <div className="cta-contact-row">
              <a href="tel:+911234567890" className="contact-pill">
                <Phone size={15} /> +91 9876543210
              </a>
              <a href="mailto:info@sundragroup.com" className="contact-pill">
                <Globe2 size={15} /> info@barsana.com
              </a>
            </div>

            {/* <div
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
                  background: "#1a2e1e",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  fontWeight: "700",
                  fontSize: "14px",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
                }}
              >
                Contact Us <ArrowRight size={17} />
              </Link>
              <Link to="/products" className="btn-outline">
                Our Products <ArrowRight size={17} />
              </Link>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}