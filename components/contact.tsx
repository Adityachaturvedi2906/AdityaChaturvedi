"use client"

import React, { useState, FormEvent } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [formData, setFormData] = useState({
    senderEmail: "",
    message: "",
  });

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object and append the form fields
    const formDataObject = new FormData();
    formDataObject.append("senderEmail", formData.senderEmail);
    formDataObject.append("message", formData.message);

    const { data, error } = await sendEmail(formDataObject);

    if (error) {
      toast.error(error);
      console.error(error);
    } else {
      toast.success("Email sent successfully!");
      setFormData({
        senderEmail: "",
        message: "",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 text-sm -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:adityachaturvedi2906@gmail.com">
          adityachaturvedi2906@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleFormSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={handleInputChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleInputChange}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
