

// import React, { useState } from "react";
// import axios from "axios";
// import {
//   ArrowRight,
//   Mail,
//   MapPin,
//   MessageCircle,
//   Phone,
//   Clock,
//   Send,
//   CheckCircle,
//   AlertCircle,
//   Loader2,
// } from "lucide-react";
// import { toast, Toaster } from "sonner";
// import { COMPANY } from "../lib/products";

// const API = `${import.meta.env.VITE_BACKEND_URL || ""}/api`;

// /* ─── tiny helpers ─────────────────────────────────────── */

// const Tag = ({ children }) => (
//   <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold
//                    tracking-widest uppercase text-emerald-700 bg-emerald-50
//                    border border-emerald-200 px-3 py-1 rounded-full">
//     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
//     {children}
//   </span>
// );

// const Dot = () => (
//   <span className="inline-block w-1 h-1 rounded-full bg-gray-300 mx-2 align-middle" />
// );

// /* ─── info row inside a contact card ───────────────────── */
// const Row = ({ icon: Icon, label, href, children }) => (
//   <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
//     <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-50
//                      flex items-center justify-center text-emerald-600">
//       <Icon size={14} />
//     </span>
//     <div className="min-w-0">
//       <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
//         {label}
//       </p>
//       {href ? (
//         <a href={href}
//            target={href.startsWith("http") ? "_blank" : undefined}
//            rel="noopener noreferrer"
//            className="text-sm font-medium text-gray-800 hover:text-emerald-600
//                       transition-colors break-all">
//           {children}
//         </a>
//       ) : (
//         <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
//       )}
//     </div>
//   </div>
// );

// /* ─── form field ────────────────────────────────────────── */
// const Field = ({ label, required, error, textarea, ...props }) => (
//   <div className="group">
//     <label className="block text-[11px] font-semibold uppercase tracking-wider
//                       text-gray-400 mb-1.5">
//       {label}
//       {required && <span className="text-red-400 ml-0.5">*</span>}
//     </label>

//     {textarea ? (
//       <textarea
//         {...props}
//         rows={5}
//         className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-gray-50/50
//                    outline-none resize-none transition-all duration-200
//                    placeholder:text-gray-300
//                    focus:bg-white focus:ring-2 focus:ring-emerald-500/20
//                    ${error
//                      ? "border-red-300 focus:border-red-400"
//                      : "border-gray-200 focus:border-emerald-400 hover:border-gray-300"
//                    }`}
//       />
//     ) : (
//       <input
//         {...props}
//         className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-gray-50/50
//                    outline-none transition-all duration-200
//                    placeholder:text-gray-300
//                    focus:bg-white focus:ring-2 focus:ring-emerald-500/20
//                    ${error
//                      ? "border-red-300 focus:border-red-400"
//                      : "border-gray-200 focus:border-emerald-400 hover:border-gray-300"
//                    }`}
//       />
//     )}

//     {error && (
//       <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
//         <AlertCircle size={11} />
//         {error}
//       </p>
//     )}
//   </div>
// );

// /* ─── hours table row ───────────────────────────────────── */
// const HourRow = ({ day, time, closed }) => (
//   <div className="flex justify-between items-center py-1.5
//                   border-b border-gray-100 last:border-0 text-sm">
//     <span className="text-gray-500">{day}</span>
//     <span className={closed ? "text-gray-300" : "font-medium text-gray-700"}>
//       {time}
//     </span>
//   </div>
// );

// /* ═══════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ══════════════════════════════════════════════════════════ */
// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "", phone: "", email: "", subject: "", message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handle = (e) => {
//     const { name, value } = e.target;
//     setForm((p) => ({ ...p, [name]: value }));
//     if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
//   };

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Name is required";
//     if (!form.phone.trim()) {
//       e.phone = "Phone is required";
//     } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
//       e.phone = "Enter a valid 10-digit number";
//     }
//     if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       e.email = "Enter a valid email";
//     if (!form.message.trim()) e.message = "Message is required";
//     setErrors(e);
//     return !Object.keys(e).length;
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!validate()) { toast.error("Please fix the errors above"); return; }
//     setLoading(true);
//     try {
//       const payload = Object.fromEntries(
//         Object.entries(form).filter(([, v]) => v.trim())
//       );
//       await axios.post(`${API}/contact`, payload);
//       toast.success("Message sent! We'll reply within 24 hours.", {
//         duration: 5000,
//         icon: <CheckCircle className="text-emerald-500" size={18} />,
//       });
//       setForm({ name: "", phone: "", email: "", subject: "", message: "" });
//     } catch (err) {
//       toast.error(
//         err?.response?.data?.detail || "Failed to send. Please try again.",
//         { duration: 4000 }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-center" richColors />

//       <main className="min-h-screen bg-[#f7f8f6]">

//         {/* ── HERO ───────────────────────────────────────── */}
//         <section className="relative bg-white border-b border-gray-100">
//           {/* subtle grid bg */}
//           <div className="absolute inset-0 opacity-[0.03]"
//                style={{
//                  backgroundImage:
//                    "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
//                  backgroundSize: "40px 40px",
//                }} />

//           <div className="relative max-w-6xl mx-auto px-6 py-14 lg:py-18">
//             <Tag>Get in touch</Tag>

//             <div className="mt-5 flex flex-col lg:flex-row lg:items-end
//                             lg:justify-between gap-4">
//               <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900
//                              leading-[1.15]">
//                 We'd love to<br className="hidden lg:block" /> hear from you.
//               </h1>
//               <p className="text-gray-500 text-base leading-relaxed max-w-sm lg:text-right">
//                 Farmer, retailer, or distributor — our team is here to help you
//                 get the right Barsana feed.
//               </p>
//             </div>

//             {/* quick-contact strip */}
//             <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
//               {COMPANY.phones?.map((p, i) => (
//                 <a key={i} href={`tel:${p.replace(/\D/g,"")}`}
//                    className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
//                   <Phone size={13} /> {p}
//                 </a>
//               ))}
//               <a href={`mailto:${COMPANY.email}`}
//                  className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
//                 <Mail size={13} /> {COMPANY.email}
//               </a>
//               <span className="flex items-center gap-1.5 text-gray-400">
//                 <Clock size={13} /> Mon–Sat: 9 AM – 7 PM
//               </span>
//             </div>
//           </div>
//         </section>

//         {/* ── BODY ───────────────────────────────────────── */}
//         <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
//           <div className="grid lg:grid-cols-[340px_1fr] gap-6">

//             {/* ── LEFT SIDEBAR ─────────────────────────── */}
//             <aside className="space-y-4">

//               {/* Contact details card */}
//               <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
//                 <p className="text-[11px] font-semibold uppercase tracking-widest
//                               text-gray-400 mb-3">
//                   Contact details
//                 </p>

//                 <Row icon={Phone} label="Phone"
//                      href={`tel:${COMPANY.phones?.[0]?.replace(/\D/g,"")}`}>
//                   {COMPANY.phones?.[0]}
//                   {COMPANY.phones?.[1] && (
//                     <><br />{COMPANY.phones[1]}</>
//                   )}
//                 </Row>

//                 <Row icon={MessageCircle} label="WhatsApp"
//                      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
//                        "Hello Sundra Group, I'd like to enquire about Barsana Pashu Aahar."
//                      )}`}>
//                   Chat on WhatsApp →
//                 </Row>

//                 <Row icon={Mail} label="Email"
//                      href={`mailto:${COMPANY.email}`}>
//                   {COMPANY.email}
//                 </Row>

//                 <Row icon={MapPin} label="Registered office">
//                   {COMPANY.regOffice}
//                 </Row>

//                 <Row icon={MapPin} label="Manufacturing unit">
//                   {COMPANY.unit}
//                 </Row>
//               </div>

//               {/* Business hours card */}
//               <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Clock size={14} className="text-emerald-600" />
//                   <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
//                     Business hours
//                   </p>
//                 </div>
//                 <HourRow day="Monday – Friday" time="9:00 AM – 7:00 PM" />
//                 <HourRow day="Saturday"         time="10:00 AM – 5:00 PM" />
//                 <HourRow day="Sunday"            time="Closed" closed />
//               </div>

//               {/* Map card */}
//               <div className="bg-white rounded-2xl border border-gray-100
//                               overflow-hidden shadow-sm">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.294!2d80.270!3d26.470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI4JzEyLjAiTiA4MMKwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                   width="100%"
//                   height="200"
//                   style={{ border: 0, display: "block" }}
//                   allowFullScreen
//                   loading="lazy"
//                   title="Company Location"
//                   className="grayscale hover:grayscale-0 transition-all duration-500"
//                 />
//                 <div className="px-4 py-3 border-t border-gray-100">
//                   <a
//                     href={`https://maps.google.com/?q=${COMPANY.regOffice}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1.5 text-xs font-medium
//                                text-emerald-600 hover:text-emerald-700 transition-colors"
//                   >
//                     <MapPin size={12} /> Open in Google Maps
//                     <ArrowRight size={12} />
//                   </a>
//                 </div>
//               </div>
//             </aside>

//             {/* ── FORM ─────────────────────────────────── */}
//             <div className="bg-white rounded-2xl border border-gray-100
//                             shadow-sm p-7 lg:p-8 h-fit">

//               <div className="mb-6 pb-5 border-b border-gray-100">
//                 <h2 className="text-xl font-bold text-gray-900 mb-1">
//                   Send us a message
//                 </h2>
//                 <p className="text-sm text-gray-400">
//                   Fill in the form below and we'll get back to you shortly.
//                 </p>
//               </div>

//               <form onSubmit={submit} className="space-y-4">
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <Field
//                     label="Full name" name="name"
//                     value={form.name} onChange={handle}
//                     required placeholder="Ramesh Kumar"
//                     error={errors.name}
//                   />
//                   <Field
//                     label="Phone number" name="phone" type="tel"
//                     value={form.phone} onChange={handle}
//                     required placeholder="9876543210"
//                     error={errors.phone}
//                   />
//                 </div>

//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <Field
//                     label="Email address" name="email" type="email"
//                     value={form.email} onChange={handle}
//                     placeholder="you@example.com"
//                     error={errors.email}
//                   />
//                   <Field
//                     label="Subject" name="subject"
//                     value={form.subject} onChange={handle}
//                     placeholder="How can we help?"
//                   />
//                 </div>

//                 <Field
//                   label="Your message" name="message"
//                   value={form.message} onChange={handle}
//                   required textarea
//                   placeholder="Describe your requirements or inquiry in detail…"
//                   error={errors.message}
//                 />

//                 {/* CTA row */}
//                 <div className="flex flex-col sm:flex-row items-start
//                                 sm:items-center justify-between gap-4 pt-1">
//                   <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
//                     By submitting, you agree to our privacy policy. We never share
//                     your information.
//                   </p>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="flex-shrink-0 flex items-center gap-2 px-6 py-3
//                                bg-emerald-600 hover:bg-emerald-700
//                                active:scale-[0.98]
//                                text-white text-sm font-semibold rounded-xl
//                                shadow-md shadow-emerald-600/20
//                                transition-all duration-200
//                                disabled:opacity-60 disabled:cursor-not-allowed"
//                   >
//                     {loading ? (
//                       <><Loader2 size={15} className="animate-spin" /> Sending…</>
//                     ) : (
//                       <><Send size={15} /> Send message</>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>

//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import {
  ArrowRight, Mail, MapPin, MessageCircle,
  Phone, Clock, Send, CheckCircle, AlertCircle, Loader2,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { COMPANY } from "../lib/products";
import { content } from "../lib/translate";

const API = `${import.meta.env.VITE_BACKEND_URL || ""}/api`;

/* ─── tiny helpers ─────────────────────────────────────── */

const Tag = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold
                   tracking-widest uppercase text-emerald-700 bg-emerald-50
                   border border-emerald-200 px-3 py-1 rounded-full">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
    {children}
  </span>
);

const Row = ({ icon: Icon, label, href, children }) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
    <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-50
                     flex items-center justify-center text-emerald-600">
      <Icon size={14} />
    </span>
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
        {label}
      </p>
      {href ? (
        <a href={href}
           target={href.startsWith("http") ? "_blank" : undefined}
           rel="noopener noreferrer"
           className="text-sm font-medium text-gray-800 hover:text-emerald-600
                      transition-colors break-all">
          {children}
        </a>
      ) : (
        <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
      )}
    </div>
  </div>
);

const Field = ({ label, required, error, textarea, ...props }) => (
  <div className="group">
    <label className="block text-[11px] font-semibold uppercase tracking-wider
                      text-gray-400 mb-1.5">
      {label}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    {textarea ? (
      <textarea
        {...props}
        rows={5}
        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-gray-50/50
                   outline-none resize-none transition-all duration-200
                   placeholder:text-gray-300
                   focus:bg-white focus:ring-2 focus:ring-emerald-500/20
                   ${error
                     ? "border-red-300 focus:border-red-400"
                     : "border-gray-200 focus:border-emerald-400 hover:border-gray-300"
                   }`}
      />
    ) : (
      <input
        {...props}
        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-gray-50/50
                   outline-none transition-all duration-200
                   placeholder:text-gray-300
                   focus:bg-white focus:ring-2 focus:ring-emerald-500/20
                   ${error
                     ? "border-red-300 focus:border-red-400"
                     : "border-gray-200 focus:border-emerald-400 hover:border-gray-300"
                   }`}
      />
    )}
    {error && (
      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
        <AlertCircle size={11} />
        {error}
      </p>
    )}
  </div>
);

const HourRow = ({ day, time, closed }) => (
  <div className="flex justify-between items-center py-1.5
                  border-b border-gray-100 last:border-0 text-sm">
    <span className="text-gray-500">{day}</span>
    <span className={closed ? "text-gray-300" : "font-medium text-gray-700"}>
      {time}
    </span>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function Contact({ lang = "en" }) {
  const t = (key) => content[key]?.[lang] ?? key;

  const [form, setForm] = useState({
    name: "", phone: "", email: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = t("contact.validation.name");
    if (!form.phone.trim()) {
      e.phone = t("contact.validation.phone");
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      e.phone = t("contact.validation.phone.invalid");
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("contact.validation.email");
    if (!form.message.trim()) e.message = t("contact.validation.message");
    setErrors(e);
    return !Object.keys(e).length;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) { toast.error(t("contact.form.error")); return; }
    setLoading(true);
    try {
      const payload = Object.fromEntries(
        Object.entries(form).filter(([, v]) => v.trim())
      );
      await axios.post(`${API}/contact`, payload);
      toast.success(t("contact.form.success"), {
        duration: 5000,
        icon: <CheckCircle className="text-emerald-500" size={18} />,
      });
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(
        err?.response?.data?.detail || t("contact.form.fail"),
        { duration: 4000 }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <main className="min-h-screen bg-[#f7f8f6]">

        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative bg-white border-b border-gray-100">
          <div className="absolute inset-0 opacity-[0.03]"
               style={{
                 backgroundImage:
                   "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
                 backgroundSize: "40px 40px",
               }} />

          <div className="relative max-w-6xl mx-auto px-6 py-14 lg:py-18">
            <Tag>{t("contact.hero.tag")}</Tag>

            <div className="mt-5 flex flex-col lg:flex-row lg:items-end
                            lg:justify-between gap-4">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900
                             leading-[1.15]">
                {t("contact.hero.title")}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm lg:text-right">
                {t("contact.hero.desc")}
              </p>
            </div>

            {/* quick-contact strip */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              {COMPANY.phones?.map((p, i) => (
                <a key={i} href={`tel:${p.replace(/\D/g, "")}`}
                   className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
                  <Phone size={13} /> {p}
                </a>
              ))}
              <a href={`mailto:${COMPANY.email}`}
                 className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
                <Mail size={13} /> {COMPANY.email}
              </a>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Clock size={13} /> {t("contact.hero.hours")}
              </span>
            </div>
          </div>
        </section>

        {/* ── BODY ───────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
          <div className="grid lg:grid-cols-[340px_1fr] gap-6">

            {/* ── LEFT SIDEBAR ─────────────────────────── */}
            <aside className="space-y-4">

              {/* Contact details card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-widest
                              text-gray-400 mb-3">
                  {t("contact.details.title")}
                </p>

                <Row icon={Phone} label={t("contact.details.phone")}
                     href={`tel:${COMPANY.phones?.[0]?.replace(/\D/g, "")}`}>
                  {COMPANY.phones?.[0]}
                  {COMPANY.phones?.[1] && <><br />{COMPANY.phones[1]}</>}
                </Row>

                <Row icon={MessageCircle} label={t("contact.details.whatsapp")}
                     href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                       "Hello Sundra Group, I'd like to enquire about Barsana Pashu Aahar."
                     )}`}>
                  {t("contact.details.whatsapp.cta")}
                </Row>

                <Row icon={Mail} label={t("contact.details.email")}
                     href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </Row>

                <Row icon={MapPin} label={t("contact.details.reg")}>
                  {COMPANY.regOffice}
                </Row>

                <Row icon={MapPin} label={t("contact.details.unit")}>
                  {COMPANY.unit}
                </Row>
              </div>

              {/* Business hours card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-emerald-600" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                    {t("contact.hours.title")}
                  </p>
                </div>
                <HourRow day={t("contact.hours.weekday")}  time={t("contact.hours.weekday.time")} />
                <HourRow day={t("contact.hours.saturday")} time={t("contact.hours.saturday.time")} />
                <HourRow day={t("contact.hours.sunday")}   time={t("contact.hours.sunday.time")} closed />
              </div>

              {/* Map card */}
              <div className="bg-white rounded-2xl border border-gray-100
                              overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.294!2d80.270!3d26.470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI4JzEyLjAiTiA4MMKwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  title="Company Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="px-4 py-3 border-t border-gray-100">
                  
                   <a href={`https://maps.google.com/?q=${COMPANY.regOffice}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium
                               text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <MapPin size={12} /> {t("contact.map.open")}
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </aside>

            {/* ── FORM ─────────────────────────────────── */}
            <div className="bg-white rounded-2xl border border-gray-100
                            shadow-sm p-7 lg:p-8 h-fit">

              <div className="mb-6 pb-5 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {t("contact.form.title")}
                </h2>
                <p className="text-sm text-gray-400">
                  {t("contact.form.desc")}
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={t("contact.field.name")} name="name"
                    value={form.name} onChange={handle}
                    required placeholder={t("contact.placeholder.name")}
                    error={errors.name}
                  />
                  <Field
                    label={t("contact.field.phone")} name="phone" type="tel"
                    value={form.phone} onChange={handle}
                    required placeholder={t("contact.placeholder.phone")}
                    error={errors.phone}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={t("contact.field.email")} name="email" type="email"
                    value={form.email} onChange={handle}
                    placeholder={t("contact.placeholder.email")}
                    error={errors.email}
                  />
                  <Field
                    label={t("contact.field.subject")} name="subject"
                    value={form.subject} onChange={handle}
                    placeholder={t("contact.placeholder.subject")}
                  />
                </div>

                <Field
                  label={t("contact.field.message")} name="message"
                  value={form.message} onChange={handle}
                  required textarea
                  placeholder={t("contact.placeholder.message")}
                  error={errors.message}
                />

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row items-start
                                sm:items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                    {t("contact.form.privacy")}
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-shrink-0 flex items-center gap-2 px-6 py-3
                               bg-emerald-600 hover:bg-emerald-700
                               active:scale-[0.98]
                               text-white text-sm font-semibold rounded-xl
                               shadow-md shadow-emerald-600/20
                               transition-all duration-200
                               disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><Loader2 size={15} className="animate-spin" /> {t("contact.form.submitting")}</>
                    ) : (
                      <><Send size={15} /> {t("contact.form.submit")}</>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}