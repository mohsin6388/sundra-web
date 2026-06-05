import BarsanaPacketYellow from "../assets/Barsana-D.webp"
import BarsanaPacketPink from "../assets/BarsanaPink.webp"
import BarsanaPacketRed from "../assets/Barsana-Packet.webp"
import BuffSpecial from "../assets/Buff-Special.webp"
import Churi from "../assets/Churi.webp"
import MultiGranChukar from "../assets/Multigran-Chokar.webp"
import RoyalMixture from "../assets/Royal-Mixture.webp"
import Sudarshan from "../assets/Sudarshan.webp"
import Super from "../assets/Super.webp"
import SupremePlus from "../assets/Supremeplus.webp"
import eightThousand from "../assets/8000.webp"


// ── Company Info ──────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "Sundra Group",
  brand: "Sundra Group",
  group: "Sundra Group",
  founder: "Deific Digital",
  established: "2010",
  tagline: "Madhur Swad, Behti Doodh Dhar",
  taglineHi: "मधुर स्वाद, बहती दूध धार",
  regOffice: "Kanpur, Uttar Pradesh, India",
  unit: "Kanpur Dehat, Uttar Pradesh, India",
  email: "info@barsana.com",
  phones: ["+91 9876543210", "+91 9876543211"],
  whatsapp: "919876543210",
};

// ── Gallery Images ─────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  BarsanaPacketYellow, // cow farm
  BarsanaPacketPink, // cow farm
  BarsanaPacketRed, // cow farm
  BuffSpecial,
  Churi,
  MultiGranChukar,
  RoyalMixture,
  Sudarshan,
  Super,
  SupremePlus,
  eightThousand
];

// ── Products ───────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  //BarsanaPacketYellow
  {
    slug: "barsana-super",
    name: "Barsana Gold",
    nameHi: "बरसाना गोल्ड",
    tag: "Bestseller",
    accent: "#1f4d2c",
    image: BarsanaPacketYellow,
    summary:
      "Our flagship cattle feed for high-yielding cows and buffaloes. Balanced energy, protein and minerals for peak daily production.",
    yield: "20–25 L/day",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Up to +22% milk yield increase",
      "Optimised protein-energy ratio",
      "Steam cooked for better digestion",
      "Rich in Vitamin A, D & E",
      "Zero artificial colours",
      "Ideal for HF, Sahiwal & Murrah",
    ],
  },

    //BarsanaPacketPink
  {
    slug: "barsana-gold",
    name: "Barsana Super",
    nameHi: "बरसाना सुपर",
    tag: "Premium",
    accent: "#c9871f",
    image: BarsanaPacketPink,
    summary:
      "Premium formulation for elite dairy herds targeting 25+ litres per day with enriched micro-nutrient profile.",
    yield: "25–30 L/day",
    protein: "26%",
    fat: "6%",
    benefits: [
      "Boosts butterfat content",
      "Mineral-chelate technology",
      "Supports reproductive health",
      "Enhanced rumen buffering",
      "Reduces somatic cell count",
      "For top-performing animals",
    ],
  },


    //BarsanaPacketRed
  {
    slug: "barsana-8000",
    name: "Barsana Pashu Aahar",
    nameHi: "बरसाना पशु आहार",
    tag: "Elite",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Our elite formula engineered for breeds targeting 8,000+ kg annual lactation. Scientifically balanced for maximum output.",
    yield: "30+ L/day",
    protein: "28%",
    fat: "7%",
    benefits: [
      "Targets 8000 kg/year lactation",
      "Advanced amino-acid profile",
      "Rumen-protected fat inclusion",
      "High energy density",
      "Supports transition cow health",
      "For HF cross & elite buffaloes",
    ],
  },


    //BuffSpecial
  {
    slug: "barsana-buff-special",
    name: "Buff Speciale",
    nameHi: "बफ स्पेशल",
    tag: "Buffalo Specialist",
    accent: "#2d6a3e",
    image: BuffSpecial,
    summary:
      "Formulated specifically for Murrah, Surti and other buffalo breeds to maximise fat-rich milk production.",
    yield: "15–22 L/day",
    protein: "22%",
    fat: "6.5%",
    benefits: [
      "Buffalo-optimised mineral mix",
      "Higher butterfat yield",
      "Improves coat and health",
      "Supports heavy body buffaloes",
      "Reduces heat stress",
      "Proven across U.P. & Punjab farms",
    ],
  },

  //Churi
  {
    slug: "barsana-supreme-plus",
    name: "Supreme Plus",
    nameHi: "सुप्रीम प्लस",
    tag: "Value",
    accent: "#c9871f",
    image: Churi,
    summary:
      "Everyday ration for small dairy farmers — reliable nutrition at accessible price points without compromising on quality.",
    yield: "12–18 L/day",
    protein: "20%",
    fat: "3.5%",
    benefits: [
      "Cost-effective daily feed",
      "Complete vitamin inclusion",
      "Suitable for mixed herds",
      "Easy on digestion",
      "Available in 25 & 50 KG bags",
      "Trusted across 10,000+ farms",
    ],
  },

  //Multigran Chokar
  {
    slug: "barsana-multi-gran-chokar",
    name: "Multi Gran Chokar",
    nameHi: "मल्टी ग्रान चोकर",
    tag: "Young Stock",
    accent: "#6d4c41",
    image: MultiGranChukar,
    summary:
      "Purpose-built starter feed for calves from 2 weeks to 3 months. Supports rumen development and healthy early growth.",
    yield: "—",
    protein: "22%",
    fat: "4%",
    benefits: [
      "Accelerates rumen development",
      "High palatability for young stock",
      "Probiotics for gut health",
      "Reduces weaning stress",
      "Pellet form for easy intake",
      "For calves 2 weeks–3 months",
    ],
  },

   //RoyalMixture
  {
    slug: "barsana-royal-mixture",
    name: "Royal Mixture",
    nameHi: "रॉयल मिक्सचर",
    tag: "Supplement",
    accent: "#1565c0",
    image: RoyalMixture,
    summary:
      "Concentrated mineral and vitamin supplement to correct deficiencies and maintain year-round herd health.",
    yield: "RoyalMixture",
    protein: "—",
    fat: "—",
    benefits: [
      "Corrects calcium & phosphorus imbalances",
      "Prevents milk fever",
      "Improves conception rates",
      "Zinc & copper for hoof health",
      "Daily 50–80g dosing",
      "Compatible with all Barsana feeds",
    ],
  },


  // Sudarshan
  {
    slug: "barsana-sudarshan",
    name: "Barsana Sudarshan",
    nameHi: "बरसाना सुदर्शन",
    tag: "Organic",
    accent: "#558b2f",
    image: Sudarshan,
    summary:
      "Certified organic cattle feed for farms targeting organic dairy certification. No synthetic additives or preservatives.",
    yield: "16–22 L/day",
    protein: "21%",
    fat: "4.5%",
    benefits: [
      "Organic India certified",
      "Zero synthetic additives",
      "Non-GMO ingredients",
      "Ideal for organic dairy farms",
      "Supports premium milk pricing",
      "Sustainably sourced grains",
    ],
  },

 //Super
  {
    slug: "barsana-super",
    name: "Super",
    nameHi: "सुपर",
    tag: "New",
    accent: "#4a148c",
    image: Super,
    summary:
      "Our newest formulation for high-potential Murrah buffaloes — specially calibrated energy and fat profile for A2 fat-rich milk.",
    yield: "18–26 L/day",
    protein: "23%",
    fat: "7%",
    benefits: [
      "Maximises A2 fat output",
      "Rumen-protected bypass fat",
      "Supports heavy lactation",
      "Improved body condition score",
      "New chelated zinc complex",
      "Launching across U.P. & Bihar",
    ],
  },

  //SupremePlus
  {
    slug: "barsana-supreme-plus",
    name: "Supreme Plus",
    nameHi: "सुप्रीम प्लस",
    tag: "New",
    accent: "#4a148c",
    image: SupremePlus,
    summary:
      "Our newest formulation for high-potential Murrah buffaloes — specially calibrated energy and fat profile for A2 fat-rich milk.",
    yield: "18–26 L/day",
    protein: "23%",
    fat: "7%",
    benefits: [
      "Maximises A2 fat output",
      "Rumen-protected bypass fat",
      "Supports heavy lactation",
      "Improved body condition score",
      "New chelated zinc complex",
      "Launching across U.P. & Bihar",
    ],
  },

  //eightThousand
  {
    slug: "barsana-eight-thousand",
    name: "Eight Thousand",
    nameHi: "8000",
    tag: "New",
    accent: "#4a148c",
    image: eightThousand,
    summary:
      "Our newest formulation for high-potential Murrah buffaloes — specially calibrated energy and fat profile for A2 fat-rich milk.",
    yield: "18–26 L/day",
    protein: "23%",
    fat: "7%",
    benefits: [
      "Maximises A2 fat output",
      "Rumen-protected bypass fat",
      "Supports heavy lactation",
      "Improved body condition score",
      "New chelated zinc complex",
      "Launching across U.P. & Bihar",
    ],
  },
  
];




export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
