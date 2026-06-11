// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// function ProductCard({ product }) {
//   return (
//     <>
//       <style>{`
//         .product-card{
//           display:flex;
//           flex-direction:column;
//           justify-content: space-between;
//           text-decoration:none;
//           background:#fff;
//           border-radius:20px;
//           overflow:hidden;
//           box-shadow:0 5px 20px rgba(0,0,0,0.08);
//           transition:0.3s;
//           color:#222;
//           height: 500px;
//         }

//         .product-card:hover{
//           transform:translateY(-5px);
//         }

//         .product-image{
//           position:relative;
//           height:280px;
//           overflow:hidden;
//         }

//         .product-image img{
//           width:100%;
//           height:auto;
//           object-fit: contain;
//           object-position: top;
//           transition:0.6s;
//         }

//         .product-card:hover .product-image img{
//           transform:scale(1.05);
//         }

//         .product-tag{
//           position:absolute;
//           top:15px;
//           left:15px;
//           padding:6px 12px;
//           border-radius:20px;
//           color:#fff;
//           font-size:11px;
//           font-weight:600;
//           text-transform:uppercase;
//         }

//         .product-content{
//           padding:16px;
//         }

//         .product-header{
//           display:flex;
//           justify-content:space-between;
//           align-items:flex-start;
//           gap:8px;
//         }

//         .product-title{
//           font-size:20px;
//           font-weight:700;
//           margin:0;
//           line-height:1.2;
//         }

//         .product-title-hi{
//           color:#1f4d2c;
//           margin-top:2px;
//           font-size:13px;
//         }

//         .product-summary{
//           margin-top:10px;
//           line-height:1.5;
//           color:#666;
//           font-size:14px;

//           display:-webkit-box;
//           -webkit-line-clamp:2;
//           -webkit-box-orient:vertical;
//           overflow:hidden;
//         }

//         .product-specs{
//           margin-top:14px;
//           padding-top:14px;
//           border-top:1px solid #ddd;
//           display:grid;
//           grid-template-columns:repeat(3,1fr);
//           gap:10px;
//         }

//         .spec-label{
//           font-size:10px;
//           text-transform:uppercase;
//           color:#888;
//           margin-bottom:2px;
//         }

//         .spec-value{
//           font-size:13px;
//           font-weight:700;
//           word-break: break-word;
//         }

//         @media (max-width: 768px) {
//   .product-card {
//     height: 380px;
//   }

//   .product-image {
//     height: 220px;
//     flex-shrink: 0;
//   }

//   .product-content{
//     padding:12px;
//     heigth: 200px;
//     background: red;

//   }

//   .product-title {
//     font-size: 14px;
//   }

//   .product-title-hi{
//   font-size: 13px;
//   }

//   .product-summary {
//     font-size: 10px;
//   }

//   .spec-label{
//   font-size: 10px
//   }

//   .spec-value{
//   font-size: 8px
//   }

//   .product-specs {
//     font-size: 12px;
//   }
// }

//       `}</style>

//       <Link to={`/products/${product.slug}`} className="product-card">
//         <div
//           className="product-image"
//           style={{
//             background: `linear-gradient(140deg, ${product.accent}20, transparent 80%)`,
//           }}
//         >
//           <img src={product.image} alt={product.name} loading="lazy" />

//           <span className="product-tag" style={{ background: product.accent }}>
//             {product.tag}
//           </span>
//         </div>

//         <div className="product-content">
//           <div className="product-header">
//             <div>
//               <h3 className="product-title">{product.name}</h3>

//               <div className="product-title-hi">{product.nameHi}</div>
//             </div>

//             <ArrowUpRight size={22} style={{ flexShrink: 0 }} />
//           </div>

//           <p className="product-summary">{product.summary}</p>

//           <div className="product-specs">
//             <Spec label="Yield" value={product.yield} />
//             <Spec label="Protein" value={product.protein} />
//             <Spec label="Fat" value={product.fat} />
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// }

// function Spec({ label, value }) {
//   return (
//     <div>
//       <div className="spec-label">{label}</div>
//       <div className="spec-value">{value}</div>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProductCard({ product }) {
  return (
    <>
      <style>{`
        .product-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: 0.3s;
          color: #222;
          height: 500px;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-image {
          position: relative;
          height: 300px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .product-image img {
           width: 100%;
           height: 100%;
           object-fit: cover;  /* contain → cover */
           object-position: top;
           transition: 0.6s;
         }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          padding: 6px 12px;
          border-radius: 20px;
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .product-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
        }

        .product-title {
          font-size: 20px;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }

        .product-title-hi {
          color: #1f4d2c;
          margin-top: 2px;
          font-size: 13px;
        }

        .product-summary {
          margin-top: 8px;
          line-height: 1.5;
          color: #666;
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-specs {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #ddd;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .spec-label {
          font-size: 10px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 2px;
        }

        .spec-value {
          font-size: 13px;
          font-weight: 700;
          word-break: break-word;
        }

        @media (max-width: 767px) {
          .product-card {
            height: 360px;
          }

          .product-image {
            height: 190px;
          }

          .product-content {
            padding: 10px 12px;
          }

          .product-title {
            font-size: 14px;
          }

          .product-title-hi {
            font-size: 11px;
          }

          .product-summary {
            font-size: 11px;
            margin-top: 4px;
          }

          .product-specs {
            margin-top: 8px;
            padding-top: 8px;
            gap: 6px;
          }

          .spec-label {
            font-size: 9px;
          }

          .spec-value {
            font-size: 11px;
          }
        }

      `}</style>

      <Link to={`/products/${product.slug}`} className="product-card">
        <div
          className="product-image"
          style={{
            background: `linear-gradient(140deg, ${product.accent}20, transparent 80%)`,
          }}
        >
          <img src={product.image} alt={product.name} loading="lazy" />
          <span className="product-tag" style={{ background: product.accent }}>
            {product.tag}
          </span>
        </div>

        <div className="product-content">
          <div>
            <div className="product-header">
              <div>
                <h3 className="product-title">{product.name}</h3>
                <div className="product-title-hi">{product.nameHi}</div>
              </div>
              <ArrowUpRight size={18} style={{ flexShrink: 0 }} />
            </div>
            <p className="product-summary">{product.summary}</p>
          </div>

          <div className="product-specs">
            <Spec label="Yield" value={product.yield} />
            <Spec label="Protein" value={product.protein} />
            <Spec label="Fat" value={product.fat} />
          </div>
        </div>
      </Link>
    </>
  );
}

function Spec({ label, value }) {
  return (
    <div>
      <div className="spec-label">{label}</div>
      <div className="spec-value">{value}</div>
    </div>
  );
}

export default ProductCard;