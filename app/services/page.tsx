"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsCheck2, BsChevronDown, BsEnvelope, BsWhatsapp } from "react-icons/bs";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

const services = [
  { number:"01", title:"Payment gateway setup", description:"Set up Razorpay, Cashfree, PayU, Easebuzz or similar gateways on WooCommerce or Shopify, including payment testing.", price:"₹3,000", label:"WooCommerce / Shopify" },
  { number:"02", title:"Custom payment integration", description:"Integrate payment APIs, webhooks, callbacks and status handling into your custom website or application.", price:"₹10,000", label:"APIs · Webhooks · Callbacks" },
  { number:"03", title:"Payment issue debugging", description:"Investigate failed payments, webhook problems, refunds, transaction status mismatches and related integration issues.", price:"₹2,000", label:"Debugging · Troubleshooting" },
  { number:"04", title:"Landing pages & website fixes", description:"Build or fix responsive landing pages, UI issues and frontend problems using React or Next.js.", price:"₹5,000", label:"React · Next.js" },
];

const faqs = [
  ["How long does a typical project take?","Most smaller projects take around 2–7 days depending on the scope, gateway and how quickly access and requirements are available."],
  ["Which payment gateways can you work with?","I can work with Razorpay, Cashfree, PayU, Easebuzz and other gateways where the required API or platform documentation is available."],
  ["Do you need my login credentials?","Not initially. I prefer starting with documentation and test or sandbox access. Production access is only needed when the project requires it and should be shared securely."],
];

export default function ServicesPage() {
  const [openFaq,setOpenFaq]=useState<number|null>(null);
  const [formData,setFormData]=useState({name:"",email:"",website:"",requirement:""});
  const [isSending,setIsSending]=useState(false);

  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault(); setIsSending(true);
    const data=new FormData();
    data.append("name",formData.name);
    data.append("senderEmail",formData.email);
    data.append("website",formData.website);
    data.append("message",formData.requirement);
    const result=await sendEmail(data);
    if(result.error) toast.error(result.error);
    else { toast.success("Thanks! I'll get back to you shortly."); setFormData({name:"",email:"",website:"",requirement:""}); }
    setIsSending(false);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden pt-10 sm:pt-16">
        <div className="absolute right-[-8rem] top-10 -z-10 h-72 w-72 rounded-full bg-[#eeeaff] blur-3xl dark:bg-[#28234a] sm:h-96 sm:w-96"/>
        <div className="absolute bottom-0 left-[-10rem] -z-10 h-64 w-64 rounded-full bg-[#e6edff] blur-3xl dark:bg-[#18243e] sm:h-80 sm:w-80"/>
        <div className="w-full max-w-4xl">
          <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="mb-5 inline-flex rounded-full border border-[#d9d5ff] bg-white/65 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5148a8] shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-[#b9b1ff]">Freelance · Payments · Web</motion.p>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08}} className="max-w-4xl text-balance text-[3rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0d1326] dark:text-white sm:text-6xl md:text-[5rem]">Payment gateway integrations, <span className="bg-gradient-to-r from-[#4c72ed] via-[#7958ef] to-[#d05ad8] bg-clip-text text-transparent">done right.</span></motion.h1>
          <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.16}} className="mt-6 max-w-2xl text-[15px] leading-7 text-[#56627c] dark:text-white/70 sm:text-lg">I help Indian businesses and startups set up, fix and test online payments — Razorpay, Cashfree, PayU, Easebuzz and more — on WooCommerce, Shopify or custom websites.</motion.p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="flex items-center justify-center gap-2 rounded-full bg-[#11162a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 dark:bg-white dark:text-[#11162a]">View services <BsArrowRight/></a>
            <a href="#contact" className="flex items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white/75 px-6 py-3.5 text-sm font-medium text-[#25304a] shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.06] dark:text-white">Get a quote</a>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[["3+ years","Fintech experience"],["100+","Merchants onboarded"],["2–7 days","Typical delivery"]].map(([value,label])=><div key={label} className="rounded-2xl border border-black/[0.05] bg-white/55 p-4 dark:border-white/10 dark:bg-white/[0.04]"><p className="text-lg font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-[#69748b] dark:text-white/50">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 py-16 sm:py-24">
        <div className="mb-8"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6a58d9]">01 · Services</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">What I can help you with</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#69748b] dark:text-white/55">Clear scope, fixed starting prices and practical implementation support.</p></div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map(s=><motion.article key={s.number} whileHover={{y:-3}} className="flex h-full flex-col rounded-[1.5rem] border border-black/[0.06] bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
            <div className="flex items-start justify-between gap-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eeeaff] text-xs font-bold text-[#6a58d9] dark:bg-white/10 dark:text-[#b9b1ff]">{s.number}</span><div className="text-right"><p className="text-[10px] uppercase tracking-[0.14em] text-[#8a91a3] dark:text-white/40">Starting at</p><p className="text-xl font-semibold">{s.price}</p></div></div>
            <h3 className="mt-7 text-xl font-semibold tracking-tight">{s.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[#69748b] dark:text-white/55">{s.description}</p><div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#6a58d9] dark:text-[#b9b1ff]"><BsCheck2/>{s.label}</div>
          </motion.article>)}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#11162a] p-7 text-white shadow-[0_25px_70px_rgba(17,22,42,.12)] sm:p-9 dark:bg-white dark:text-[#11162a]"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#b6afff] dark:text-[#6a58d9]">02 · Why me</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">You get someone who understands both the code and the payment flow.</h2><p className="mt-5 text-sm leading-7 text-white/60 dark:text-[#5c6477]">My day-to-day work is around payment integrations, merchant onboarding and production issues. I can understand the business problem and then get into the technical details needed to solve it.</p></div>
          <div className="grid gap-3">{[["01","3+ years in fintech","Experience across payment integrations, merchant onboarding, APIs and technical operations."],["02","100+ merchants","Worked with 100+ merchants on payment integration and go-live requirements as part of my role."],["03","Built Arcade","Built an internal API integration tool to make payment gateway onboarding easier to understand and test."]].map(([n,t,d])=><div key={n} className="rounded-[1.5rem] border border-black/[.06] bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/[.04]"><div className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eeeaff] text-xs font-bold text-[#6a58d9] dark:bg-white/10 dark:text-[#b9b1ff]">{n}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-1.5 text-sm leading-6 text-[#69748b] dark:text-white/55">{d}</p></div></div></div>)}</div>
        </div>
      </section>

      <section className="py-16 sm:py-24"><div className="mb-8"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6a58d9]">03 · Process</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">How it works</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["01","Share your requirement"],["02","Get a fixed quote in 24 hours"],["03","Delivery + testing"],["04","Pay after it works"]].map(([n,t])=><div key={n} className="rounded-[1.5rem] border border-black/[.06] bg-white/70 p-6 dark:border-white/10 dark:bg-white/[.04]"><span className="text-xs font-bold text-[#6a58d9] dark:text-[#b9b1ff]">{n}</span><h3 className="mt-6 text-lg font-semibold tracking-tight">{t}</h3></div>)}</div></section>

      <section className="py-16 sm:py-24"><div className="mb-8"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6a58d9]">04 · FAQ</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">A few quick answers</h2></div><div className="overflow-hidden rounded-[2rem] border border-black/[.06] bg-white/70 dark:border-white/10 dark:bg-white/[.04]">{faqs.map(([q,a],i)=>{const open=openFaq===i;return <div key={q} className="border-b border-black/[.06] last:border-0 dark:border-white/10"><button type="button" onClick={()=>setOpenFaq(open?null:i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"><span className="text-sm font-semibold">{q}</span><BsChevronDown className={open?"rotate-180 text-[#6a58d9] transition-transform":"text-[#6a58d9] transition-transform"}/></button>{open&&<div className="px-5 pb-5 sm:px-7"><p className="max-w-3xl text-sm leading-6 text-[#69748b] dark:text-white/55">{a}</p></div>}</div>})}</div></section>

      <section id="contact" className="scroll-mt-28 py-16 sm:py-24">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#11162a] text-white shadow-[0_30px_90px_rgba(17,22,42,.18)] md:grid-cols-[.8fr_1.2fr] dark:bg-white dark:text-[#11162a]">
          <div className="p-7 sm:p-10"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#b8b0ff] dark:text-[#6a58d9]">05 · Get started</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Tell me what you need help with.</h2><p className="mt-4 max-w-md text-sm leading-7 text-white/60 dark:text-[#5c6477]">Send the details below and I&apos;ll get back to you with the next steps and a fixed quote.</p><div className="mt-7 flex flex-col gap-3"><a href="mailto:adityachaturvedi2906@gmail.com" className="flex w-fit items-center gap-2 text-sm font-medium underline underline-offset-4"><BsEnvelope/>Email me</a><a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"><BsWhatsapp/>WhatsApp</a></div></div>
          <form onSubmit={handleSubmit} className="border-t border-white/10 bg-white/[.05] p-5 sm:p-8 md:border-l md:border-t-0 dark:border-black/10 dark:bg-black/[.025]"><div className="grid gap-3"><input className="h-14 rounded-2xl border border-white/10 bg-white/[.06] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25 dark:border-black/10 dark:bg-white dark:text-[#11162a] dark:placeholder:text-gray-400" type="text" required maxLength={120} placeholder="Your name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})}/><input className="h-14 rounded-2xl border border-white/10 bg-white/[.06] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25 dark:border-black/10 dark:bg-white dark:text-[#11162a] dark:placeholder:text-gray-400" type="email" required maxLength={500} placeholder="Your email" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})}/><input className="h-14 rounded-2xl border border-white/10 bg-white/[.06] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25 dark:border-black/10 dark:bg-white dark:text-[#11162a] dark:placeholder:text-gray-400" type="url" maxLength={500} placeholder="Website URL (optional)" value={formData.website} onChange={e=>setFormData({...formData,website:e.target.value})}/><textarea className="min-h-40 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25 dark:border-black/10 dark:bg-white dark:text-[#11162a] dark:placeholder:text-gray-400" required maxLength={5000} placeholder="What do you need help with?" value={formData.requirement} onChange={e=>setFormData({...formData,requirement:e.target.value})}/><button type="submit" disabled={isSending} className="mt-1 flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-semibold text-[#11162a] transition hover:-translate-y-0.5 disabled:opacity-60 dark:bg-[#11162a] dark:text-white">{isSending?"Sending...":"Request a quote"}{!isSending&&<BsArrowRight/>}</button></div></form>
        </div>
      </section>
      <div className="pb-6 text-center"><Link href="/" className="text-xs font-medium text-[#69748b] hover:text-[#6a58d9] dark:text-white/50">← Back to portfolio</Link></div>
    </main>
  );
}
