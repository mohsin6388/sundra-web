// // DealerForm.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import {
//   ArrowRight,
//   BadgeCheck,
//   MapPin,
//   TrendingUp,
//   Truck,
//   Handshake,
//   CheckCircle,
// } from "lucide-react";
// import { toast, Toaster } from "sonner";
// import { COMPANY, PRODUCTS } from "../lib/products";

// const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

// const PERKS = [
//   {
//     icon: TrendingUp,
//     title: "Fast-moving SKUs",
//     desc: "Trusted, high-demand brand across India & Nepal.",
//     color: "bg-blue-100 text-blue-600",
//   },
//   {
//     icon: Truck,
//     title: "Reliable supply",
//     desc: "Direct from our Kanpur Dehat manufacturing unit.",
//     color: "bg-purple-100 text-purple-600",
//   },
//   {
//     icon: Handshake,
//     title: "Margin support",
//     desc: "Healthy distributor margins on every bag.",
//     color: "bg-green-100 text-green-600",
//   },
//   {
//     icon: BadgeCheck,
//     title: "Marketing support",
//     desc: "Co-branded materials, banners and farmer activations.",
//     color: "bg-orange-100 text-orange-600",
//   },
// ];

// const FormField = ({ label, required, ...props }) => (
//   <div className="space-y-2">
//     <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       {...props}
//       className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none 
//                  focus:ring-2 focus:ring-green-500 focus:border-transparent
//                  transition-all duration-200 hover:border-gray-300"
//     />
//   </div>
// );

// const TextAreaField = ({ label, ...props }) => (
//   <div className="space-y-2">
//     <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500">
//       {label}
//     </label>
//     <textarea
//       {...props}
//       className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none 
//                  focus:ring-2 focus:ring-green-500 focus:border-transparent
//                  transition-all duration-200 resize-none"
//     />
//   </div>
// );

// const SelectField = ({ label, options, ...props }) => (
//   <div className="space-y-2">
//     <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500">
//       {label}
//     </label>
//     <select
//       {...props}
//       className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none 
//                  focus:ring-2 focus:ring-green-500 focus:border-transparent
//                  transition-all duration-200 cursor-pointer"
//     >
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// const PerkCard = ({ icon: Icon, title, desc, color }) => (
//   <div className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm 
//                   hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
//       <Icon size={22} />
//     </div>
//     <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//     <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
//   </div>
// );

// const ContactCard = () => (
//   <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 p-6 shadow-sm">
//     <div className="flex items-center gap-3 text-green-700 font-semibold mb-4">
//       <MapPin size={18} />
//       <span>Sundra Group HQ</span>
//     </div>
//     <p className="text-gray-700 leading-relaxed mb-4">{COMPANY.regOffice}</p>
//     <a
//       href={`tel:${COMPANY.phones[0].replace(/\D/g, "")}`}
//       className="inline-flex items-center gap-2 text-2xl font-bold text-green-700 
//                  hover:text-green-800 transition-colors"
//     >
//       {COMPANY.phones[0]}
//       <ArrowRight size={20} className="text-green-600" />
//     </a>
//   </div>
// );

// export default function Dealers() {
//   const [formData, setFormData] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     business_name: "",
//     city: "",
//     state: "",
//     pincode: "",
//     experience_years: "",
//     interested_products: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // Clear error for this field when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const requiredFields = ["full_name", "phone", "city", "state"];
    
//     requiredFields.forEach((field) => {
//       if (!formData[field]?.trim()) {
//         newErrors[field] = `${field.replace("_", " ")} is required`;
//       }
//     });

//     if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (formData.phone && !/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Please enter a valid 10-digit phone number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       toast.error("Please fill in all required fields correctly");
//       return;
//     }

//     setLoading(true);

//     try {
//       // Remove empty fields before sending
//       const payload = Object.fromEntries(
//         Object.entries(formData).filter(([_, value]) => value?.trim() !== "")
//       );

//       await axios.post(`${API}/dealer`, payload);

//       toast.success(
//         "✓ Application submitted successfully! Our team will contact you within 48 hours.",
//         {
//           duration: 5000,
//           icon: <CheckCircle className="text-green-500" />,
//         }
//       );

//       // Reset form
//       setFormData({
//         full_name: "",
//         phone: "",
//         email: "",
//         business_name: "",
//         city: "",
//         state: "",
//         pincode: "",
//         experience_years: "",
//         interested_products: "",
//         message: "",
//       });
//     } catch (err) {
//       const errorMessage = err?.response?.data?.detail || "Submission failed. Please try again.";
//       toast.error(errorMessage, { duration: 4000 });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-center" richColors />
      
//       <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
//         {/* Hero Section */}
//         <section className="relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent" />
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//             <div className="text-center lg:text-left">
//               <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 
//                              text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
//                 Become a Dealer
//               </span>
              
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 <div>
//                   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//                     Build a profitable feed business with{" "}
//                     <span className="text-green-600 relative inline-block">
//                       Barsana
//                       <svg className="absolute bottom-2 left-0 w-full h-3 text-green-200 -z-10" 
//                            viewBox="0 0 200 10" preserveAspectRatio="none">
//                         <path d="M0 5 Q 50 0, 100 5 T 200 5" stroke="currentColor" strokeWidth="3" fill="none"/>
//                       </svg>
//                     </span>
//                   </h1>
//                 </div>
                
//                 <div className="lg:pl-8">
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     Join {COMPANY.group}'s growing network of authorised distributors 
//                     across India and Nepal. Apply in two minutes — we'll get back within 48 hours.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Perks Section */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {PERKS.map((perk) => (
//               <PerkCard key={perk.title} {...perk} />
//             ))}
//           </div>
//         </section>

//         {/* Form Section */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//           <div className="grid lg:grid-cols-12 gap-12">
//             {/* Left Column - Info */}
//             <div className="lg:col-span-5 space-y-8">
//               <div>
//                 <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 
//                                text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
//                   Apply Now
//                 </span>
//                 <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
//                   Tell us about your business.
//                 </h2>
//                 <p className="mt-4 text-gray-600 leading-relaxed">
//                   Fill in the form and our partnership team will get in touch with 
//                   pricing, launch kits, and territory details.
//                 </p>
//               </div>
              
//               <ContactCard />
//             </div>

//             {/* Right Column - Form */}
//             <form onSubmit={handleSubmit} className="lg:col-span-7">
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 space-y-6">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <FormField
//                     label="Full Name"
//                     name="full_name"
//                     value={formData.full_name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Enter your full name"
//                   />
                  
//                   <FormField
//                     label="Phone Number"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     placeholder="10-digit mobile number"
//                   />
                  
//                   <FormField
//                     label="Email Address"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="your@email.com"
//                   />
                  
//                   <FormField
//                     label="Business Name"
//                     name="business_name"
//                     value={formData.business_name}
//                     onChange={handleChange}
//                     placeholder="Your business/company name"
//                   />
                  
//                   <FormField
//                     label="City"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your city"
//                   />
                  
//                   <FormField
//                     label="State"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your state"
//                   />
                  
//                   <FormField
//                     label="Pincode"
//                     name="pincode"
//                     value={formData.pincode}
//                     onChange={handleChange}
//                     placeholder="Postal code"
//                   />
                  
//                   <FormField
//                     label="Years of Experience"
//                     name="experience_years"
//                     type="number"
//                     value={formData.experience_years}
//                     onChange={handleChange}
//                     placeholder="Years in business"
//                   />
//                 </div>

//                 <SelectField
//                   label="Interested Products"
//                   name="interested_products"
//                   value={formData.interested_products}
//                   onChange={handleChange}
//                   options={[
//                     { value: "", label: "All Barsana Products" },
//                     ...PRODUCTS.map((p) => ({ value: p.name, label: p.name })),
//                   ]}
//                 />

//                 <TextAreaField
//                   label="Tell us more about your business"
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Brief about your existing business, target market, current distribution network..."
//                 />

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-green-600 to-green-700 
//                            hover:from-green-700 hover:to-green-800 
//                            text-white py-4 rounded-xl font-semibold
//                            flex items-center justify-center gap-2
//                            transform transition-all duration-200
//                            disabled:opacity-70 disabled:cursor-not-allowed
//                            shadow-md hover:shadow-lg"
//                 >
//                   {loading ? (
//                     <>
//                       <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" 
//                                 stroke="currentColor" strokeWidth="4" fill="none"/>
//                         <path className="opacity-75" fill="currentColor" 
//                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
//                       </svg>
//                       Submitting...
//                     </>
//                   ) : (
//                     <>
//                       Submit Application
//                       <ArrowRight size={18} />
//                     </>
//                   )}
//                 </button>

//                 <p className="text-center text-xs text-gray-400">
//                   We respect your privacy. Your information is never shared with third parties.
//                 </p>
//               </div>
//             </form>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import {
  ArrowRight, BadgeCheck, MapPin, TrendingUp,
  Truck, Handshake, CheckCircle,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { COMPANY, PRODUCTS } from "../lib/products";
import {content} from "../lib/translate";

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

const FormField = ({ label, required, ...props }) => (
  <div className="space-y-2">
    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none 
                 focus:ring-2 focus:ring-green-500 focus:border-transparent
                 transition-all duration-200 hover:border-gray-300"
    />
  </div>
);

const TextAreaField = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500">
      {label}
    </label>
    <textarea
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none 
                 focus:ring-2 focus:ring-green-500 focus:border-transparent
                 transition-all duration-200 resize-none"
    />
  </div>
);

const SelectField = ({ label, options, ...props }) => (
  <div className="space-y-2">
    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500">
      {label}
    </label>
    <select
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none 
                 focus:ring-2 focus:ring-green-500 focus:border-transparent
                 transition-all duration-200 cursor-pointer"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

const PerkCard = ({ icon: Icon, title, desc, color }) => (
  <div className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm 
                  hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
      <Icon size={22} />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const ContactCard = ({ t }) => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 p-6 shadow-sm">
    <div className="flex items-center gap-3 text-green-700 font-semibold mb-4">
      <MapPin size={18} />
      <span>{t("dealer.contact.hq")}</span>
    </div>
    <p className="text-gray-700 leading-relaxed mb-4">{COMPANY.regOffice}</p>
    
    <a  href={`tel:${COMPANY.phones[0].replace(/\D/g, "")}`}
      className="inline-flex items-center gap-2 text-2xl font-bold text-green-700 
                 hover:text-green-800 transition-colors"
    >
      {COMPANY.phones[0]}
      <ArrowRight size={20} className="text-green-600" />
    </a>
  </div>
);

export default function Dealers({ lang = "en" }) {
  const t = (key) => content[key]?.[lang] ?? key;

  const PERKS = [
    {
      icon: TrendingUp,
      title: t("dealer.perk1.title"),
      desc: t("dealer.perk1.desc"),
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Truck,
      title: t("dealer.perk2.title"),
      desc: t("dealer.perk2.desc"),
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Handshake,
      title: t("dealer.perk3.title"),
      desc: t("dealer.perk3.desc"),
      color: "bg-green-100 text-green-600",
    },
    {
      icon: BadgeCheck,
      title: t("dealer.perk4.title"),
      desc: t("dealer.perk4.desc"),
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const [formData, setFormData] = useState({
    full_name: "", phone: "", email: "", business_name: "",
    city: "", state: "", pincode: "", experience_years: "",
    interested_products: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    ["full_name", "phone", "city", "state"].forEach((field) => {
      if (!formData[field]?.trim()) newErrors[field] = `${field.replace("_", " ")} is required`;
    });
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Please enter a valid 10-digit phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) { toast.error(t("dealer.form.error")); return; }
    setLoading(true);
    try {
      const payload = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value?.trim() !== "")
      );
      await axios.post(`${API}/dealer`, payload);
      toast.success(t("dealer.form.success"), {
        duration: 5000,
        icon: <CheckCircle className="text-green-500" />,
      });
      setFormData({
        full_name: "", phone: "", email: "", business_name: "",
        city: "", state: "", pincode: "", experience_years: "",
        interested_products: "", message: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.detail || t("dealer.form.fail"), { duration: 4000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 
                             text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                {t("dealer.hero.badge")}
              </span>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {t("dealer.hero.title_1")}{" "}
                    <span className="text-green-600 relative inline-block">
                      {t("dealer.hero.title_2")}
                      <svg className="absolute bottom-2 left-0 w-full h-3 text-green-200 -z-10"
                           viewBox="0 0 200 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 0, 100 5 T 200 5" stroke="currentColor" strokeWidth="3" fill="none"/>
                      </svg>
                    </span>
                  </h1>
                </div>
                <div className="lg:pl-8">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t("dealer.hero.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PERKS ═══ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk) => (
              <PerkCard key={perk.title} {...perk} />
            ))}
          </div>
        </section>

        {/* ═══ FORM SECTION ═══ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left — Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 
                               text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  {t("dealer.form.badge")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  {t("dealer.form.title")}
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t("dealer.form.desc")}
                </p>
              </div>
              <ContactCard t={t} />
            </div>

            {/* Right — Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label={t("dealer.field.name")}        name="full_name"        value={formData.full_name}        onChange={handleChange} required placeholder={t("dealer.placeholder.name")} />
                  <FormField label={t("dealer.field.phone")}       name="phone"            type="tel" value={formData.phone} onChange={handleChange} required placeholder={t("dealer.placeholder.phone")} />
                  <FormField label={t("dealer.field.email")}       name="email"            type="email" value={formData.email} onChange={handleChange} placeholder={t("dealer.placeholder.email")} />
                  <FormField label={t("dealer.field.business")}    name="business_name"    value={formData.business_name}    onChange={handleChange} placeholder={t("dealer.placeholder.business")} />
                  <FormField label={t("dealer.field.city")}        name="city"             value={formData.city}             onChange={handleChange} required placeholder={t("dealer.placeholder.city")} />
                  <FormField label={t("dealer.field.state")}       name="state"            value={formData.state}            onChange={handleChange} required placeholder={t("dealer.placeholder.state")} />
                  <FormField label={t("dealer.field.pincode")}     name="pincode"          value={formData.pincode}          onChange={handleChange} placeholder={t("dealer.placeholder.pincode")} />
                  <FormField label={t("dealer.field.experience")}  name="experience_years" type="number" value={formData.experience_years} onChange={handleChange} placeholder={t("dealer.placeholder.experience")} />
                </div>

                <SelectField
                  label={t("dealer.field.products")}
                  name="interested_products"
                  value={formData.interested_products}
                  onChange={handleChange}
                  options={[
                    { value: "", label: t("dealer.placeholder.products") },
                    ...PRODUCTS.map((p) => ({ value: p.name, label: p.name })),
                  ]}
                />

                <TextAreaField
                  label={t("dealer.field.message")}
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("dealer.placeholder.message")}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 
                           hover:from-green-700 hover:to-green-800 
                           text-white py-4 rounded-xl font-semibold
                           flex items-center justify-center gap-2
                           transform transition-all duration-200
                           disabled:opacity-70 disabled:cursor-not-allowed
                           shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10"
                                stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      {t("dealer.form.submitting")}
                    </>
                  ) : (
                    <>
                      {t("dealer.form.submit")}
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  {t("dealer.form.privacy")}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}