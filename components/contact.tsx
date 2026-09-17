"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsEnvelope } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [formData, setFormData] = useState({ senderEmail: "", message: "" });

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObject = new FormData();
    formDataObject.append("senderEmail", formData.senderEmail);
    formDataObject.append("message", formData.message);
    const { data, error } = await sendEmail(formDataObject);
    if (error) {
      toast.error(error);
      console.error(error);
    } else {
      toast.success("Email sent successfully!");
      setFormData({ senderEmail: "", message: "" });
    }
  };

  return (
    <motion.section id="contact" ref={ref} className="mx-auto mb-12 w-full max-w-6xl scroll-mt-28" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="grid overflow-hidden rounded-[2rem] bg-[#11162a] text-white shadow-[0_30px_90px_rgba(17,22,42,0.18)] md:grid-cols-[.8fr_1.2fr] dark:bg-white dark:text-[#11162a]">
        <div className="relative p-7 sm:p-10"><div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-[#6e5ce5]/25 blur-3xl" /><p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8b0ff] dark:text-[#6a58d9]">05 · Contact</p><h2 className="relative mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Have a product problem worth unpacking?</h2><p className="relative mt-4 max-w-md text-sm leading-7 text-white/60 dark:text-[#5c6477]">I&apos;m open to conversations around product operations, growth, integrations, and technical product roles.</p><a href="mailto:adityachaturvedi2906@gmail.com" className="relative mt-7 flex w-fit items-center gap-2 text-sm font-medium underline decoration-white/20 underline-offset-4 hover:decoration-white/60 dark:decoration-black/20"><BsEnvelope /> adityachaturvedi2906@gmail.com <BsArrowUpRight /></a></div>
        <form onSubmit={handleFormSubmit} className="border-t border-white/10 bg-white/[0.05] p-5 sm:p-8 md:border-l md:border-t-0 dark:border-black/10 dark:bg-black/[0.025]">
          <div className="grid gap-3"><input className="h-14 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25 dark:border-black/10 dark:bg-white dark:text-[#11162a] dark:placeholder:text-gray-400" name="senderEmail" type="email" required maxLength={500} placeholder="Your email" value={formData.senderEmail} onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })} /><textarea className="h-44 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25 dark:border-black/10 dark:bg-white dark:text-[#11162a] dark:placeholder:text-gray-400" name="message" placeholder="Tell me what you&apos;re working on" required maxLength={5000} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} /><div className="[&>button]:w-full"><SubmitBtn /></div></div>
        </form>
      </div>
    </motion.section>
  );
}
